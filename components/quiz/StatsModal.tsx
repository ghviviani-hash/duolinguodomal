// components/quiz/StatsModal.tsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Trophy, Star } from "lucide-react";

interface GoalModalProps {
  show: boolean;
  onClose: () => void;
  currentGoal: number;
  onSetGoal: (newGoal: number) => void;
}

export const GoalModal = ({ show, onClose, currentGoal, onSetGoal }: GoalModalProps) => {
    const [newGoal, setNewGoal] = useState(currentGoal ?? 100);

    useEffect(() => {
        if (show) {
            setNewGoal(currentGoal ?? 100);
        }
    }, [show, currentGoal]);

    const handleGoalSave = () => {
        if (newGoal > 0) {
            onSetGoal(newGoal);
            onClose();
        }
    };

    const goalSuggestions = [50, 100, 150];

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    // Mantemos o padding aqui como uma boa prática.
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                        // CORREÇÃO AQUI: Adicionamos "m-4" para garantir uma margem explícita
                        // em todos os lados do modal, resolvendo o problema de espaçamento.
                        className="relative w-full max-w-md rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 m-4"
                    >
                        <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white" onClick={onClose}>
                            <X className="h-5 w-5" />
                        </Button>

                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                               <Trophy className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Sua Meta Diária de XP</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                                Manter uma meta é o segredo para construir um hábito de estudos sólido!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-center gap-3">
                                {goalSuggestions.map((goal) => (
                                    <Button
                                        key={goal}
                                        variant={newGoal === goal ? "default" : "outline"}
                                        onClick={() => setNewGoal(goal)}
                                        className="rounded-full px-6 py-2 text-base"
                                    >
                                        {goal} XP
                                    </Button>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                               <hr className="flex-grow border-slate-200 dark:border-slate-700"/>
                               <span className="text-xs font-medium text-slate-500">OU</span>
                               <hr className="flex-grow border-slate-200 dark:border-slate-700"/>
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <Input
                                    id="goal-input"
                                    type="number"
                                    value={newGoal}
                                    onChange={(e) => setNewGoal(Number(e.target.value))}
                                    className="max-w-[200px] text-center text-lg font-semibold h-12 rounded-lg"
                                    min="10"
                                    step="10"
                                    placeholder="Ex: 100"
                                />
                            </div>

                            <Button onClick={handleGoalSave} className="w-full h-12 text-base font-bold rounded-lg flex items-center gap-2">
                                <Star className="h-5 w-5"/>
                                Salvar e Continuar
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};