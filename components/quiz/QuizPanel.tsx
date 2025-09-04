import { AnimatePresence } from "framer-motion";
import { Question, ShuffledQuestion } from "@/types";
import { CompletionView } from "./CompletionView";
import { QuestionView } from "./QuestionView";

interface QuizPanelProps {
    isSessionComplete: boolean;
    displayedQuestion: ShuffledQuestion | null;
    wrongAnswers: Question[];
    onReset: () => void;
    onReviewQuestion: (question: Question) => void;
    onSelect: (index: number) => void;
    selected: number | null;
    isCorrect: boolean | null;
    showExpl: boolean;
    lastGain: number | null;
    onNextQuestion: () => void;
    onShowStats: () => void; // Linha adicionada para corrigir o erro
}

export function QuizPanel({
    isSessionComplete,
    displayedQuestion,
    wrongAnswers,
    onReset,
    onReviewQuestion,
    onNextQuestion,
    ...questionViewProps
}: QuizPanelProps) {
    return (
        <AnimatePresence mode="wait">
            {isSessionComplete ? (
                <CompletionView
                    onReset={onReset}
                    wrongAnswers={wrongAnswers}
                    onReviewQuestion={onReviewQuestion}
                />
            ) : displayedQuestion ? (
                <QuestionView
                    question={displayedQuestion}
                    onNextQuestion={onNextQuestion}
                    {...questionViewProps}
                />
            ) : null}
        </AnimatePresence>
    );
}