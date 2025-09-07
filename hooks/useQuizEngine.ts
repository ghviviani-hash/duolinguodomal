// hooks/useQuizEngine.ts

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Question, Deck } from '@/types';
import { useUserStats } from './useUserStats';
import { useDeckManager } from './useDeckManager';
import { useQuizSession } from './useQuizSession';
import { DECK_COMPLETION_BONUS } from '@/lib/constants';
import { useAudio } from './useAudio';
import { isPast } from 'date-fns';

export function useQuizEngine() {
  const { stats, actions: statsActions } = useUserStats();
  const { decks, uploadErrors, fileInputRef, actions: deckActions } = useDeckManager();
  const [confettiKey, setConfettiKey] = useState(0);
  const { playFanfare } = useAudio();
  const [deckId, setDeckId] = useState<string | null>(null);
  const [reviewingQuestion, setReviewingQuestion] = useState<Question | null>(null);

  const handleQuestionAnswered = useCallback(({ question, correct, gain }: { question: Question, correct: boolean, gain: number }) => {
    statsActions.updateSrsData(question, correct, deckId, decks);
    if (correct) {
      statsActions.addXp(gain);
      statsActions.incrementAnsweredCount();
    } else {
      statsActions.logWrongAnswer(question);
    }
  }, [statsActions, deckId, decks]);
  
  const handleSessionComplete = useCallback(() => {
    statsActions.addXp(DECK_COMPLETION_BONUS);
    statsActions.completeDeck();
    setConfettiKey(k => k + 1);
    playFanfare();
  }, [statsActions, playFanfare]);

  const { session, actions: sessionActions } = useQuizSession({
    onQuestionAnswered: handleQuestionAnswered,
    onSessionComplete: handleSessionComplete,
  });

  const [shuffleOnLoad, setShuffleOnLoad] = useState(true);
  const [dark, setDark] = useState(true);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);


  useEffect(() => { const savedTheme = localStorage.getItem('theme'); const isDark = savedTheme ? JSON.parse(savedTheme) : true; setDark(isDark); }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); localStorage.setItem('theme', JSON.stringify(dark)); }, [dark]);

  const { startSession, clearSession } = sessionActions;
  useEffect(() => {
    if (deckId) {
      const selectedDeck = decks.find((d: Deck) => d.id === deckId);
      if (selectedDeck && selectedDeck.questions.length > 0) {
        startSession(selectedDeck.questions, shuffleOnLoad);
      }
    } else {
      clearSession();
    }
  }, [deckId, decks, shuffleOnLoad, startSession, clearSession]);

  const handleUploadAndSelect = useCallback(async (file: File) => {
    const newDeckId = await deckActions.handleUpload(file);
    if (newDeckId) { setDeckId(newDeckId); }
  }, [deckActions]);
  
  const startSrsSession = useCallback(() => {
    const dueQuestions = Object.values(stats.srsData).filter((item: any) => isPast(new Date(item.nextReview))).map((item: any) => item.question);
    if (dueQuestions.length === 0) { alert("Nenhuma questão para revisar hoje!"); return; }
    setDeckId(null);
    startSession(dueQuestions, true);
  }, [stats.srsData, startSession]);

  const actions = useMemo(() => ({
    setDeckId,
    setShuffleOnLoad,
    setDark,
    handleUpload: handleUploadAndSelect,
    startSrsSession,
    setReviewingQuestion,
    setShowStatsModal,
    setShowIntroModal,
    ...sessionActions,
    ...statsActions
  }), [setDeckId, setShuffleOnLoad, setDark, handleUploadAndSelect, startSrsSession, sessionActions, statsActions]);

  return {
    state: { stats, decks, session, deckId, shuffleOnLoad, dark, uploadErrors, confettiKey, reviewingQuestion, showStatsModal, showIntroModal },
    actions,
    refs: { fileInputRef }
  };
}