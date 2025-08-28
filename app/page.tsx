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
// CORREÇÃO: Adicionámos o BookOpen à lista de ícones importados
import { BookOpen } from "lucide-react";

export default function QuizGamificadoApp() {
  const { state, actions, refs } = useQuizEngine();

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
          <div className="lg:w-1/3 lg:order-1 space-y-6">
            <Sidebar
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

          <div className="lg:w-2/3 lg:order-2">
            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white/80 to-white/30 dark:from-slate-900/70 dark:to-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none" aria-hidden>
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-400 blur-3xl mix-blend-multiply dark:bg-fuchsia-700" />
                <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-sky-300 blur-3xl mix-blend-multiply dark:bg-sky-700" />
              </div>
              
              {(state.deckId || state.quizMode === "srs") && (
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{state.isSessionComplete ? "Parabéns!" : state.displayedQuestion ? (state.displayedQuestion.tag || "Questão") : "A carregar..."}</CardTitle>
                      <CardDescription>{state.isSessionComplete ? "Você finalizou o deck." : "Selecione a alternativa correta."}</CardDescription>
                    </div>
                    <Badge variant="secondary">{state.questions.length > 0 ? `${state.questions.length - state.queue.length}/${state.questions.length}` : "0/0"}</Badge>
                  </div>
                </CardHeader>
              )}

              <CardContent className="min-h-[400px] flex flex-col justify-center">
                {state.deckId || state.quizMode === 'srs' ? (
                  <QuizPanel
                    isSessionComplete={state.isSessionComplete}
                    displayedQuestion={state.displayedQuestion}
                    onSelect={actions.onSelect}
                    selected={state.selected}
                    isCorrect={state.isCorrect}
                    showExpl={state.showExpl}
                    lastGain={state.lastGain}
                    isLocked={state.lockUntil != null && state.lockUntil > state.now}
                    wrongAnswers={state.sessionWrongAnswers}
                    onReset={actions.resetSession}
                    onShowStats={() => actions.setShowStatsModal(true)}
                    onReviewQuestion={actions.setReviewingQuestion}
                  />
                ) : (
                  <div className="text-center text-slate-500">
                    <BookOpen className="mx-auto h-12 w-12 text-slate-400" />
                    <h3 className="mt-2 text-lg font-medium">Nenhum deck selecionado</h3>
                    <p className="mt-1 text-sm">Escolha um deck na lateral para começar a praticar.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}