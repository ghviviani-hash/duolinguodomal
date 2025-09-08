// hooks/useUserStats.ts

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Question, SrsData, WrongAnswerLog, Deck } from '@/types';
import { LS_STATS_KEY, LS_SRS_KEY, LS_WRONG_ANSWER_LOG_KEY, LS_ACHIEVEMENTS_KEY, SRS_INTERVALS } from '@/lib/constants';
import { todayKey } from '@/lib/utils';

const XP_PER_LEVEL = 100;

export function useUserStats() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streakDays, setStreakDays] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [goal, setGoal] = useState(100);
  const [decksCompleted, setDecksCompleted] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [srsData, setSrsData] = useState<SrsData>({});
  const [wrongAnswerLog, setWrongAnswerLog] = useState<WrongAnswerLog[]>([]);

  useEffect(() => {
    const rawStats = localStorage.getItem(LS_STATS_KEY);
    if (rawStats) { try { const s = JSON.parse(rawStats); setXp(s.xp || 0); setLevel(s.level || 1); setStreakDays(s.streakDays || 0); setTotalQuestionsAnswered(s.totalQuestionsAnswered || 0); setDecksCompleted(s.decksCompleted || 0); setGoal(s.goal || 100); } catch {} }
    const rawSrs = localStorage.getItem(LS_SRS_KEY);
    if (rawSrs) { try { setSrsData(JSON.parse(rawSrs)); } catch {} }
    const rawLog = localStorage.getItem(LS_WRONG_ANSWER_LOG_KEY);
    if (rawLog) { try { setWrongAnswerLog(JSON.parse(rawLog)); } catch {} }
    const rawAchievements = localStorage.getItem(LS_ACHIEVEMENTS_KEY);
    if (rawAchievements) { try { setUnlockedAchievements(JSON.parse(rawAchievements)); } catch {} }
  }, []);

  useEffect(() => { const today = todayKey(); localStorage.setItem(LS_STATS_KEY, JSON.stringify({ xp, level, streakDays, goal, todayXp, lastXPDate: today, decksCompleted, totalQuestionsAnswered })); }, [xp, level, streakDays, goal, todayXp, decksCompleted, totalQuestionsAnswered]);
  useEffect(() => { localStorage.setItem(LS_SRS_KEY, JSON.stringify(srsData)); }, [srsData]);
  useEffect(() => { localStorage.setItem(LS_WRONG_ANSWER_LOG_KEY, JSON.stringify(wrongAnswerLog)); }, [wrongAnswerLog]);
  useEffect(() => { localStorage.setItem(LS_ACHIEVEMENTS_KEY, JSON.stringify(unlockedAchievements)); }, [unlockedAchievements]);

  const levelUp = useCallback(() => {
    const xpNeededForNextLevel = level * XP_PER_LEVEL;
    if (xp >= xpNeededForNextLevel) {
      setLevel(prevLevel => prevLevel + 1);
      setXp(prevXp => prevXp - xpNeededForNextLevel);
    }
  }, [xp, level]);

  useEffect(() => {
    levelUp();
  }, [xp, levelUp]);

  const addXp = useCallback((amount: number) => { setXp(prev => prev + amount); setTodayXp(prev => prev + amount); }, []);
  const incrementAnsweredCount = useCallback(() => { setTotalQuestionsAnswered(prev => prev + 1); }, []);
  const completeDeck = useCallback(() => { setDecksCompleted(prev => prev + 1); }, []);
  const logWrongAnswer = useCallback((question: Question) => { if (question.tag) { const newLogEntry: WrongAnswerLog = { tag: question.tag, timestamp: Date.now() }; setWrongAnswerLog(prev => [...prev, newLogEntry]); } }, []);
  const updateSrsData = useCallback((question: Question, correct: boolean, deckId: string | null, availableDecks: Deck[]) => {
    setSrsData(prevSrsData => {
        const now = Date.now(); const dayInMillis = 24 * 60 * 60 * 1000;
        const currentEntry = prevSrsData[question.id] || { question, deckId: deckId || "srs-review", deckName: availableDecks.find((d: Deck) => d.id === deckId)?.name || "Revisão", correctStreak: 0, nextReview: now, correctCount: 0, wrongCount: 0 };
        let newCorrectStreak = currentEntry.correctStreak; let nextReview;
        if (correct) {
            newCorrectStreak += 1; let intervalInDays = SRS_INTERVALS[Math.min(newCorrectStreak - 1, SRS_INTERVALS.length - 1)];
            if (newCorrectStreak > SRS_INTERVALS.length) { intervalInDays += (newCorrectStreak - SRS_INTERVALS.length) * 30; }
            nextReview = now + intervalInDays * dayInMillis;
        } else { newCorrectStreak = 0; nextReview = now; }
        const newEntry = { ...currentEntry, question, correctStreak: newCorrectStreak, nextReview, correctCount: currentEntry.correctCount + (correct ? 1 : 0), wrongCount: currentEntry.wrongCount + (correct ? 0 : 1) };
        return { ...prevSrsData, [question.id]: newEntry };
    });
  }, []);

  const actions = useMemo(() => ({ addXp, incrementAnsweredCount, completeDeck, logWrongAnswer, updateSrsData, setGoal, setUnlockedAchievements }), [addXp, incrementAnsweredCount, completeDeck, logWrongAnswer, updateSrsData]);

  return { stats: { xp, level, streakDays, todayXp, goal, decksCompleted, totalQuestionsAnswered, unlockedAchievements, srsData, wrongAnswerLog }, actions };
}