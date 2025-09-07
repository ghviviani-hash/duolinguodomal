// components/layout/Sidebar.tsx

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, Download, BookOpen, BrainCircuit, Trophy, Award, RefreshCw, Info, History } from "lucide-react";
import { SrsData, Deck } from "@/types";
import { achievements } from "@/lib/achievements";
import { TEMPLATE_TXT } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { isPast } from 'date-fns';
import { WrongAnswersStatsModal } from "../quiz/WrongAnswersStatsModal";

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
  setDeckId: (id: string | null) => void;
  xp: number;
  level: number;
  streakDays: number;
  todayXp: number;
  goal: number;
  dailyBonusAwarded: boolean;
  decksCompleted: number;
  combo: number;
  isSessionComplete: boolean;
  clearSession: () => void;
  resetSession: () => void;
  unlockedAchievements: string[];
  setShowStatsModal: (value: boolean) => void;
  quizMode: "deck" | "srs";
  questionsCount: number;
  queue: number[];
  current: number | null;
}

interface DeckNode {
  decks: Deck[];
  children: { [key: string]: DeckNode };
}

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
  xp,
  level,
  streakDays,
  todayXp,
  goal,
  dailyBonusAwarded,
  decksCompleted,
  combo,
  isSessionComplete,
  clearSession,
  resetSession,
  unlockedAchievements,
  setShowStatsModal,
  quizMode,
  questionsCount,
  queue,
  current,
}: SidebarProps) {

  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const { root, orderedGroups } = useMemo(() => {
    const rootNode: DeckNode = { decks: [], children: {} };
    const topLevelOrder: string[] = [];

    availableDecks.forEach(deck => {
      const parts = deck.name.split(/\s*-\s*/).map(p => p.trim());
      
      if (parts.length === 1) {
        if (!rootNode.children["Outros"]) {
          rootNode.children["Outros"] = { decks: [], children: {} };
          topLevelOrder.push("Outros");
        }
        rootNode.children["Outros"].decks.push({ ...deck, name: parts[0] });
        return;
      }
      
      const deckName = parts.pop()!;
      const path = parts;
      
      if (path.length > 0 && !rootNode.children[path[0]]) {
        topLevelOrder.push(path[0]);
      }

      let currentNode = rootNode;
      for (const part of path) {
        if (!currentNode.children[part]) {
          currentNode.children[part] = { decks: [], children: {} };
        }
        currentNode = currentNode.children[part];
      }
      
      currentNode.decks.push({ ...deck, name: deckName });
    });

    return { root: rootNode, orderedGroups: topLevelOrder };
  }, [availableDecks]);
  
  const defaultOpenFolder = useMemo(() => {
    if (isMobile && orderedGroups.length > 0) {
      return [orderedGroups[0]];
    }
    return [];
  }, [isMobile, orderedGroups]);

  const downloadTemplate = () => {
    const blob = new Blob([TEMPLATE_TXT.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "modelo_perguntas.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const goalPct = Math.min(100, Math.round((todayXp / goal) * 100));
  const srsCount = Object.values(srsData).filter((item: any) => isPast(new Date(item.nextReview))).length;
  const progressPct = questionsCount > 0 ? Math.round((questionsCount - (queue.length + (current === null ? 0 : 1))) / questionsCount * 100) : 0;
  
  const renderDeckTree = (node: DeckNode, nodeKey: string) => {
    const sortedChildrenKeys = Object.keys(node.children).sort();
    const sortedDecks = [...node.decks].sort((a, b) => a.name.localeCompare(b.name));

    return (
      <AccordionItem value={nodeKey} key={nodeKey}>
        <AccordionTrigger>{nodeKey}</AccordionTrigger>
        <AccordionContent className="pl-2 space-y-2">
          {sortedDecks.map((deck) => (
            <Button 
              key={deck.id} 
              variant={deckId === deck.id ? "default" : "outline"} 
              className="w-full justify-start text-left h-auto whitespace-normal" 
              onClick={() => setDeckId(deck.id)}
            >
              {deck.name}
            </Button>
          ))}
          {sortedChildrenKeys.length > 0 && (
            <Accordion type="multiple" className="w-full">
              {sortedChildrenKeys.map(key => renderDeckTree(node.children[key], key))}
            </Accordion>
          )}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <>
      <div className="flex flex-col space-y-6">

        <div className={`order-2 lg:order-1 ${isQuizActive ? 'hidden lg:flex' : 'flex'}`}>
          {availableDecks.length > 0 && (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />Escolha uma prova para começar</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="w-full" defaultValue={defaultOpenFolder}>
                  {orderedGroups.map(key => renderDeckTree(root.children[key], key))}
                </Accordion>
              </CardContent>
            </Card>
          )}
        </div>

        <div className={`order-1 lg:order-2 ${!isQuizActive ? 'hidden lg:flex' : 'flex'}`}>
          <Card className="w-full">
            <CardHeader>
              {/* ALTERAÇÃO AQUI */}
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5"/>
                {availableDecks.find(d => d.id === deckId)?.name || 'Deck Ativo'}
              </CardTitle>
              {/* A linha CardDescription foi removida daqui */}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Progresso:</span>
                <Badge variant="secondary">{progressPct}%</Badge>
              </div>
              <Progress value={progressPct} />
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" onClick={resetSession} disabled={questionsCount === 0}><RefreshCw className="mr-2 h-4 w-4" />Recomeçar</Button>
                <Button variant="ghost" size="sm" onClick={() => { setDeckId(null); clearSession(); }}>Trocar Deck</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-3">
            <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5" />Revisão Espaçada</CardTitle></CardHeader>
                <CardContent>
                    <Button className="w-full" onClick={startSrsSession}>
                        Iniciar Revisão ({srsCount} para hoje)
                    </Button>
                </CardContent>
            </Card>
        </div>

        <div className="order-4">
            <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><History className="h-5 w-5" />Análise de Desempenho</CardTitle></CardHeader>
                <CardContent>
                    <Button className="w-full" onClick={() => setIsStatsModalOpen(true)}>
                        Ver Meus Erros Frequentes
                    </Button>
                </CardContent>
            </Card>
        </div>

        <div className="order-5">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Meta diária</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm"><span>{todayXp} / {goal} XP hoje</span><Badge variant={goalPct === 100 ? "default" : "secondary"}>{goalPct}%</Badge></div>
              <Progress value={goalPct} />
              <div className="flex items-center justify-between gap-2"><div className="text-sm text-slate-600 dark:text-slate-300">Combo: <span className="font-semibold">{combo}</span></div><Button size="sm" variant="outline" onClick={() => setShowStatsModal(true)}>Ajustar meta</Button></div>
            </CardContent>
          </Card>
        </div>

        <div className="order-6">
          <Card>
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
        
        <div className="order-7">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5" />Carregar perguntas</CardTitle></CardHeader>
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
        </div>
      </div>
      
      <WrongAnswersStatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
      />
    </>
  );
}