import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trophy, RefreshCw, BarChart3 } from "lucide-react";
import { Question } from "@/types";
import { DECK_COMPLETION_BONUS } from "@/lib/constants";

interface CompletionViewProps {
  onReset: () => void;
  onShowStats: () => void;
  wrongAnswers: Question[];
  onReviewQuestion: (question: Question) => void;
}

export function CompletionView({ onReset, onShowStats, wrongAnswers, onReviewQuestion }: CompletionViewProps) {
  return (
    <motion.div
      key="completion-view"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div className="text-2xl font-bold flex items-center gap-2"><Trophy className="h-6 w-6 text-amber-500" />Conjunto concluído!</div>
      <div className="text-slate-600 dark:text-slate-300">Você ganhou um bônus de {DECK_COMPLETION_BONUS} XP por terminar.</div>
      <div className="flex gap-3 mt-4">
        <Button onClick={onReset}><RefreshCw className="mr-2 h-4 w-4" />Repetir</Button>
        <Button variant="secondary" onClick={onShowStats}><BarChart3 className="mr-2 h-4 w-4" />Estatísticas</Button>
      </div>

      {wrongAnswers.length > 0 && (
        <div className="pt-6">
          <Separator />
          <h3 className="text-xl font-semibold mt-4 mb-3">Questões para revisar</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {wrongAnswers.map((q, i) => (
              <Button
                key={q.id + i}
                variant="outline"
                className="w-full justify-start text-left h-auto"
                onClick={() => onReviewQuestion(q)}
              >
                <p className="truncate whitespace-normal">{q.text}</p>
              </Button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}