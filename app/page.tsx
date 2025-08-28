"use client";

import React from "react";
import { useQuizEngine } from '@/hooks/useQuizEngine';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { QuizPanel } from '@/components/quiz/QuizPanel';
import { ReviewModal } from '@/components/quiz/ReviewModal';
import { StatsModal } from '@/components/quiz/StatsModal';
import { Confetti } from '@/components/effects/Confetti';
import { EmojiBurst } from '@/components/effects/EmojiBurst';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export default function QuizGamificadoApp() {
  const { state, actions, refs } = useQuizEngine();

  // Variável para saber se um quiz está a decorrer
  const isQuizActive = !!state.deckId || state.quizMode === 'srs';

  const progressPct = state.questions.length > 0 
    ? Math.round(((state.questions.length - state.queue.length) / state.questions.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <ReviewModal question={state.reviewingQuestion} onClose={() => actions.setReviewingQuestion(null)} />
      {state.showStatsModal && <StatsModal srsData={state.srsData} onClose={() => actions.setShowStatsModal(false)} />}
      <Confetti trigger={state.confettiKey} />
      <EmojiBurst trigger={state.emojiKey} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Header
          stats={{
            streakDays: state.streakDays,
            level: state.level,
            xp: state.xp,
            hearts: state.hearts,
          }}
          dark={state.dark}
          setDark={actions.setDark}
        />

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className={`lg:w-1/3 space-y-6 ${isQuizActive ? 'order-2' : 'order-1'} lg:order-1`}>
            <Sidebar
              isQuizActive={isQuizActive} // <-- A PROPRIEDADE ESTÁ A SER PASSADA AQUI
              fileInputRef={refs.fileInputRef}
              handleUpload={actions.handleUpload}
              shuffleOnLoad={state.shuffleOnLoad}
              setShuffleOnLoad={actions.setShuffleOnLoad}
              errors={state.errors}
              srsData={state.srsData}
              startSrsSession={actions.startSrsSession}
              availableDecks={state.availableDecks}
              deckId={state.deckId}
              setDeckId={actions.setDeckId}
              stats={{
                todayXp: state.todayXp,
                goal: state.goal,
                combo: state.combo,
                hearts: state.hearts,
                lockUntil: state.lockUntil,
                now: state.now,
                xp: state.xp,
              }}
              actions={{
                  setGoal: actions.setGoal,
                  buyLivesWithXp: actions.buyLivesWithXp,
                  resetSession: actions.resetSession,
                  clearSession: actions.clearSession
              }}
              progressPct={progressPct}
              unlockedAchievements={state.unlockedAchievements}
              questionsCount={state.questions.length}
            />
          </div>

          <div className={`lg:w-2/3 ${isQuizActive ? 'order-1' : 'order-2'} lg:order-2`}>
            {/* ... o resto do código do QuizPanel ... */}
          </div>
        </div>
      </div>
    </div>
  );
}