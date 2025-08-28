import { useState, useEffect, useCallback, useRef } from 'react';
import { Question, SrsData, ShuffledQuestion, Deck } from '@/types';
import { 
    LS_STATS_KEY, 
    LS_DECK_KEY, 
    LS_SRS_KEY, 
    LS_ACHIEVEMENTS_KEY,
    DECK_COMPLETION_BONUS, 
    DAILY_GOAL_BONUS, 
    INITIAL_HEARTS,
    SRS_INTERVALS
} from '@/lib/constants';
import { todayKey, daysBetween, shuffle, hashString } from '@/lib/utils';
// CORREÇÃO: Mudamos o caminho da importação para usar o atalho '@/hooks/'
import { useAudio } from '@/hooks/useAudio';
import { parseTxtDeck } from '@/lib/parser';
import { achievements } from '@/lib/achievements';
import { DEFAULT_DECKS } from '@/data/defaultDecks';

export function useQuizEngine() {
  // Estados da UI e Sessão
  const [availableDecks, setAvailableDecks] = useState<Deck[]>([]);
  const [deckId, setDeckId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExpl, setShowExpl] = useState(false);
  const [shuffleOnLoad, setShuffleOnLoad] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [dark, setDark] = useState(true);
  const [lockUntil, setLockUntil] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [sessionWrongAnswers, setSessionWrongAnswers] = useState<Question[]>([]);
  const [reviewingQuestion, setReviewingQuestion] = useState<Question | null>(null);
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [quizMode, setQuizMode] = useState<"deck" | "srs">("deck");
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [displayedQuestion, setDisplayedQuestion] = useState<ShuffledQuestion | null>(null);

  // Estados de Gamificação
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [hearts, setHearts] = useState(INITIAL_HEARTS);
  const [streakDays, setStreakDays] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [goal, setGoal] = useState(100);
  const [combo, setCombo] = useState(0);
  const [confettiKey, setConfettiKey] = useState(0);
  const [lastGain, setLastGain] = useState<number | null>(null);
  const [emojiKey, setEmojiKey] = useState(0);
  const [questionStart, setQuestionStart] = useState<number | null>(null);
  const [bonusAwarded, setBonusAwarded] = useState(false);
  const [dailyBonusAwarded, setDailyBonusAwarded] = useState(false);
  const [decksCompleted, setDecksCompleted] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  // Dados e Refs
  const [srsData, setSrsData] = useState<SrsData>({});
  const { playCorrect, playWrong, playFanfare } = useAudio();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Efeitos para carregar e salvar dados do localStorage
  useEffect(() => {
    const rawAchievements = localStorage.getItem(LS_ACHIEVEMENTS_KEY);
    if (rawAchievements) try { setUnlockedAchievements(JSON.parse(rawAchievements)); } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_ACHIEVEMENTS_KEY, JSON.stringify(unlockedAchievements));
  }, [unlockedAchievements]);
  
  useEffect(() => {
    const rawSrs = localStorage.getItem(LS_SRS_KEY);
    if (rawSrs) try { setSrsData(JSON.parse(rawSrs)); } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_SRS_KEY, JSON.stringify(srsData));
  }, [srsData]);

  useEffect(() => {
    const manifestRaw = localStorage.getItem("quizg-v1-deck-manifest");
    if (!manifestRaw || JSON.parse(manifestRaw).length === 0) {
      if (DEFAULT_DECKS.length > 0) {
        const decksWithStableIds = DEFAULT_DECKS.map(deck => ({
            ...deck,
            questions: deck.questions.map((q: Question) => ({
                ...q,
                id: hashString(q.text)
            }))
        }));

        const defaultManifest = decksWithStableIds.map(deck => ({ id: deck.id, name: deck.name }));
        localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(defaultManifest));
        
        decksWithStableIds.forEach(deck => {
            localStorage.setItem(LS_DECK_KEY(deck.id), JSON.stringify({ questions: deck.questions }));
        });

        setAvailableDecks(defaultManifest);
      }
    } else {
      setAvailableDecks(JSON.parse(manifestRaw));
    }
  }, []);

  useEffect(() => {
    const raw = localStorage.getItem(LS_STATS_KEY);
    const today = todayKey();
    if (raw) {
      try {
        const s = JSON.parse(raw);
        const last = s.lastActiveDate as number | undefined;
        setStreakDays(last ? (daysBetween(last, today) === 1 ? (s.streakDays || 0) + 1 : (daysBetween(last, today) === 0 ? s.streakDays || 0 : 1)) : 1);
        setXp(s.xp || 0);
        setLevel(s.level || 1);
        setHearts(s.hearts ?? INITIAL_HEARTS);
        setGoal(s.goal ?? 100);
        setTodayXp(s.lastXPDate === today ? s.todayXp || 0 : 0);
        setLockUntil(s.lockUntil || null);
        setDailyBonusAwarded(s.dailyBonusAwardedFor === today);
        setDecksCompleted(s.decksCompleted || 0);
      } catch {}
    } else {
      setStreakDays(1);
    }
  }, []);

  useEffect(() => {
    const today = todayKey();
    localStorage.setItem(LS_STATS_KEY, JSON.stringify({
      lastActiveDate: today, streakDays, xp, level, hearts, goal, todayXp, lastXPDate: today, lockUntil, dailyBonusAwardedFor: dailyBonusAwarded ? today : null, decksCompleted
    }));
  }, [streakDays, xp, level, hearts, goal, todayXp, lockUntil, dailyBonusAwarded, decksCompleted]);

  // Efeitos de lógica do jogo
  useEffect(() => {
    if (lockUntil) {
      const id = setInterval(() => {
        setNow(Date.now());
        if (Date.now() >= lockUntil) {
          setLockUntil(null);
          setHearts(INITIAL_HEARTS);
        }
      }, 1000);
      return () => clearInterval(id);
    }
  }, [lockUntil]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const newLevel = Math.floor(xp / 250) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      setConfettiKey(k => k + 1);
    }
  }, [xp, level]);

  useEffect(() => {
    const stats = { decksCompleted, streakDays, level, xp };
    const newlyUnlocked: string[] = [];
    achievements.forEach(ach => {
      if (!unlockedAchievements.includes(ach.id) && ach.isUnlocked(stats)) {
        newlyUnlocked.push(ach.id);
      }
    });
    if (newlyUnlocked.length > 0) {
      setUnlockedAchievements(prev => [...prev, ...newlyUnlocked]);
    }
  }, [decksCompleted, streakDays, level, xp, unlockedAchievements]);

  useEffect(() => {
    if (todayXp >= goal && !dailyBonusAwarded) {
      setXp(x => x + DAILY_GOAL_BONUS);
      setDailyBonusAwarded(true);
      setConfettiKey(k => k + 1);
    }
  }, [todayXp, goal, dailyBonusAwarded]);

  useEffect(() => {
    if (queue.length === 0 && questions.length > 0 && !isSessionComplete) {
      setIsSessionComplete(true);
      if (!bonusAwarded) {
        setXp(x => x + DECK_COMPLETION_BONUS);
        setDecksCompleted(d => d + 1);
        setBonusAwarded(true);
        setConfettiKey(k => k + 1);
        playFanfare();
      }
    }
  }, [queue.length, questions.length, bonusAwarded, isSessionComplete, playFanfare]);

  useEffect(() => {
    if (!deckId) {
      if (quizMode !== 'srs') {
        setQuestions([]); setQueue([]); setCurrent(null);
      }
      return;
    };
    setQuizMode("deck");
    const raw = localStorage.getItem(LS_DECK_KEY(deckId));
    if (raw) {
      try {
        const d = JSON.parse(raw);
        if (d.questions) {
          const loadedQuestions = d.questions;
          setQuestions(loadedQuestions);
          const order = loadedQuestions.map((_: Question, i: number) => i);
          const newQueue = shuffleOnLoad ? shuffle(order) : order;
          setQueue(newQueue);
          setCurrent(newQueue[0] ?? null);
          setSessionWrongAnswers([]);
          setBonusAwarded(false);
          setIsSessionComplete(false);
        }
      } catch {}
    }
  }, [deckId, shuffleOnLoad]);

  useEffect(() => {
    if (current === null) {
      setDisplayedQuestion(null);
      return;
    }
    const originalQuestion = questions[current];
    if (!originalQuestion) return;

    if (shuffleOnLoad) {
      const optionsWithOriginalIndex = originalQuestion.options.map((option, index) => ({ option, index }));
      const shuffledOptionsWithIndex = shuffle(optionsWithOriginalIndex);
      const shuffledOptions = shuffledOptionsWithIndex.map(item => item.option);
      const shuffledAnswerIndex = shuffledOptionsWithIndex.findIndex(item => item.index === originalQuestion.answerIndex);
      setDisplayedQuestion({ ...originalQuestion, shuffledOptions, shuffledAnswerIndex });
    } else {
      setDisplayedQuestion({ ...originalQuestion, shuffledOptions: originalQuestion.options, shuffledAnswerIndex: originalQuestion.answerIndex });
    }
    setQuestionStart(performance.now());
  }, [current, questions, shuffleOnLoad]);

  // Funções de Ação (Callbacks)
  const advanceQueue = useCallback((wasCorrect: boolean) => {
    if (current === null) return;
    const newQueue = [...queue];
    const idxPos = newQueue.indexOf(current);
    if (idxPos > -1) {
      if (wasCorrect) newQueue.splice(idxPos, 1);
      else newQueue.push(newQueue.splice(idxPos, 1)[0]);
    }
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setQueue(newQueue);
    setCurrent(newQueue[0] ?? null);
  }, [current, queue]);

  const updateSrsData = useCallback((question: Question, correct: boolean) => {
    setSrsData(prevSrsData => {
        const now = Date.now();
        const dayInMillis = 24 * 60 * 60 * 1000;
        const currentEntry = prevSrsData[question.id] || {
            question,
            deckId: deckId || "srs-review",
            deckName: availableDecks.find(d => d.id === deckId)?.name || "Revisão",
            correctStreak: 0,
            nextReview: now,
            correctCount: 0,
            wrongCount: 0,
        };

        let newCorrectStreak = currentEntry.correctStreak;
        let nextReview;

        if (correct) {
            newCorrectStreak += 1;
            let intervalInDays = SRS_INTERVALS[Math.min(newCorrectStreak - 1, SRS_INTERVALS.length - 1)];
            if (newCorrectStreak > SRS_INTERVALS.length) {
                intervalInDays += (newCorrectStreak - SRS_INTERVALS.length) * 30;
            }
            nextReview = now + intervalInDays * dayInMillis;
        } else {
            newCorrectStreak = 0;
            nextReview = now;
        }

        const newEntry = { 
            ...currentEntry, 
            question, 
            correctStreak: newCorrectStreak, 
            nextReview,
            correctCount: currentEntry.correctCount + (correct ? 1 : 0),
            wrongCount: currentEntry.wrongCount + (correct ? 0 : 1),
        };
        
        return {
            ...prevSrsData,
            [question.id]: newEntry
        };
    });
  }, [deckId, availableDecks]);

  const computeGain = (elapsedMs: number, comboNow: number) => {
    const base = 8 + Math.floor(Math.random() * 13);
    const speed = elapsedMs < 3000 ? 10 : elapsedMs < 7000 ? 6 : elapsedMs < 12000 ? 3 : 0;
    const comboBonus = Math.min(15, comboNow * 3);
    return base + speed + comboBonus;
  };

  const onSelect = useCallback((idx: number) => {
    if (!displayedQuestion || selected != null || current === null) return;
    
    const correct = idx === displayedQuestion.shuffledAnswerIndex;
    const originalQuestion = questions[current];
    
    const wasAlreadyWrong = sessionWrongAnswers.some(q => q.id === originalQuestion.id);
    if (!wasAlreadyWrong) {
        updateSrsData(originalQuestion, correct);
    } else if (correct) {
      // Intentionally not updating SRS to "forgive" the previous error in the same session
    } else {
        updateSrsData(originalQuestion, false); // Reinforce the error on subsequent wrong answers
    }

    const elapsed = questionStart ? performance.now() - questionStart : 0;
    setSelected(idx);
    setIsCorrect(correct);

    if (correct) {
      const gain = computeGain(elapsed, combo);
      setLastGain(gain);
      setXp(x => x + gain);
      setTodayXp(t => t + gain);
      setCombo(c => c + 1);
      setEmojiKey(k => k + 1);
      playCorrect();
      setTimeout(() => advanceQueue(true), 650);
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);
      setCombo(0);
      setShowExpl(true);
      playWrong();
      
      if (!wasAlreadyWrong) {
        setSessionWrongAnswers(prev => [...prev, originalQuestion]);
      }

      if (newHearts <= 0) setLockUntil(Date.now() + 5 * 60 * 1000);
      setTimeout(() => advanceQueue(false), 900);
    }
  }, [displayedQuestion, selected, current, questions, updateSrsData, questionStart, combo, hearts, playCorrect, playWrong, sessionWrongAnswers, advanceQueue]);

  const resetSession = () => {
    if (questions.length === 0) return;
    setIsSessionComplete(false);
    const order = questions.map((_, i) => i);
    const newQueue = shuffleOnLoad ? shuffle(order) : order;
    setQueue(newQueue);
    setCurrent(newQueue[0]);
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setCombo(0);
    setSessionWrongAnswers([]);
    setBonusAwarded(false);
  };

  const handleUpload = async (file: File) => {
    const text = await file.text();
    const { questions: qs, errors: parseErrors } = parseTxtDeck(text);
    setErrors(parseErrors);
    if (qs.length === 0) return;
    const deckName = file.name.replace(/\.txt$/, "");
    const newDeckId = `${deckName}-${hashString(text)}`;
    localStorage.setItem(LS_DECK_KEY(newDeckId), JSON.stringify({ questions: qs }));
    const manifest = JSON.parse(localStorage.getItem("quizg-v1-deck-manifest") || "[]");
    if (!manifest.some((d: { id: string }) => d.id === newDeckId)) {
      const newManifest = [...manifest, { id: newDeckId, name: deckName }];
      localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(newManifest));
      setAvailableDecks(newManifest);
    }
    setDeckId(newDeckId);
  };

  const startSrsSession = () => {
    const now = Date.now();
    const dueQuestions = Object.values(srsData)
      .filter((item: any) => item.nextReview <= now)
      .map((item: any) => item.question);

    if (dueQuestions.length === 0) {
      alert("Nenhuma questão para revisar hoje!");
      return;
    }

    setQuizMode("srs");
    setDeckId(null);
    setQuestions(dueQuestions);
    const order = dueQuestions.map((_, i) => i);
    const newQueue = shuffle(order);
    setQueue(newQueue);
    setCurrent(newQueue[0] ?? null);
    setIsSessionComplete(false);
    setSessionWrongAnswers([]);
  };

  const buyLivesWithXp = (cost: number, amount: number) => {
    if (xp >= cost) {
      setXp(x => x - cost);
      setHearts(h => h + amount);
      setLockUntil(null);
    }
  };


  const clearSession = () => {
    setQuestions([]);
    setQueue([]);
    setCurrent(null);
    setDeckId(null);
    setIsSessionComplete(false);
  };

  return {
    state: {
      availableDecks, deckId, questions, queue, current, selected, isCorrect, showExpl,
      shuffleOnLoad, errors, dark, xp, level, hearts, streakDays, todayXp, goal, combo,
      confettiKey, lastGain, emojiKey, lockUntil, now, sessionWrongAnswers, reviewingQuestion,
      isSessionComplete, srsData, quizMode, dailyBonusAwarded, showStatsModal,
      unlockedAchievements, displayedQuestion
    },
    actions: {
      setDeckId, setShuffleOnLoad, setDark, setGoal, setReviewingQuestion, 
      setShowStatsModal, onSelect, resetSession, handleUpload, startSrsSession,
      buyLivesWithXp,
      clearSession
    },
    refs: { fileInputRef }
  };
}