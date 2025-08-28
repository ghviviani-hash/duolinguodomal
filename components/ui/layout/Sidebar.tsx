import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Download,
  BookOpen,
  BrainCircuit,
  Trophy,
  Award,
  RefreshCw,
  Info,
} from "lucide-react";

import { SrsData, Deck } from "@/types";
import { formatTimeLeft } from "@/lib/utils";
import { achievements } from "@/lib/achievements";
import { TEMPLATE_TXT } from "@/lib/constants";

// Definimos todas as "informações" que o Sidebar precisa receber para funcionar
interface SidebarProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleUpload: (file: File) => void;
  shuffleOnLoad: boolean;
  setShuffleOnLoad: (value: boolean) => void;
  errors: string[];
  srsData: SrsData;
  startSrsSession: () => void;
  availableDecks: Deck[];
  deckId: string | null;
  setDeckId: (id: string) => void;
  stats: {
    todayXp: number;
    goal: number;
    combo: number;
    hearts: number;
    lockUntil: number | null;
    now: number;
    xp: number;
  };
  actions: {
    setGoal: (updater: (g: number) => number) => void;
    buyLivesWithXp: (cost: number, amount: number) => void;
    resetSession: () => void;
    clearSession: () => void;
  };
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
  const srsCount = Object.values(srsData).filter(item => item.nextReview <= Date.now()).length;

  return (
    <div className="space-y-6">
      <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5" />Carregar perguntas</CardTitle>
          <CardDescription>Ficheiros .txt no modelo indicado.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input ref={fileInputRef} type="file" accept=".txt" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
          <Button className="w-full" onClick={() => fileInputRef.current?.click()}><Upload className="mr-2 h-4 w-4" />Selecionar Ficheiro .txt</Button>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm"><Switch id="shuffle-switch" checked={shuffleOnLoad} onCheckedChange={setShuffleOnLoad} /><label htmlFor="shuffle-switch">Embaralhar</label></div>
            <Button variant="outline" size="sm" onClick={downloadTemplate}><Download className="mr-2 h-4 w-4" />Modelo</Button>
          </div>
          {errors.length > 0 && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 p-3 text-sm text-amber-700 dark:text-amber-200">
              <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4" />Ajustes necessários:</div>
              <ul className="list-disc list-inside space-y-1">{errors.map((e, i) => <li key={i}>{e}</li>)}</ul>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5" />Revisão Espaçada</CardTitle>
          <CardDescription>Relembre as questões de forma inteligente.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={startSrsSession}>
            Iniciar Revisão ({srsCount} para hoje)
          </Button>
        </CardContent>
      </Card>
      
      {availableDecks.length > 0 && (
        <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />Decks Salvos</CardTitle>
            <CardDescription>Escolha um deck abaixo para começar:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 max-h-60 overflow-y-auto">
            {availableDecks.map((deck) => (
              <Button key={deck.id} variant={deckId === deck.id ? "default" : "outline"} className="w-full justify-start" onClick={() => setDeckId(deck.id)}>{deck.name}</Button>
            ))}
          </CardContent>
        </Card>
      )}

      <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
        <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Meta diária</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm"><span>{stats.todayXp} / {stats.goal} XP hoje</span><Badge variant={goalPct === 100 ? "default" : "secondary"}>{goalPct}%</Badge></div>
          <Progress value={goalPct} />
          <div className="flex items-center justify-between gap-2"><div className="text-sm text-slate-600 dark:text-slate-300">Combo: <span className="font-semibold">{stats.combo}</span></div><Button size="sm" variant="outline" onClick={() => actions.setGoal(g => g + 50)}>+50 meta</Button></div>
        </CardContent>
      </Card>

       <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
        <CardHeader><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5"/>Conquistas</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
          {achievements.map(ach => (
            <div key={ach.id} className="flex flex-col items-center text-center" title={`${ach.title}: ${ach.description}`}>
              <div className={`p-3 rounded-full ${unlockedAchievements.includes(ach.id) ? 'bg-amber-100 dark:bg-amber-900' : 'bg-slate-100 dark:bg-slate-800'}`}>
                {React.cloneElement(ach.icon, { className: `h-6 w-6 ${unlockedAchievements.includes(ach.id) ? 'text-amber-500' : 'text-slate-400'}`})}
              </div>
              <span className="text-xs mt-1 text-slate-600 dark:text-slate-300">{ach.title}</span>
            </div>
          ))}
        </CardContent>
      </Card>

       <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
        <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5"/>Deck</CardTitle><CardDescription>Progresso e ações.</CardDescription></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span>Progresso:</span>
            <Badge variant="secondary">{progressPct}%</Badge>
          </div>
          <Progress value={progressPct} />
          {stats.lockUntil && stats.lockUntil > stats.now ? (
              <div className="rounded-md p-3 bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-sm">
                  <div className="font-semibold text-rose-600 dark:text-rose-200">Você ficou sem vidas</div>
                  <div className="mt-1">Tempo restante: <span className="font-mono">{formatTimeLeft(stats.lockUntil - stats.now)}</span></div>
                  <div className="mt-3"><Button size="sm" className="w-full" variant="secondary" onClick={() => actions.buyLivesWithXp(100, 10)}> +10 vidas (-100 XP)</Button></div>
              </div>
          ) : (
              <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" onClick={actions.resetSession} disabled={questionsCount === 0}><RefreshCw className="mr-2 h-4 w-4" />Recomeçar</Button>
                  <Button variant="ghost" size="sm" onClick={actions.clearSession}>Limpar</Button>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}