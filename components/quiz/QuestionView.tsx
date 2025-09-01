import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { ShuffledQuestion } from "@/types";

interface QuestionViewProps {
  question: ShuffledQuestion;
  onSelect: (index: number) => void;
  selected: number | null;
  isCorrect: boolean | null;
  showExpl: boolean;
  lastGain: number | null;
  onNextQuestion: () => void;
}

export function QuestionView({
  question,
  onSelect,
  selected,
  isCorrect,
  showExpl,
  lastGain,
  onNextQuestion,
}: QuestionViewProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      <div className="text-lg md:text-xl font-semibold leading-snug">{question.text}</div>

      <div className="grid gap-3">
        {question.shuffledOptions.map((opt, i) => {
          const isSel = selected === i;
          const correct = isCorrect != null && i === question.shuffledAnswerIndex;
          const wrong = isSel && !isCorrect;
          return (
            <motion.button
              key={i}
              onClick={() => onSelect(i)}
              disabled={selected != null}
              whileTap={{ scale: 0.98 }}
              className={`text-left rounded-2xl p-4 border transition-all bg-white/70 dark:bg-slate-900/60
                ${correct ? "border-emerald-500/70 ring-2 ring-emerald-500/30" :
                  (isSel && wrong) ? "border-rose-500/70 ring-2 ring-rose-500/30" :
                    "border-slate-200/60 dark:border-slate-700/60 hover:bg-white hover:dark:bg-slate-900/80"
                }`}
            >
              <div className="flex items-start gap-3">
                <Badge className="mt-0.5" variant="secondary">{String.fromCharCode(65 + i)}</Badge>
                <div className="flex-1 font-medium">{opt}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
      {selected != null && (
        <div className={`flex items-center gap-2 text-sm ${isCorrect ? "text-emerald-600 dark:text-emerald-300" : "text-rose-600 dark:text-rose-300"}`}>
          {isCorrect ? <><CheckCircle2 className="h-5 w-5" />Correto! {lastGain != null ? `+${lastGain} XP` : ""}</> : <><XCircle className="h-5 w-5" />Incorreto. A questão voltará depois.</>}
        </div>
      )}
      {showExpl && question.explanation && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border p-3 text-sm bg-emerald-50/60 dark:bg-emerald-900/20 border-emerald-300/50 dark:border-emerald-700/40">
          <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4" />Explicação</div>
          <div className="text-slate-700 dark:text-slate-200">{question.explanation}</div>
        </motion.div>
      )}

      {selected != null && !isCorrect && (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
          <button
            onClick={onNextQuestion}
            className="w-full mt-4 rounded-xl p-3 bg-sky-500 text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Continuar
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}