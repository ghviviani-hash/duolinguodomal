import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Flame, Heart, Sparkles, Star } from "lucide-react";
import React from "react";

interface HeaderProps {
  stats: {
    streakDays: number;
    level: number;
    xp: number;
    hearts: number;
  };
  dark: boolean;
  setDark: (isDark: boolean) => void;
}

export function Header({ stats, dark, setDark }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
          <Sparkles className="h-6 w-6" /> DUOMED
        </h1>
        {/* MUDANÇA: Este parágrafo agora fica escondido em ecrãs pequenos (hidden) e aparece em ecrãs médios e maiores (md:block) */}
        <p className="hidden md:block text-sm md:text-base text-slate-600 dark:text-slate-300">
          Se errar, a questão volta para o fim. Teste o modo Revisão espaçada depois de terminar um deck.
        </p>
      </div>

      {/* MUDANÇA: No telemóvel, os itens não quebram a linha (flex-nowrap) e têm um espaçamento menor. No desktop, eles podem quebrar a linha se necessário (md:flex-wrap) e têm mais espaço. */}
      <div className="flex items-center justify-start md:justify-end gap-x-3 md:gap-x-4 gap-y-2 w-full md:w-auto flex-nowrap md:flex-wrap">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          <span className="font-semibold text-sm">{stats.streakDays}</span>
          {/* MUDANÇA: A palavra "dias" só aparece no desktop */}
          <span className="hidden md:inline">dias</span>
        </div>
        
        <div className="flex-shrink-0 md:flex-shrink-1">
            <div className="flex items-center gap-2">
                {/* MUDANÇA: A estrela fica escondida no telemóvel e aparece no desktop */}
                <Star className="h-5 w-5 hidden md:block" />
                <span className="font-semibold text-sm">Lv {stats.level}</span>
                <Badge variant="secondary">{stats.xp} XP</Badge>
            </div>
            {/* A barra de progresso só aparece no desktop para poupar espaço */}
            <Progress value={(stats.xp % 250) / 2.5} className="h-1 w-full mt-1 hidden md:block"/>
        </div>

        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-rose-500" />
          <span className="font-semibold text-sm">{stats.hearts}</span>
        </div>

        <div className="flex items-center gap-2">
          <Switch checked={dark} onCheckedChange={setDark} />
          {/* A palavra "Tema" só aparece em ecrãs maiores */}
          <span className="hidden sm:inline text-sm">Tema</span>
        </div>
      </div>
    </div>
  );
}