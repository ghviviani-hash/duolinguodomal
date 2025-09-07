// components/layout/MobileStats.tsx

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Flame, HelpCircle } from "lucide-react";

interface MobileStatsProps {
  level: number;
  totalQuestionsAnswered: number;
  streakDays: number;
}

export function MobileStats({ level, totalQuestionsAnswered, streakDays }: MobileStatsProps) {
  return (
    <Card className="lg:hidden">
      <CardContent className="p-4 flex items-center justify-around text-center">
        <div className="flex flex-col items-center gap-1" title={`Nível ${level}`}>
          <BarChart className="h-7 w-7 text-green-500" /> {/* Ícone ligeiramente maior */}
          <span className="font-bold text-xl">{level}</span> {/* Título do número maior */}
          <span className="text-sm text-slate-500 dark:text-slate-400">Nível</span> {/* Descrição ligeiramente maior */}
        </div>
        <div className="flex flex-col items-center gap-1" title="Total de perguntas respondidas">
          <HelpCircle className="h-7 w-7 text-violet-500" /> {/* Ícone ligeiramente maior */}
          <span className="font-bold text-xl">{totalQuestionsAnswered}</span> {/* Título do número maior */}
          <span className="text-sm text-slate-500 dark:text-slate-400">Perguntas</span> {/* Descrição ligeiramente maior */}
        </div>
        <div className="flex flex-col items-center gap-1" title="Sequência de dias">
          <Flame className="h-7 w-7 text-orange-500" /> {/* Ícone ligeiramente maior */}
          <span className="font-bold text-xl">{streakDays}</span> {/* Título do número maior */}
          <span className="text-sm text-slate-500 dark:text-slate-400">Dias</span> {/* Descrição ligeiramente maior */}
        </div>
      </CardContent>
    </Card>
  );
}