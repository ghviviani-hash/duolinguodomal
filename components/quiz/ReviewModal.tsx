import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Info } from "lucide-react";
import { Question } from "@/types";

interface ReviewModalProps {
  question: Question | null;
  onClose: () => void;
}

export function ReviewModal({ question, onClose }: ReviewModalProps) {
  return (
    <AnimatePresence>
      {question && (
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
            className="relative w-full max-w-2xl rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-xl"
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
            <h3 className="text-lg font-bold mb-4">Rever Questão</h3>
            <div className="space-y-5">
              <div className="text-lg md:text-xl font-semibold leading-snug">{question.text}</div>
              <div className="grid gap-3">
                {question.options.map((opt, i) => {
                  const isCorrect = i === question.answerIndex;
                  return (
                    <div
                      key={i}
                      className={`text-left rounded-2xl p-4 border transition-all 
                        ${isCorrect 
                          ? "border-emerald-500/70 ring-2 ring-emerald-500/30 bg-emerald-50 dark:bg-emerald-900/30" 
                          : "border-slate-200/60 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50"
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <Badge className="mt-0.5" variant={isCorrect ? "default" : "secondary"}>
                          {String.fromCharCode(65 + i)}
                        </Badge>
                        <div className="flex-1 font-medium">{opt}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {question.explanation && (
                <div className="rounded-xl border p-3 text-sm bg-blue-50/60 dark:bg-blue-900/20 border-blue-300/50 dark:border-blue-700/40">
                  <div className="font-semibold mb-1 flex items-center gap-2">
                    <Info className="h-4 w-4"/>Explicação
                  </div>
                  <div className="text-slate-700 dark:text-slate-200">{question.explanation}</div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};