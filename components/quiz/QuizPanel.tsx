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
    onShowStats: () => void;
    sessionElapsedTime: number | null;
}

export function QuizPanel({
    isSessionComplete,
    displayedQuestion,
    wrongAnswers,
    onReset,
    onReviewQuestion,
    onNextQuestion,
    sessionElapsedTime,
    onSelect,
    selected,
    isCorrect,
    showExpl,
    lastGain,
    onShowStats
}: QuizPanelProps) {
    return (
        <AnimatePresence mode="wait">
            {isSessionComplete ? (
                <CompletionView
                    onReset={onReset}
                    wrongAnswers={wrongAnswers}
                    onReviewQuestion={onReviewQuestion}
                    sessionElapsedTime={sessionElapsedTime}
                />
            ) : displayedQuestion ? (
                <QuestionView
                    question={displayedQuestion}
                    onSelect={onSelect}
                    selected={selected}
                    isCorrect={isCorrect}
                    showExpl={showExpl}
                    lastGain={lastGain}
                    onNextQuestion={onNextQuestion}
                />
            ) : null}
        </AnimatePresence>
    );
}