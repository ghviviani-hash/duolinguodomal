// ghviviani-hash/duomed/duomed-b286be4d9af8eadd3077475e75fa7d58cccc5aa4/components/quiz/StatsModal.tsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Trophy } from "lucide-react";

interface GoalModalProps {
  show: boolean;
  onClose: () => void;
  currentGoal: number;
  onSetGoal: (newGoal: number) => void;
}

export const StatsModal = ({ show, onClose, currentGoal, onSetGoal }: GoalModalProps) => {
    // ALTERAÇÃO AQUI: Garante que newGoal sempre tenha um valor numérico.
    // Usamos o operador '??' (nullish coalescing) para usar 100 como padrão
    // caso 'currentGoal' seja undefined ou null.
    const [newGoal, setNewGoal] = useState(currentGoal ?? 100);

    useEffect(() => {
        if (show) {
            // ALTERAÇÃO AQUI: A mesma lógica é aplicada no efeito.
            setNewGoal(currentGoal ?? 100);
        }
    }, [show, currentGoal]);

    const handleGoalSave = () => {
        if (newGoal > 0) {
            onSetGoal(newGoal);
            onClose(); 
        }
    };

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
                        className="relative w-full max-w-sm rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-xl"
                    >
                        <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X className="h-4 w-4" /></Button>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Trophy className="h-5 w-5"/>Ajustar Meta Diária</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="goal-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Defina sua meta de XP diário
                                </label>
                                <p className="text-xs text-slate-500 mb-2">
                                    Metas ajudam a manter o foco e a motivação.
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Input
                                        id="goal-input"
                                        type="number"
                                        value={newGoal} // Agora 'newGoal' nunca será undefined
                                        onChange={(e) => setNewGoal(Number(e.target.value))}
                                        className="max-w-[150px]"
                                        min="10"
                                        step="10"
                                        placeholder="Ex: 100"
                                    />
                                </div>
                            </div>
                            <Button onClick={handleGoalSave} className="w-full">
                                Salvar Nova Meta
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};