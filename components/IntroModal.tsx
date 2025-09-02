// components/IntroModal.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Trophy, BookOpen, BrainCircuit, Sparkles } from 'lucide-react';

interface IntroModalProps {
  show: boolean;
  onClose: () => void;
}

export const IntroModal = ({ show, onClose }: IntroModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-xl"
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Sparkles className="h-6 w-6 text-fuchsia-500" />
                Bem-vindo ao Duomed!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Comece sua jornada de aprendizado médico de forma divertida e eficaz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-md bg-slate-100 dark:bg-slate-800">
                <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Decks de Questões</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Comece com um dos decks predefinidos ou carregue o seu próprio para praticar.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-md bg-slate-100 dark:bg-slate-800">
                <div className="flex-shrink-0 p-2 rounded-full bg-green-100 dark:bg-green-900">
                  <BrainCircuit className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Revisão Espaçada (SRS)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    O Duomed usa um sistema inteligente que repete as questões mais difíceis para você não esquecer.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-md bg-slate-100 dark:bg-slate-800">
                <div className="flex-shrink-0 p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Trophy className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Gamificação</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ganhe XP, suba de nível, complete metas diárias e desbloqueie conquistas por sua dedicação.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button onClick={onClose} size="lg">Começar!</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};