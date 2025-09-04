// app/page.tsx

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
import { ComboEffect } from '@/components/effects/ComboEffect';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroModal } from "@/components/IntroModal";
import { MobileStats } from "@/components/layout/MobileStats"; // Importa o novo componente

export default function QuizGamificadoApp() {
  const { state, actions, refs } = useQuizEngine();
  const {
    availableDecks,
    deckId,
    questions,
    queue,
    current,
    selected,
    isCorrect,
    showExpl,
    shuffleOnLoad,
    errors,
    dark,
    xp,
    level,
    streakDays,
    todayXp,
    goal,
    combo,
    confettiKey,
    lastGain,
    emojiKey,
    sessionWrongAnswers,
    reviewingQuestion,
    isSessionComplete,
    srsData,
    quizMode,
    dailyBonusAwarded,
    showStatsModal,
    unlockedAchievements,
    displayedQuestion,
    comboMilestone,
    decksCompleted,
    showIntroModal,
    sessionElapsedTime,
    sessionLiveTime,
    totalQuestionsAnswered,
  } = state;

  const isQuizActive = !!deckId || quizMode === 'srs';

  const progressPct = questions.length > 0
    ? Math.round(((questions.length - (queue.length + (current === null ? 0 : 1))) / questions.length) * 100)
    : 0;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Header 
          stats={{xp, level, streakDays, totalQuestionsAnswered}} 
          dark={dark} 
          setDark={actions.setDark} 
          sessionTime={sessionLiveTime} 
          isQuizActive={isQuizActive}
          progress={progressPct}
        />
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className={`lg:w-1/3 space-y-6 ${isQuizActive ? 'order-2' : 'order-1'} lg:order-1`}>
            
            {/* NOVO: Renderiza o cartão de estatísticas móvel apenas se o quiz NÃO estiver ativo */}
            {!isQuizActive && (
              <MobileStats 
                level={level}
                totalQuestionsAnswered={totalQuestionsAnswered}
                streakDays={streakDays}
              />
            )}

            <Sidebar
              isQuizActive={isQuizActive}
              fileInputRef={refs.fileInputRef}
              handleUpload={actions.handleUpload}
              shuffleOnLoad={shuffleOnLoad}
              setShuffleOnLoad={actions.setShuffleOnLoad}
              errors={errors}
              srsData={srsData}
              startSrsSession={actions.startSrsSession}
              availableDecks={availableDecks}
              deckId={deckId}
              setDeckId={actions.setDeckId}
              xp={xp}
              level={level}
              streakDays={streakDays}
              todayXp={todayXp}
              goal={goal}
              dailyBonusAwarded={dailyBonusAwarded}
              decksCompleted={decksCompleted}
              combo={combo}
              isSessionComplete={isSessionComplete}
              clearSession={actions.clearSession}
              resetSession={actions.resetSession}
              unlockedAchievements={unlockedAchievements}
              setShowStatsModal={actions.setShowStatsModal}
              quizMode={quizMode}
              questionsCount={questions.length}
              queue={queue}
              current={current}
            />
          </div>

          <div className={`lg:w-2/3 ${isQuizActive ? 'order-1' : 'order-2'} lg:order-2`}>
            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white/80 to-white/30 dark:from-slate-900/70 dark:to-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none" aria-hidden>
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-400 blur-3xl mix-blend-multiply dark:bg-fuchsia-700" />
                <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-sky-300 blur-3xl mix-blend-multiply dark:bg-sky-700" />
              </div>

              {isQuizActive && (
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl">{isSessionComplete ? "Parabéns!" : displayedQuestion ? (displayedQuestion.tag || "Questão") : "A carregar..."}</CardTitle>
                      <CardDescription>{isSessionComplete ? "Você finalizou o deck." : "Selecione a alternativa correta."}</CardDescription>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <AnimatePresence>
                        {combo > 1 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center gap-1 font-bold text-lg md:text-xl text-orange-500"
                          >
                            <Flame className="h-6 w-6" />
                            <span>x{combo}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <Badge variant="secondary">{questions.length > 0 ? `${questions.length - queue.length}/${questions.length}` : "0/0"}</Badge>
                    </div>
                  </div>
                </CardHeader>
              )}

              <CardContent className="min-h-[400px] flex flex-col">
                {isQuizActive ? (
                  <QuizPanel
                    isSessionComplete={isSessionComplete}
                    displayedQuestion={displayedQuestion}
                    onSelect={actions.onSelect}
                    selected={selected}
                    isCorrect={isCorrect}
                    showExpl={showExpl}
                    lastGain={lastGain}
                    wrongAnswers={sessionWrongAnswers}
                    onReset={actions.resetSession}
                    onShowStats={() => actions.setShowStatsModal(true)}
                    onReviewQuestion={actions.setReviewingQuestion}
                    onNextQuestion={actions.handleNextQuestion}
                    sessionElapsedTime={sessionElapsedTime}
                  />
                ) : (
                   <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-500">
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
      <ReviewModal question={reviewingQuestion} onClose={() => actions.setReviewingQuestion(null)} />
      {showStatsModal && <StatsModal show={showStatsModal} onClose={() => actions.setShowStatsModal(false)} stats={{xp, level, streakDays, goal, decksCompleted, todayXp}} unlockedAchievements={unlockedAchievements} />}
      <Confetti trigger={confettiKey} />
      <EmojiBurst trigger={emojiKey} combo={combo} />
      <ComboEffect trigger={comboMilestone} />
      <IntroModal show={showIntroModal} onClose={() => actions.setShowIntroModal(false)} />
    </div>
  );
}