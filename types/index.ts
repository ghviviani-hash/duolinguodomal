// types/index.ts

import React from 'react';

export interface Question {
  id: string;
  text: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
  tag?: string;
}

export interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  shuffledAnswerIndex: number;
}

export interface SrsData {
  [key: string]: {
    question: Question;
    deckId: string;
    deckName: string;
    correctStreak: number;
    nextReview: number;
    wrongCount: number;
    correctCount: number;
  };
}

export interface Deck {
  id: string;
  name: string;
  questions: Question[];
}

export interface Stats {
  xp: number;
  level: number;
  streakDays: number;
  todayXp: number;
  goal: number;
  decksCompleted: number;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType<{ className?: string }>;
    isUnlocked: (stats: { decksCompleted: number; streakDays: number; level: number; xp: number; }) => boolean;
}

// Adicione esta interface para corrigir o erro
export interface WrongAnswerLog {
  tag: string;
  timestamp: number;
}