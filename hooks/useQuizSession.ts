// hooks/useQuizSession.ts

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Question, ShuffledQuestion } from '@/types';
import { shuffle } from '@/lib/utils';
import { useAudio } from '@/hooks/useAudio';

interface QuizSessionProps {
  onQuestionAnswered: (args: { question: Question, correct: boolean, gain: number }) => void;
  onSessionComplete: (args: { elapsedTime: number }) => void;
}

export function useQuizSession({ onQuestionAnswered, onSessionComplete }: QuizSessionProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExpl, setShowExpl] = useState(false);
  const [displayedQuestion, setDisplayedQuestion] = useState<ShuffledQuestion | null>(null);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [sessionLiveTime, setSessionLiveTime] = useState(0);
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [sessionWrongAnswers, setSessionWrongAnswers] = useState<Question[]>([]);
  const [lastGain, setLastGain] = useState<number | null>(null);
  const [combo, setCombo] = useState(0);
  const [questionStart, setQuestionStart] = useState<number | null>(null);
  const { playCorrect, playWrong } = useAudio();

  useEffect(() => { let timerInterval: NodeJS.Timeout | null = null; if (sessionStartTime && !isSessionComplete) { timerInterval = setInterval(() => { setSessionLiveTime(Date.now() - sessionStartTime); }, 1000); } return () => { if (timerInterval) clearInterval(timerInterval); }; }, [sessionStartTime, isSessionComplete]);
  useEffect(() => {
    if (current === null || questions.length === 0) { setDisplayedQuestion(null); return; }
    const originalQuestion = questions[current]; if (!originalQuestion) { setDisplayedQuestion(null); return; }
    const optionsWithOriginalIndex = originalQuestion.options.map((option, index) => ({ option, index })); const shuffledOptionsWithIndex = shuffle(optionsWithOriginalIndex); const shuffledOptions = shuffledOptionsWithIndex.map(item => item.option); const shuffledAnswerIndex = shuffledOptionsWithIndex.findIndex(item => item.index === originalQuestion.answerIndex);
    setDisplayedQuestion({ ...originalQuestion, shuffledOptions, shuffledAnswerIndex });
    setQuestionStart(performance.now());
  }, [current, questions]);
  useEffect(() => { if (queue.length === 0 && questions.length > 0 && current === null && !isSessionComplete) { setIsSessionComplete(true); if(sessionStartTime) { onSessionComplete({ elapsedTime: Date.now() - sessionStartTime }); } } }, [queue.length, questions.length, current, isSessionComplete, sessionStartTime, onSessionComplete]);

  const advanceQueue = useCallback((wasCorrect: boolean) => { if (current === null) return; const newQueue = [...queue]; const idxPos = newQueue.indexOf(current); if (idxPos > -1) { if (wasCorrect) newQueue.splice(idxPos, 1); else newQueue.push(newQueue.splice(idxPos, 1)[0]); } setSelected(null); setIsCorrect(null); setShowExpl(false); setQueue(newQueue); setCurrent(newQueue[0] ?? null); }, [current, queue]);
  const onSelect = useCallback((idx: number) => {
    if (!displayedQuestion || selected != null || current === null) return;
    const correct = idx === displayedQuestion.shuffledAnswerIndex; const originalQuestion = questions[current];
    setSelected(idx); setIsCorrect(correct); const gain = correct ? 10 : 0; setLastGain(gain);
    onQuestionAnswered({ question: originalQuestion, correct, gain });
    if (correct) { setCombo(prev => prev + 1); playCorrect(); setTimeout(() => advanceQueue(true), 650); } 
    else { setCombo(0); setShowExpl(true); playWrong(); setSessionWrongAnswers(prev => [...prev, originalQuestion]); }
  }, [displayedQuestion, selected, current, questions, playCorrect, playWrong, advanceQueue, onQuestionAnswered]);
  const startSession = useCallback((questionsToPlay: Question[], shuffleQuestions: boolean) => { setQuestions(questionsToPlay); const order = questionsToPlay.map((_, i) => i); const newQueue = shuffleQuestions ? shuffle(order) : order; setQueue(newQueue); setCurrent(newQueue[0] ?? null); setIsSessionComplete(false); setSessionWrongAnswers([]); setCombo(0); setSessionStartTime(Date.now()); setSessionLiveTime(0); }, []);
  const clearSession = useCallback(() => { setQuestions([]); setQueue([]); setCurrent(null); setIsSessionComplete(false); setSessionStartTime(null); setSessionLiveTime(0); }, []);
  const handleNextQuestion = useCallback(() => advanceQueue(false), [advanceQueue]);
  const actions = useMemo(() => ({ onSelect, startSession, clearSession, handleNextQuestion }), [onSelect, startSession, clearSession, handleNextQuestion]);

  return { session: { questions, queue, current, selected, isCorrect, showExpl, displayedQuestion, sessionLiveTime, isSessionComplete, sessionWrongAnswers, lastGain, combo, }, actions };
}