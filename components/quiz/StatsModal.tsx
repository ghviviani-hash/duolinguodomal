import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, BarChart3, Flame, Star, Trophy, Award, BookOpen } from "lucide-react";
import { Stats, Achievement } from "@/types";
import { achievements } from "@/lib/achievements";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface StatsModalProps {
  show: boolean;
  onClose: () => void;
  stats: Stats;
  unlockedAchievements: string[];
}

export const StatsModal = ({ show, onClose, stats, unlockedAchievements }: StatsModalProps) => {
    const allAchievements: Achievement[] = achievements;

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
                        className="relative w-full max-w-xl rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-xl"
                    >
                        <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X className="h-4 w-4" /></Button>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5"/>Suas Estatísticas</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-base">
                                    <Flame className="h-5 w-5 text-orange-500" />
                                    <span className="font-semibold">{stats.streakDays}</span> dias de ofensiva
                                </div>
                                <div className="flex items-center gap-2 text-base">
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <span className="font-semibold">Lv {stats.level}</span> ({stats.xp} XP)
                                </div>
                                <div className="flex items-center gap-2 text-base">
                                    <BookOpen className="h-5 w-5 text-blue-500" />
                                    <span className="font-semibold">{stats.decksCompleted}</span> decks concluídos
                                </div>
                                <div>
                                    <div className="flex items-center justify-between text-sm mt-4 mb-1">
                                        <span>Meta Diária: {stats.todayXp} / {stats.goal} XP</span>
                                        <Badge>{Math.min(100, Math.round((stats.todayXp / stats.goal) * 100))}%</Badge>
                                    </div>
                                    <Progress value={Math.min(100, (stats.todayXp / stats.goal) * 100)} />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold flex items-center gap-2"><Award className="h-5 w-5"/>Conquistas</h4>
                                <div className="grid grid-cols-3 gap-4">
                                    {allAchievements.map(ach => {
                                        const IconComponent = ach.icon;
                                        const isUnlocked = unlockedAchievements.includes(ach.id);
                                        return (
                                            <div key={ach.id} className="flex flex-col items-center text-center group" title={`${ach.title}: ${ach.description}`}>
                                                <div className={`p-3 rounded-full transition-colors ${isUnlocked ? 'bg-amber-100 dark:bg-amber-900' : 'bg-slate-100 dark:bg-slate-800'}`}>
                                                    <IconComponent className={`h-6 w-6 transition-colors ${isUnlocked ? 'text-amber-500' : 'text-slate-400'}`} />
                                                </div>
                                                <span className="text-xs mt-1 text-slate-600 dark:text-slate-300">{ach.title}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};