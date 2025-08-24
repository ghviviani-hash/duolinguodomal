"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Upload,
  Trophy,
  Star,
  Flame,
  RefreshCw,
  FileText,
  CheckCircle2,
  XCircle,
  Sparkles,
  Heart,
  HelpCircle,
  Info,
  BookOpen,
  Download,
} from "lucide-react";

// ---------- Types ----------
interface Question {
  id: string;
  text: string;
  options: string[]; // length 4
  answerIndex: number; // 0..3
  explanation?: string;
  tag?: string;
}

// ---------- Utilities ----------
const LS_STATS_KEY = "quizg-v1-stats";
const LS_DECK_KEY = (deckId: string) => `quizg-v1-deck-${deckId}`;
const todayKey = () => {
  const d = new Date();
  // Normalize to local midnight for the user's browser time zone
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
};

function daysBetween(a: string, b: string) {
  const A = new Date(a + "T00:00:00");
  const B = new Date(b + "T00:00:00");
  const diff = Math.round((B.getTime() - A.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

function uid() {
  return Math.random().toString(36).slice(2);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
}

// ---------- TXT Parser ----------
// Supports two formats per card block (blocks separated by blank line or ---):
// A) Rotulado
// Q: Pergunta?
// A) opção 1
// B) opção 2
// C) opção 3
// D) opção 4
// ANS: B
// EXPL: (opcional)
// TAG: (opcional)
// ---
// B) Asterisco na correta
// Q: Pergunta?
// *A) correta
// B) errada
// C) errada
// D) errada
// EXPL: (opcional)
// ---

const OPTION_RE = /^([ABCD])\s*[\)\.\-\:]\s*(.*)$/i;
const STAR_OPTION_RE = /^\*\s*([ABCD])\s*[\)\.\-\:]\s*(.*)$/i;

function parseTxtDeck(txt: string): { questions: Question[]; errors: string[] } {
  const lines = txt.replace(/\r\n?/g, "\n").split(/\n/);
  const blocks: string[][] = [];
  let buf: string[] = [];

  function flush() {
    const cleaned = buf.map((l) => l.trim()).filter((l) => l.length > 0);
    if (cleaned.length) blocks.push(cleaned);
    buf = [];
  }

  for (const raw of lines) {
    const line = raw.trim();
    if (line === "---") {
      flush();
      continue;
    }
    if (line === "") {
      // blank line separates blocks
      flush();
    } else {
      if (!line.startsWith("#")) buf.push(line); // allow comments
    }
  }
  flush();

  const errors: string[] = [];
  const questions: Question[] = [];

  for (let bi = 0; bi < blocks.length; bi++) {
    const block = blocks[bi];
    let q: string | undefined;
    const opts: string[] = [];
    let ans: number | undefined;
    let expl: string | undefined;
    let tag: string | undefined;

    for (const line of block) {
      if (/^Q\s*:/i.test(line)) {
        q = line.replace(/^Q\s*:/i, "").trim();
      } else if (/^EXPL\s*:/i.test(line)) {
        expl = line.replace(/^EXPL\s*:/i, "").trim();
      } else if (/^TAG\s*:/i.test(line)) {
        tag = line.replace(/^TAG\s*:/i, "").trim();
      } else if (/^ANS\s*:/i.test(line)) {
        const val = line.replace(/^ANS\s*:/i, "").trim().toUpperCase();
        const idx = { A: 0, B: 1, C: 2, D: 3 } as Record<string, number>;
        if (val in idx) ans = idx[val];
      } else if (STAR_OPTION_RE.test(line)) {
        const m = line.match(STAR_OPTION_RE)!;
        const letter = m[1].toUpperCase();
        const text = m[2].trim();
        const idx = { A: 0, B: 1, C: 2, D: 3 } as Record<string, number>;
        opts[idx[letter]] = text;
        ans = idx[letter];
      } else if (OPTION_RE.test(line)) {
        const m = line.match(OPTION_RE)!;
        const letter = m[1].toUpperCase();
        const text = m[2].trim();
        const idx = { A: 0, B: 1, C: 2, D: 3 } as Record<string, number>;
        opts[idx[letter]] = text;
      } else {
        // ignore unrecognized line types to be permissive
      }
    }

    if (!q) {
      errors.push(`Bloco ${bi + 1}: faltou a linha 'Q:'`);
      continue;
    }
    if (opts.length !== 4 || opts.some((o) => !o || o.trim() === "")) {
      errors.push(`Bloco ${bi + 1}: devem existir exatamente 4 alternativas A-D.`);
      continue;
    }
    if (ans == null) {
      errors.push(`Bloco ${bi + 1}: faltou a resposta (ANS: A|B|C|D) ou '*' na alternativa correta.`);
      continue;
    }

    questions.push({
      id: uid(),
      text: q!,
      options: opts,
      answerIndex: ans,
      explanation: expl,
      tag,
    });
  }

  return { questions, errors };
}

// ---------- Confetti (CSS + Motion) ----------
const Confetti = ({ trigger }: { trigger: number }) => {
  const count = 16;
  const pieces = new Array(count).fill(0);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <AnimatePresence>
        {trigger > 0 && (
          <>
            {pieces.map((_, i) => (
              <motion.div
                key={trigger + "-" + i}
                initial={{ opacity: 1, y: -40, x: 0, rotate: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  y: [0, 250 + Math.random() * 400],
                  x: [0, (Math.random() - 0.5) * 600],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                transition={{ duration: 1.6 + Math.random() * 0.6 }}
                className="absolute left-1/2 top-4 text-2xl"
              >
                {Math.random() > 0.5 ? "🎉" : "✨"}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ---------- Main App ----------
export default function QuizGamificadoApp() {
  const [deckId, setDeckId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [queue, setQueue] = useState<number[]>([]); // indices into questions
  const [current, setCurrent] = useState<number | null>(null); // index into questions
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExpl, setShowExpl] = useState(false);
  const [shuffleOnLoad, setShuffleOnLoad] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [dark, setDark] = useState(true);

  // Gamification state
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [hearts, setHearts] = useState(5);
  const [streakDays, setStreakDays] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [goal, setGoal] = useState(100);
  const [combo, setCombo] = useState(0);
  const [confettiKey, setConfettiKey] = useState(0);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ---------- Load stats ----------
  useEffect(() => {
    const raw = localStorage.getItem(LS_STATS_KEY);
    const today = todayKey();
    if (raw) {
      try {
        const s = JSON.parse(raw);
        const last = s.lastActiveDate as string | undefined;
        // streak logic
        if (last) {
          const diff = daysBetween(last, today);
          if (diff === 0) {
            setStreakDays(s.streakDays || 0);
          } else if (diff === 1) {
            setStreakDays((s.streakDays || 0) + 1);
          } else {
            setStreakDays(1);
          }
        } else {
          setStreakDays(1);
        }
        setXp(s.xp || 0);
        setLevel(s.level || 1);
        setHearts(Math.max(1, s.hearts ?? 5));
        setGoal(s.goal ?? 100);
        // reset today's xp if lastXPDate !== today
        if (s.lastXPDate === today) {
          setTodayXp(s.todayXp || 0);
        } else {
          setTodayXp(0);
        }
      } catch {}
    } else {
      setStreakDays(1);
    }
  }, []);

  // persist stats
  useEffect(() => {
    const today = todayKey();
    localStorage.setItem(
      LS_STATS_KEY,
      JSON.stringify({
        lastActiveDate: today,
        streakDays,
        xp,
        level,
        hearts,
        goal,
        todayXp,
        lastXPDate: today,
      })
    );
  }, [streakDays, xp, level, hearts, goal, todayXp]);

  // Level up formula: every 250 XP -> next level
  useEffect(() => {
    const newLevel = Math.floor(xp / 250) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      setConfettiKey((k) => k + 1);
    }
  }, [xp]);

  // ---------- Deck persistence ----------
  useEffect(() => {
    if (!deckId) return;
    const raw = localStorage.getItem(LS_DECK_KEY(deckId));
    if (raw) {
      try {
        const d = JSON.parse(raw);
        if (d.questions && Array.isArray(d.questions)) {
          setQuestions(d.questions);
          const idxs = d.queue && Array.isArray(d.queue) ? d.queue : d.questions.map((_: Question, i: number) => i);
          setQueue(idxs);
          setCurrent(idxs[0] ?? null);
        }
      } catch {}
    }
  }, [deckId]);

  useEffect(() => {
    if (!deckId) return;
    localStorage.setItem(
      LS_DECK_KEY(deckId),
      JSON.stringify({ questions, queue })
    );
  }, [deckId, questions, queue]);

  // ---------- Handlers ----------
  const handleUpload = async (file: File) => {
    const text = await file.text();
    const { questions: qs, errors } = parseTxtDeck(text);
    setErrors(errors);
    if (qs.length === 0) return;
    const id = `${file.name}-${hashString(text)}`;
    setDeckId(id);
    const withIds = qs.map((q) => ({ ...q, id: uid() }));
    const baseOrder = withIds.map((_, i) => i);
    const order = shuffleOnLoad ? shuffle(baseOrder) : baseOrder;
    setQuestions(withIds);
    setQueue(order);
    setCurrent(order[0]);
  };

  const onSelect = (idx: number) => {
    if (current == null) return;
    if (selected != null) return; // prevent double
    setSelected(idx);
    const q = questions[current];
    const correct = idx === q.answerIndex;
    setIsCorrect(correct);
    if (correct) {
      const gain = 12 + Math.min(8, combo * 2); // small combo bonus
      setXp((x) => x + gain);
      setTodayXp((t) => t + gain);
      setCombo((c) => c + 1);
      setTimeout(() => {
        advanceQueue(true);
      }, 600);
    } else {
      setHearts((h) => Math.max(0, h - 1));
      setCombo(0);
      setShowExpl(true);
      setTimeout(() => {
        advanceQueue(false);
      }, 900);
    }
  };

  const advanceQueue = (wasCorrect: boolean) => {
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setQueue((q) => {
      if (current == null) return q;
      const idxPos = q.indexOf(current);
      if (idxPos === -1) return q;
      const next = [...q];
      if (wasCorrect) {
        next.splice(idxPos, 1); // remove from queue
      } else {
        // move to end
        next.splice(idxPos, 1);
        next.push(current);
      }
      const nextCurrent = next[0] ?? null;
      setCurrent(nextCurrent);
      return next;
    });
  };

  const resetSession = () => {
    if (questions.length === 0) return;
    const base = questions.map((_, i) => i);
    const order = shuffleOnLoad ? shuffle(base) : base;
    setQueue(order);
    setCurrent(order[0]);
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setCombo(0);
  };

  const downloadTemplate = () => {
    const content = TEMPLATE_TXT.trim();
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "modelo_perguntas.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const sessionDone = queue.length === 0 && questions.length > 0;
  const progressPct = questions.length > 0 ? Math.round(((questions.length - queue.length) / questions.length) * 100) : 0;
  const goalPct = Math.min(100, Math.round((todayXp / goal) * 100));

  const currentQ = current != null ? questions[current] : null;

  // ---------- UI ----------
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <Confetti trigger={confettiKey} />

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Quiz Gamificado
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Importe um arquivo .txt com suas questões (4 alternativas). Se errar, a questão volta para o fim até você acertar.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-semibold">{streakDays} dias</span>
              <Badge variant="secondary">streak</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span className="font-semibold">Lv {level}</span>
              <Badge variant="secondary">{xp} XP</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500" />
              <span className="font-semibold">{hearts}</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={dark} onCheckedChange={setDark} />
              <span className="text-sm">Tema</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left column: Controls */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5"/>Carregar perguntas</CardTitle>
                <CardDescription>Arquivos .txt no modelo indicado abaixo.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input ref={fileInputRef} type="file" accept=".txt" onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleUpload(f);
                  }} />
                  <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>Selecionar</Button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Switch checked={shuffleOnLoad} onCheckedChange={setShuffleOnLoad} />
                    <span>Embaralhar ao iniciar</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={downloadTemplate}>
                    <Download className="mr-2 h-4 w-4"/>Modelo .txt
                  </Button>
                </div>
                {errors.length > 0 && (
                  <div className="rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 p-3 text-sm text-amber-700 dark:text-amber-200">
                    <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4"/>Ajustes necessários:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {errors.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5"/>Meta diária</CardTitle>
                <CardDescription>Ganhe XP respondendo corretamente.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>{todayXp} / {goal} XP hoje</span>
                  <Badge variant={goalPct === 100 ? "default" : "secondary"}>{goalPct}%</Badge>
                </div>
                <Progress value={goalPct} />
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm text-slate-600 dark:text-slate-300">Combo atual: <span className="font-semibold">{combo}</span></div>
                  <Button size="sm" variant="outline" onClick={() => setGoal((g) => Math.max(50, g + 50))}>+50 meta</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5"/>Deck</CardTitle>
                <CardDescription>Progresso do conjunto atual.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>{questions.length - queue.length} / {questions.length} concluídas</span>
                  <Badge variant="secondary">{progressPct}%</Badge>
                </div>
                <Progress value={progressPct} />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={resetSession}><RefreshCw className="mr-2 h-4 w-4"/>Recomeçar</Button>
                  <Button variant="ghost" size="sm" onClick={() => { setQuestions([]); setQueue([]); setCurrent(null); setDeckId(null);}}>Limpar deck</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column: Quiz */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white/80 to-white/30 dark:from-slate-900/70 dark:to-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-800/60">
              <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none" aria-hidden>
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-400 blur-3xl mix-blend-multiply dark:bg-fuchsia-700"/>
                <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-sky-300 blur-3xl mix-blend-multiply dark:bg-sky-700"/>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      {sessionDone ? "Parabéns!" : currentQ ? (currentQ.tag ? `${currentQ.tag}` : "Questão") : "Comece carregando um .txt"}
                    </CardTitle>
                    <CardDescription>
                      {sessionDone ? "Você finalizou todas as questões deste deck." : currentQ ? "Selecione a alternativa correta." : "Use o painel ao lado para carregar perguntas."}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{questions.length > 0 ? `${questions.length - queue.length}/${questions.length}` : "0/0"}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {currentQ && !sessionDone && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQ.id + "-q"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="text-lg md:text-xl font-semibold leading-snug">
                        {currentQ.text}
                      </div>

                      <div className="grid gap-3">
                        {currentQ.options.map((opt, i) => {
                          const letter = String.fromCharCode(65 + i);
                          const isSel = selected === i;
                          const correct = isCorrect != null && i === currentQ.answerIndex;
                          const wrong = isSel && isCorrect === false;
                          return (
                            <motion.button
                              key={i}
                              onClick={() => onSelect(i)}
                              disabled={selected != null}
                              whileTap={{ scale: 0.98 }}
                              className={[
                                "text-left rounded-2xl p-4 border transition-colors",
                                "bg-white/70 hover:bg-white dark:bg-slate-900/60 hover:dark:bg-slate-900/80",
                                correct ? "border-emerald-500/70 ring-2 ring-emerald-500/30" : wrong ? "border-rose-500/70 ring-2 ring-rose-500/30" : "border-slate-200/60 dark:border-slate-700/60",
                              ].join(" ")}
                            >
                              <div className="flex items-start gap-3">
                                <Badge className="mt-0.5" variant="secondary">{letter}</Badge>
                                <div className="flex-1">
                                  <div className="font-medium">{opt}</div>
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {selected != null && (
                        <div className="flex items-center gap-3 text-sm">
                          {isCorrect ? (
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-300"><CheckCircle2 className="h-5 w-5"/>Correto! +XP</div>
                          ) : (
                            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-300"><XCircle className="h-5 w-5"/>Resposta incorreta. A questão voltará ao final.</div>
                          )}
                        </div>
                      )}

                      {showExpl && currentQ.explanation && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border p-3 text-sm bg-emerald-50/60 dark:bg-emerald-900/20 border-emerald-300/50 dark:border-emerald-700/40">
                          <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4"/>Explicação</div>
                          <div className="text-slate-700 dark:text-slate-200">{currentQ.explanation}</div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}

                {sessionDone && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="text-2xl font-bold flex items-center gap-2"><Trophy className="h-6 w-6 text-amber-500"/>Conjunto concluído!</div>
                    <div className="text-slate-600 dark:text-slate-300">Continue para manter a sua streak e acumular XP. Você pode recomeçar ou carregar outro arquivo.</div>
                    <div className="flex gap-3">
                      <Button onClick={resetSession}><RefreshCw className="mr-2 h-4 w-4"/>Repetir</Button>
                      <Button variant="secondary" onClick={() => fileInputRef.current?.click()}><Upload className="mr-2 h-4 w-4"/>Novo deck</Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help / Instructions */}
        <div className="mt-8">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><HelpCircle className="h-5 w-5"/>Como preparar o seu .txt</CardTitle>
              <CardDescription>Separe cada questão por uma linha em branco ou por &quot;---&quot;.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold mb-2">Formato 1 — com ANS:</div>
                <pre className="rounded-xl p-4 bg-slate-950 text-slate-100 text-xs overflow-auto"><code>{`Q: RN com 5 dias está irritado e ictérico até zona IV de Kramer. Qual a conduta inicial?\nA) Alta domiciliar e retorno em 7 dias\nB) Fototerapia\nC) Exsanguíneo-transfusão\nD) Suspender aleitamento\nANS: B\nEXPL: Icterícia até zona IV com clínica -> fototerapia.\nTAG: Pediatria\n---\nQ: Qual a droga de escolha para intoxicação por cianeto?\nA) N-acetilcisteína\nB) Hidroxocobalamina\nC) Flumazenil\nD) Azul de metileno\nANS: B\nEXPL: Hidroxocobalamina é antídoto específico.\nTAG: Toxicol.`}</code></pre>
              </div>
              <div>
                <div className="font-semibold mb-2">Formato 2 — marque a correta com *:</div>
                <pre className="rounded-xl p-4 bg-slate-950 text-slate-100 text-xs overflow-auto"><code>{`Q: Critérios de peritonite bacteriana espontânea incluem:\n*A) Neurotórax não é critério\nB) Proteinorraquia > 1 g/dL\nC) Polimorfonucleares no líquido ascítico > 250/mm³\nD) Amilase elevada\nEXPL: PMN > 250/mm³ define PBE.\nTAG: Gastro`}</code></pre>
                <p className="mt-2 text-xs text-slate-500">Obs.: No Formato 2, a linha com * define a alternativa correta e você não precisa incluir ANS.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// A simple built-in template for downloading
const TEMPLATE_TXT = `# Modelo de perguntas (4 alternativas)\n# — Se preferir, marque a correta com * e omita ANS.\n\nQ: Exemplo — Qual vitamina é sintetizada pela pele sob exposição solar?\nA) Vitamina A\n*B) Vitamina D\nC) Vitamina E\nD) Vitamina K\nEXPL: Radiação UVB converte 7-dehidrocolesterol em vitamina D3.\nTAG: Bioquímica\n---\nQ: Exemplo — Em hipercalemia grave com alteração de ECG, a primeira medicação é:\nA) Cloreto de sódio hipertônico\nB) Gluconato de cálcio\nC) Insulina rápida isolada\nD) Furosemida\nANS: B\nEXPL: Cálcio estabiliza membrana cardiomiocítica.\nTAG: Clínica\n`;
