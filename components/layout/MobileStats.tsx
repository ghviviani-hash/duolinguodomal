import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Flame, HelpCircle } from "lucide-react";

interface MobileStatsProps {
  level: number;
  totalQuestionsAnswered: number;
  streakDays: number;
}

export function MobileStats({ level, totalQuestionsAnswered, streakDays }: MobileStatsProps) {
  return (
    // A classe 'lg:hidden' garante que este componente só aparece em ecrãs pequenos (versão telemóvel)
    <Card className="lg:hidden">
      <CardContent className="p-4 flex items-center justify-around text-center">
        <div className="flex flex-col items-center gap-1" title={`Nível ${level}`}>
          <BarChart className="h-6 w-6 text-green-500" />
          <span className="font-bold text-lg">{level}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Nível</span>
        </div>
        <div className="flex flex-col items-center gap-1" title="Total de perguntas respondidas">
          <HelpCircle className="h-6 w-6 text-violet-500" />
          <span className="font-bold text-lg">{totalQuestionsAnswered}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Perguntas</span>
        </div>
        <div className="flex flex-col items-center gap-1" title="Sequência de dias">
          <Flame className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-lg">{streakDays}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Dias</span>
        </div>
      </CardContent>
    </Card>
  );
}