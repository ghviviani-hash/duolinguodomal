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
}

export interface Stats {
  xp: number;
  level: number;
  hearts: number;
  streakDays: number;
  todayXp: number;
  goal: number;
  decksCompleted: number;
}

// MUDANÇA: 'icon' é agora um tipo de componente React que aceita className.
export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType<{ className?: string }>;
    isUnlocked: (stats: { decksCompleted: number; streakDays: number; level: number; xp: number; }) => boolean;
}