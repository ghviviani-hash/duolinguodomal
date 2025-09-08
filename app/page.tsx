// app/page.tsx

"use client";

import React from "react";
import { useQuizEngine } from '@/hooks/useQuizEngine';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { QuizPanel } from '@/components/quiz/QuizPanel';
import { ReviewModal } from '@/components/quiz/ReviewModal';
import { GoalModal } from "@/components/quiz/StatsModal";
import { Confetti } from '@/components/effects/Confetti';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Deck } from "@/types";
import { IntroModal } from "@/components/IntroModal";

export default function QuizGamificadoApp() {
  const { state, actions, refs } = useQuizEngine();
  const { stats, decks, session, deckId, shuffleOnLoad, dark, uploadErrors, confettiKey, reviewingQuestion, showStatsModal, showIntroModal } = state;

  const isQuizActive = !!deckId || (session.questions && session.questions.length > 0);

  const progressPct = (session.questions && session.questions.length > 0)
    ? Math.round(((session.questions.length - (session.queue.length + (session.current === null ? 0 : 1))) / session.questions.length) * 100)
    : 0;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Header 
          stats={{ xp: stats.xp, level: stats.level, streakDays: stats.streakDays, totalQuestionsAnswered: stats.totalQuestionsAnswered }} 
          dark={dark} 
          setDark={actions.setDark} 
          onLogoClick={() => {
            actions.clearSession();
            actions.setDeckId(null);
          }}
          isQuizActive={isQuizActive}
          progress={progressPct}
          sessionTime={session.sessionLiveTime}
        />
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className={`lg:w-1/3 space-y-6 ${isQuizActive ? 'order-2' : 'order-1'} lg:order-1`}>
            <Sidebar
              isQuizActive={isQuizActive}
              fileInputRef={refs.fileInputRef}
              handleUpload={actions.handleUpload}
              shuffleOnLoad={shuffleOnLoad}
              setShuffleOnLoad={actions.setShuffleOnLoad}
              errors={uploadErrors}
              srsData={stats.srsData}
              startSrsSession={actions.startSrsSession}
              availableDecks={decks}
              deckId={deckId}
              setDeckId={actions.setDeckId}
              xp={stats.xp}
              level={stats.level}
              streakDays={stats.streakDays}
              todayXp={stats.todayXp}
              goal={stats.goal}
              dailyBonusAwarded={false} 
              decksCompleted={stats.decksCompleted}
              combo={session.combo}
              isSessionComplete={session.isSessionComplete}
              clearSession={actions.clearSession}
              resetSession={() => { if(deckId) { const currentDeck = decks.find((d: Deck) => d.id === deckId); if(currentDeck) actions.startSession(currentDeck.questions, shuffleOnLoad); } }}
              unlockedAchievements={stats.unlockedAchievements}
              setShowStatsModal={actions.setShowStatsModal}
              quizMode={deckId ? 'deck' : 'srs'}
              questionsCount={session.questions.length}
              queue={session.queue}
              current={session.current}
            />
          </div>
          <div className={`lg:w-2/3 ${isQuizActive ? 'order-1' : 'order-2'} lg:order-2`}>
            <Card className="relative overflow-hidden border-0 shadow-xl">
              {isQuizActive && (
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl">{session.isSessionComplete ? "Parabéns!" : session.displayedQuestion ? (session.displayedQuestion.tag || "Questão") : "A carregar..."}</CardTitle>
                      <CardDescription>{session.isSessionComplete ? "Você finalizou o deck." : "Selecione a alternativa correta."}</CardDescription>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <AnimatePresence>
                        {session.combo > 1 && ( <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="flex items-center gap-1 font-bold text-lg md:text-xl text-orange-500"> <Flame className="h-6 w-6" /> <span>x{session.combo}</span> </motion.div> )}
                      </AnimatePresence>
                      <Badge variant="secondary">{session.questions.length > 0 ? `${session.questions.length - session.queue.length}/${session.questions.length}` : "0/0"}</Badge>
                    </div>
                  </div>
                </CardHeader>
              )}
              <CardContent className="min-h-[400px] flex flex-col">
                {isQuizActive ? (
                  <QuizPanel
                    isSessionComplete={session.isSessionComplete}
                    displayedQuestion={session.displayedQuestion}
                    onSelect={actions.onSelect}
                    selected={session.selected}
                    isCorrect={session.isCorrect}
                    showExpl={session.showExpl}
                    lastGain={session.lastGain}
                    wrongAnswers={session.sessionWrongAnswers}
                    onReset={() => { if(deckId) { const currentDeck = decks.find((d: Deck) => d.id === deckId); if(currentDeck) actions.startSession(currentDeck.questions, shuffleOnLoad); } }}
                    onShowStats={() => actions.setShowStatsModal(true)}
                    onReviewQuestion={actions.setReviewingQuestion}
                    onNextQuestion={actions.handleNextQuestion}
                    sessionElapsedTime={session.isSessionComplete ? session.sessionLiveTime : null}
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
      {/* ALTERAÇÃO AQUI: Adicionando a prop onSetGoal 
      */}
      {showStatsModal && 
  <GoalModal 
    show={showStatsModal} 
    onClose={() => actions.setShowStatsModal(false)} 
    currentGoal={stats.goal}
    onSetGoal={actions.setGoal} 
  />
}
      <Confetti trigger={confettiKey} />
      <IntroModal show={showIntroModal} onClose={() => actions.setShowIntroModal(false)} />
    </div>
  );
}