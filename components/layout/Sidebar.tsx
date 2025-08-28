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
  isQuizActive: boolean;
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

type GroupedDecks = { [key: string]: { decks: Deck[]; [subgroup: string]: any; } };

export function Sidebar({
  isQuizActive,
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

  // A lógica interna do componente (useMemo, downloadTemplate, etc.) permanece a mesma
  const groupedDecks = useMemo(() => {
    const groups: GroupedDecks = {};
    const sortedDecks = [...availableDecks].sort((a, b) => a.name.localeCompare(b.name));
    sortedDecks.forEach(deck => {
      const parts = deck.name.split(/\s*-\s*/).map(p => p.trim());
      let currentLevel: any = groups;
      if (parts.length === 1) {
        if (!currentLevel["Outros"]) currentLevel["Outros"] = { decks: [] };
        currentLevel["Outros"].decks.push({ ...deck, name: parts[0] });
        return;
      }
      const path = parts.slice(0, -1);
      const deckName = parts[parts.length - 1];
      path.forEach(part => {
        if (!currentLevel[part]) {
          currentLevel[part] = { decks: [] };
        }
        currentLevel = currentLevel[part];
      });
      currentLevel.decks.push({ ...deck, name: deckName });
    });
    return groups;
  }, [availableDecks]);

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

  const renderDecks = (level: GroupedDecks) => {
    return Object.keys(level).sort().map(key => {
      const group = level[key];
      const decks = group.decks || [];
      const subGroups = Object.keys(group).filter(k => k !== 'decks');
      return (
        <AccordionItem value={key} key={key}>
          <AccordionTrigger>{key}</AccordionTrigger>
          <AccordionContent className="pl-2 space-y-2">
            {decks.map((deck: Deck) => (
              <Button 
                key={deck.id} 
                variant={deckId === deck.id ? "default" : "outline"} 
                className="w-full justify-start text-left h-auto whitespace-normal" 
                onClick={() => setDeckId(deck.id)}
              >
                {deck.name}
              </Button>
            ))}
            {subGroups.length > 0 && (
              <Accordion type="multiple" className="w-full">
                {renderDecks(group as GroupedDecks)}
              </Accordion>
            )}
          </AccordionContent>
        </AccordionItem>
      );
    });
  };

  return (
    // MUDANÇA: Usamos flex flex-col para que as classes 'order' funcionem
    <div className="flex flex-col space-y-6">
      
      {/* MUDANÇA: As classes 'order-*' definem a ordem no telemóvel.
          As classes 'lg:order-none' removem essa ordem no computador,
          fazendo com que a ordem natural do código (a ordem para desktop) seja usada.
      */}
      
      <div className="order-6 lg:order-none">
        <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
          <CardHeader><CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5" />Carregar perguntas</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Input ref={fileInputRef} type="file" accept=".txt" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
            <Button className="w-full" onClick={() => fileInputRef.current?.click()}><Upload className="mr-2 h-4 w-4" />Selecionar Ficheiro .txt</Button>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-sm"><Switch id="shuffle-switch" checked={shuffleOnLoad} onCheckedChange={setShuffleOnLoad} /><label htmlFor="shuffle-switch">Embaralhar</label></div>
              <Button variant="outline" size="sm" onClick={downloadTemplate}><Download className="mr-2 h-4 w-4" />Modelo</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="order-5 lg:order-none">
        <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
          <CardHeader><CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5" />Revisão Espaçada</CardTitle></CardHeader>
          <CardContent>
            <Button className="w-full" onClick={startSrsSession}>
              Iniciar Revisão ({srsCount} para hoje)
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className={`order-1 lg:order-none ${isQuizActive ? 'hidden lg:block' : ''}`}>
        {availableDecks.length > 0 && (
          <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />Decks Salvos</CardTitle>
              <CardDescription>Escolha um deck para começar:</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full -mt-4">
                {renderDecks(groupedDecks)}
              </Accordion>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="order-2 lg:order-none">
        <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
          <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Meta diária</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm"><span>{stats.todayXp} / {stats.goal} XP hoje</span><Badge variant={goalPct === 100 ? "default" : "secondary"}>{goalPct}%</Badge></div>
            <Progress value={goalPct} />
            <div className="flex items-center justify-between gap-2"><div className="text-sm text-slate-600 dark:text-slate-300">Combo: <span className="font-semibold">{stats.combo}</span></div><Button size="sm" variant="outline" onClick={() => actions.setGoal((g: number) => g + 50)}>+50 meta</Button></div>
          </CardContent>
        </Card>
      </div>

      <div className="order-3 lg:order-none">
        <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
          <CardHeader><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5"/>Conquistas</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            {achievements.map(ach => {
              const IconComponent = ach.icon;
              const isUnlocked = unlockedAchievements.includes(ach.id);
              return (
                <div key={ach.id} className="flex flex-col items-center text-center" title={`${ach.title}: ${ach.description}`}>
                  <div className={`p-3 rounded-full ${isUnlocked ? 'bg-amber-100 dark:bg-amber-900' : 'bg-slate-100 dark:bg-slate-800'}`}>
                    <IconComponent className={`h-6 w-6 ${isUnlocked ? 'text-amber-500' : 'text-slate-400'}`} />
                  </div>
                  <span className="text-xs mt-1 text-slate-600 dark:text-slate-300">{ach.title}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
      
      <div className={`order-4 lg:order-none ${!isQuizActive ? 'hidden lg:block' : ''}`}>
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
    </div>
  );
}