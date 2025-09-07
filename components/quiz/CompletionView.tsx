// components/quiz/CompletionView.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, RefreshCcw, Eye, AlertTriangle, Clock } from "lucide-react";
import { Question } from "@/types";
import React, { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { formatTimeLeft } from "@/lib/utils";

interface CompletionViewProps {
  onReset: () => void;
  wrongAnswers: Question[];
  onReviewQuestion: (question: Question) => void;
  sessionElapsedTime: number | null;
}

export function CompletionView({
  onReset,
  wrongAnswers,
  onReviewQuestion,
  sessionElapsedTime,
}: CompletionViewProps) {
  const topicsToReview = useMemo(() => {
    if (wrongAnswers.length === 0) {
      return [];
    }

    const tagCounts = wrongAnswers.reduce((acc, question) => {
      if (question.tag) {
        acc[question.tag] = (acc[question.tag] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(tagCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
  }, [wrongAnswers]);

  return (
    <motion.div
      key="completion"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl"
    >
      <Award className="h-16 w-16 text-amber-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Deck Concluído!</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Parabéns! Você concluiu todas as questões deste deck.
      </p>

      {sessionElapsedTime !== null && (
        <div className="flex items-center justify-center gap-2 mb-6 text-lg text-slate-500 dark:text-slate-400">
          <Clock className="h-5 w-5" />
          <span>Tempo total: <strong>{formatTimeLeft(sessionElapsedTime)}</strong></span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
        <Button onClick={onReset} className="w-full sm:w-auto">
          <RefreshCcw className="h-4 w-4 mr-2" /> Tentar Novamente
        </Button>
      </div>

      {topicsToReview.length > 0 && (
        <div className="mt-8 text-left p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
            Principais temas a revisar:
          </h3>
          <div className="flex flex-wrap gap-2">
            {topicsToReview.map(([tag, count]) => (
              <Badge key={tag} variant="secondary">
                {tag} ({count} {count > 1 ? 'erros' : 'erro'})
              </Badge>
            ))}
          </div>
        </div>
      )}

      {wrongAnswers.length > 0 && (
        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold mb-3">
            Questões erradas:
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {/* CORREÇÃO AQUI: A 'key' agora usa o id E o index para garantir que é única */}
            {wrongAnswers.map((q, index) => (
              <div
                key={`${q.id}-${index}`}
                className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded-lg"
              >
                <p className="truncate text-sm mr-4">{q.text}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onReviewQuestion(q)}
                >
                  <Eye className="h-4 w-4 mr-2" /> Revisar
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}