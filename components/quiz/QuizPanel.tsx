import { AnimatePresence } from "framer-motion";
import { Question, ShuffledQuestion } from "@/types";
import { CompletionView } from "./CompletionView";
import { QuestionView } from "./QuestionView";

interface QuizPanelProps {
    isSessionComplete: boolean;
    displayedQuestion: ShuffledQuestion | null;
    wrongAnswers: Question[];
    onReset: () => void;
    onShowStats: () => void;
    onReviewQuestion: (question: Question) => void;
    onSelect: (index: number) => void;
    selected: number | null;
    isCorrect: boolean | null;
    showExpl: boolean;
    lastGain: number | null;
    isLocked: boolean;
    onNextQuestion: () => void; // MUDANÇA: Adicionando a nova prop
}

export function QuizPanel({
    isSessionComplete,
    displayedQuestion,
    wrongAnswers,
    onReset,
    onShowStats,
    onReviewQuestion,
    onNextQuestion, // MUDANÇA: Recebendo a nova prop
    ...questionViewProps
}: QuizPanelProps) {
    return (
        <AnimatePresence mode="wait">
            {isSessionComplete ? (
                <CompletionView
                    onReset={onReset}
                    onShowStats={onShowStats}
                    wrongAnswers={wrongAnswers}
                    onReviewQuestion={onReviewQuestion}
                />
            ) : displayedQuestion ? (
                <QuestionView
                    question={displayedQuestion}
                    onNextQuestion={onNextQuestion} // MUDANÇA: Passando a prop para QuestionView
                    {...questionViewProps}
                />
            ) : null}
        </AnimatePresence>
    );
}