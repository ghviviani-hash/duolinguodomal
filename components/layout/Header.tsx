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
    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
          <Sparkles className="h-6 w-6" /> Duomed
        </h1>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
          Importe um .txt com suas questões. Se errar, a questão volta para o fim.
        </p>
      </div>
      {/* MUDANÇA: gap-x-4 para espaçamento horizontal e gap-y-2 para vertical quando quebrar a linha */}
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap justify-start md:justify-end self-start md:self-center w-full md:w-auto">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          <span className="font-semibold">{stats.streakDays} dias</span>
          <Badge variant="secondary">streak</Badge>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            <span className="font-semibold">Lv {stats.level}</span>
            <Badge variant="secondary">{stats.xp} XP</Badge>
          </div>
          <Progress value={(stats.xp % 250) / 2.5} className="h-1 w-full"/>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-rose-500" />
          <span className="font-semibold">{stats.hearts}</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch checked={dark} onCheckedChange={setDark} />
          <span className="text-sm">Tema</span>
        </div>
      </div>
    </div>
  );
}