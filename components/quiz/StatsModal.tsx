import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, BarChart3 } from "lucide-react";
import { SrsData } from "@/types";

interface StatsModalProps {
  srsData: SrsData;
  onClose: () => void;
}

export const StatsModal = ({ srsData, onClose }: StatsModalProps) => {
    const stats = React.useMemo(() => {
        const deckStats: { [name: string]: { correct: number; wrong: number } } = {};
        const tagStats: { [name: string]: { correct: number; wrong: number } } = {};

        Object.values(srsData).forEach(item => {
            const deckName = item.deckName || 'Desconhecido';
            const tagName = item.question.tag || 'Sem Categoria';

            if (!deckStats[deckName]) deckStats[deckName] = { correct: 0, wrong: 0 };
            if (!tagStats[tagName]) tagStats[tagName] = { correct: 0, wrong: 0 };

            deckStats[deckName].correct += item.correctCount || 0;
            deckStats[deckName].wrong += item.wrongCount || 0;
            tagStats[tagName].correct += item.correctCount || 0;
            tagStats[tagName].wrong += item.wrongCount || 0;
        });

        const calculateErrorRate = (stats: { correct: number; wrong: number }) => {
            const total = stats.correct + stats.wrong;
            return total === 0 ? 0 : (stats.wrong / total) * 100;
        };

        const sortedDeckStats = Object.entries(deckStats)
            .map(([name, stats]) => ({ name, errorRate: calculateErrorRate(stats) }))
            .filter(item => item.errorRate > 0)
            .sort((a, b) => b.errorRate - a.errorRate)
            .slice(0, 5);

        const sortedTagStats = Object.entries(tagStats)
            .map(([name, stats]) => ({ name, errorRate: calculateErrorRate(stats) }))
            .filter(item => item.errorRate > 0)
            .sort((a, b) => b.errorRate - a.errorRate)
            .slice(0, 5);

        return { decks: sortedDeckStats, tags: sortedTagStats };
    }, [srsData]);

    return (
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
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X className="h-4 w-4" /></Button>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5"/>Estatísticas de Desempenho</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold mb-2">Decks com Mais Erros</h4>
                    {stats.decks.length > 0 ? (
                        <ul className="space-y-2">
                            {stats.decks.map(deck => (
                                <li key={deck.name} className="text-sm">
                                    <div className="flex justify-between">
                                        <span className="truncate pr-2">{deck.name}</span>
                                        <span className="font-semibold">{deck.errorRate.toFixed(0)}%</span>
                                    </div>
                                    <Progress value={deck.errorRate} className="h-2 mt-1" />
                                </li>
                            ))}
                        </ul>
                    ) : <p className="text-sm text-slate-500">Nenhum erro registado ainda.</p>}
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Categorias com Mais Erros</h4>
                    {stats.tags.length > 0 ? (
                        <ul className="space-y-2">
                            {stats.tags.map(tag => (
                                <li key={tag.name} className="text-sm">
                                    <div className="flex justify-between">
                                        <span className="truncate pr-2">{tag.name}</span>
                                        <span className="font-semibold">{tag.errorRate.toFixed(0)}%</span>
                                    </div>
                                    <Progress value={tag.errorRate} className="h-2 mt-1" />
                                </li>
                            ))}
                        </ul>
                    ) : <p className="text-sm text-slate-500">Nenhum erro registado ainda.</p>}
                </div>
            </div>
          </motion.div>
        </motion.div>
    );
};