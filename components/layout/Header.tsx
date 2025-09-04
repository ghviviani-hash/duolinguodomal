// components/layout/Header.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; // Importa a barra de progresso
import { Award, BarChart, Sun, Moon, Flame, Clock, EyeOff, HelpCircle } from "lucide-react"; // Adicionado HelpCircle
import { formatTimeLeft } from "@/lib/utils";

interface HeaderProps {
  stats: {
    xp: number;
    level: number;
    streakDays: number;
    totalQuestionsAnswered: number; // Nova prop
  };
  dark: boolean;
  setDark: (dark: boolean) => void;
  sessionTime: number;
  isQuizActive: boolean;
  progress: number; // Nova prop
}

export function Header({ stats, dark, setDark, sessionTime, isQuizActive, progress }: HeaderProps) {
  const [isTimerVisible, setIsTimerVisible] = useState(true);

  const handleTimerClick = () => {
    setIsTimerVisible(!isTimerVisible);
  };
  
  const displayedTime = isTimerVisible ? formatTimeLeft(sessionTime) : "00:00";

  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="h-10 w-10 text-sky-500" />
          <h1 className="text-3xl font-bold tracking-tight">DuoMED</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          {isQuizActive && (
            <div 
              className="hidden sm:flex items-center gap-2 font-mono text-lg bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg cursor-pointer transition-opacity hover:opacity-80"
              onClick={handleTimerClick}
              title={isTimerVisible ? "Clique para ocultar o tempo" : "Clique para mostrar o tempo"}
            >
              {isTimerVisible ? <Clock className="h-5 w-5 text-slate-500" /> : <EyeOff className="h-5 w-5 text-slate-500" />}
              <span>{displayedTime}</span>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-2 font-semibold" title="Sequência de dias">
            <Flame className="h-5 w-5 text-orange-500" />
            <span>{stats.streakDays}</span>
          </div>
          
          {/* NOVO: Contador de perguntas respondidas */}
          <div className="hidden sm:flex items-center gap-2 font-semibold" title="Total de perguntas respondidas">
            <HelpCircle className="h-5 w-5 text-violet-500" />
            <span>{stats.totalQuestionsAnswered}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-semibold" title={`Nível ${stats.level}`}>
            <BarChart className="h-5 w-5 text-green-500" />
            <span>{stats.level}</span>
          </div>

          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* NOVO: Barra de progresso visível apenas durante o quiz */}
      {isQuizActive && (
        <Progress value={progress} className="w-full h-2" />
      )}
    </header>
  );
}