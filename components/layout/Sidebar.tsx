import React, { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, Download, BookOpen, BrainCircuit, Trophy, Award, RefreshCw, Info } from "lucide-react";
import { SrsData, Deck } from "@/types";
import { formatTimeLeft } from "@/lib/utils";
import { achievements } from "@/lib/achievements";
import { TEMPLATE_TXT } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface SidebarProps {
  // A interface de props permanece a mesma
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleUpload: (file: File) => void;
  shuffleOnLoad: boolean;
  setShuffleOnLoad: (value: boolean) => void;
  errors: string[];
  srsData: SrsData;
  startSrsSession: () => void;
  availableDecks: Deck[];
  deckId: string | null;
  setDeckId: (id: string) => void;
  stats: any;
  actions: any;
  progressPct: number;
  unlockedAchievements: string[];
  questionsCount: number;
}


export function Sidebar({
  fileInputRef,
  handleUpload,
  shuffleOnLoad,
  setShuffleOnLoad,
  errors,
  srsData,
  startSrsSession,
  availableDecks,
  deckId,
  setDeckId,
  stats,
  actions,
  progressPct,
  unlockedAchievements,
  questionsCount,
}: SidebarProps) {

    const downloadTemplate = () => {
        const blob = new Blob([TEMPLATE_TXT.trim()], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "modelo_perguntas.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    const goalPct = Math.min(100, Math.round((stats.todayXp / stats.goal) * 100));
    const srsCount = Object.values(srsData).filter((item: any) => item.nextReview <= Date.now()).length;

    // A lógica de agrupamento e renderização de decks permanece a mesma
    const groupedDecks = useMemo(() => {
        // ... (lógica de agrupamento)
    }, [availableDecks]);

    const renderDecks = (level: any) => {
        // ... (lógica de renderização recursiva)
    };


    return (
        <div className="space-y-6">
            {/* ... (Os outros Cards como Upload, Decks, etc.) ... */}

            <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
                <CardHeader><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5"/>Conquistas</CardTitle></CardHeader>
                <CardContent className="grid grid-cols-4 gap-4">
                    {achievements.map(ach => {
                        // CORREÇÃO AQUI
                        const IconComponent = ach.icon;
                        const isUnlocked = unlockedAchievements.includes(ach.id);
                        return (
                            <div key={ach.id} className="flex flex-col items-center text-center" title={`${ach.title}: ${ach.description}`}>
                                <div className={`p-3 rounded-full ${isUnlocked ? 'bg-amber-100 dark:bg-amber-900' : 'bg-slate-100 dark:bg-slate-800'}`}>
                                    {/* A forma correta de renderizar o ícone com props */}
                                    <IconComponent className={`h-6 w-6 ${isUnlocked ? 'text-amber-500' : 'text-slate-400'}`} />
                                </div>
                                <span className="text-xs mt-1 text-slate-600 dark:text-slate-300">{ach.title}</span>
                            </div>
                        );
                    })}
                </CardContent>
            </Card>

            {/* ... (o resto dos Cards) ... */}
        </div>
    );
}