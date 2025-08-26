"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Upload,
  Trophy,
  Star,
  Flame,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Sparkles,
  Heart,
  Info,
  BookOpen,
  Download,
  X,
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
    if (line === "---" || line === "") {
      flush();
    } else if (!line.startsWith("#")) {
      buf.push(line);
    }
  }
  flush();

  const errors: string[] = [];
  const questions: Question[] = [];

  for (let bi = 0; bi < blocks.length; bi++) {
    const block = blocks[bi];
    let q: string | undefined;
    const opts: (string | undefined)[] = new Array(4).fill(undefined);
    let ans: number | undefined;
    let expl: string | undefined;
    let tag: string | undefined;

    for (const line of block) {
      if (/^Q\s*:/i.test(line)) q = line.replace(/^Q\s*:/i, "").trim();
      else if (/^EXPL\s*:/i.test(line)) expl = line.replace(/^EXPL\s*:/i, "").trim();
      else if (/^TAG\s*:/i.test(line)) tag = line.replace(/^TAG\s*:/i, "").trim();
      else if (/^ANS\s*:/i.test(line)) {
        const val = line.replace(/^ANS\s*:/i, "").trim().toUpperCase();
        ans = ({ A: 0, B: 1, C: 2, D: 3 } as Record<string, number>)[val];
      } else {
        const starMatch = line.match(STAR_OPTION_RE);
        const optionMatch = line.match(OPTION_RE);
        const match = starMatch || optionMatch;
        if (match) {
          const letter = match[1].toUpperCase();
          const text = match[2].trim();
          const idx = ({ A: 0, B: 1, C: 2, D: 3 } as Record<string, number>)[letter];
          if (idx !== undefined) {
            opts[idx] = text;
            if (starMatch) ans = idx;
          }
        }
      }
    }

    if (!q) {
      errors.push(`Bloco ${bi + 1}: faltou a linha 'Q:'`);
      continue;
    }
    if (opts.some((o) => o === undefined)) {
      errors.push(`Bloco ${bi + 1}: devem existir exatamente 4 alternativas (A, B, C, D).`);
      continue;
    }
    if (ans === undefined) {
      errors.push(`Bloco ${bi + 1}: faltou a resposta (use 'ANS: B' ou '*' na alternativa correta).`);
      continue;
    }

    questions.push({ id: uid(), text: q, options: opts as string[], answerIndex: ans, explanation: expl, tag });
  }
  return { questions, errors };
}

// ---------- UI Components ----------
const Confetti = ({ trigger }: { trigger: number }) => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      <AnimatePresence>
        {trigger > 0 && Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={`${trigger}-${i}`}
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
      </AnimatePresence>
    </div>
  );
};

const EmojiBurst = ({ trigger }: { trigger: number }) => {
  const EMOJIS = ["✅", "🎯", "🌟", "👏", "🔥", "🎉", "🤓", "💡", "🧠", "✨"];
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      <AnimatePresence>
        {trigger > 0 && Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={`burst-${trigger}-${i}`}
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.6 }}
            animate={{
              opacity: [0.9, 0.9, 0],
              y: -120 - Math.random() * 180,
              x: (Math.random() - 0.5) * 460,
              rotate: (Math.random() - 0.5) * 140,
              scale: 1 + Math.random() * 0.6,
            }}
            transition={{ duration: 1.2 + Math.random() * 0.4, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 text-2xl md:text-3xl"
          >
            {EMOJIS[Math.floor(Math.random() * EMOJIS.length)]}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const CelebrationOverlay = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -2, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="rounded-3xl p-8 md:p-10 text-center bg-white/90 dark:bg-slate-900/90 shadow-2xl"
        >
          <div className="text-5xl md:text-6xl mb-4">🏆🎉</div>
          <div className="text-2xl md:text-3xl font-bold mb-2">Conjunto concluído!</div>
          <div className="text-slate-700 dark:text-slate-200 max-w-md">
            Mandou bem! Você finalizou todas as questões deste deck.
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// NOVO: Componente Modal para Revisão de Questões
const ReviewModal = ({ question, onClose }: { question: Question | null; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {question && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-xl"
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X className="h-4 w-4" /></Button>
            <h3 className="text-lg font-bold mb-4">Revisar Questão</h3>
            <div className="space-y-5">
              <div className="text-lg md:text-xl font-semibold leading-snug">{question.text}</div>
              <div className="grid gap-3">
                {question.options.map((opt, i) => {
                  const isCorrect = i === question.answerIndex;
                  return (
                    <div
                      key={i}
                      className={`text-left rounded-2xl p-4 border transition-all 
                        ${isCorrect 
                          ? "border-emerald-500/70 ring-2 ring-emerald-500/30 bg-emerald-50 dark:bg-emerald-900/30" 
                          : "border-slate-200/60 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50"
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <Badge className="mt-0.5" variant={isCorrect ? "default" : "secondary"}>{String.fromCharCode(65 + i)}</Badge>
                        <div className="flex-1 font-medium">{opt}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {question.explanation && (
                <div className="rounded-xl border p-3 text-sm bg-blue-50/60 dark:bg-blue-900/20 border-blue-300/50 dark:border-blue-700/40">
                  <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4"/>Explicação</div>
                  <div className="text-slate-700 dark:text-slate-200">{question.explanation}</div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ---------- Audio Hook ----------
function useAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  
  const ensureCtx = useCallback(() => {
    if (typeof window !== "undefined" && !ctxRef.current) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (AC) ctxRef.current = new AC();
    }
    return ctxRef.current;
  }, []);

  const playOsc = useCallback((freq: number, duration = 0.2, type: OscillatorType = "sine", gain = 0.03, startAt = 0) => {
    const ctx = ensureCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime + startAt;
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.start(now);
    osc.stop(now + duration);
  }, [ensureCtx]);

  const playCorrect = useCallback(() => [523, 659, 784, 1047].forEach((f, i) => playOsc(f, 0.18, "triangle", 0.03, i * 0.08)), [playOsc]);
  const playWrong = useCallback(() => playOsc(160, 0.3, "sawtooth", 0.035), [playOsc]);
  const playFanfare = useCallback(() => [523, 659, 784, 1047, 1319].forEach((f, i) => playOsc(f, 0.22, "square", 0.03, i * 0.12)), [playOsc]);

  return { playCorrect, playWrong, playFanfare };
}

// ---------- Default Content ----------
const TEMPLATE_TXT = `
# Modelo de perguntas (4 alternativas)
# --- Se preferir, marque a correta com * e omita ANS.

Q: Exemplo — Qual vitamina é sintetizada pela pele sob exposição solar?
A) Vitamina A
*B) Vitamina D
C) Vitamina E
D) Vitamina K
EXPL: Radiação UVB converte 7-dehidrocolesterol em vitamina D3.
TAG: Bioquímica
---
Q: Exemplo — Em hipercalemia grave com alteração de ECG, a primeira medicação é:
A) Cloreto de sódio hipertônico
B) Gluconato de cálcio
C) Insulina rápida isolada
D) Furosemida
ANS: B
EXPL: Cálcio estabiliza membrana cardiomiocítica.
TAG: Clínica
`;

const DEFAULT_DECKS = [
  {
    id: "preset-exemplo-1",
    name: "Deck Padrão — Exemplo",
    questions: [
      {
        id: "q1",
        text: "Qual vitamina é sintetizada pela pele sob exposição solar?",
        options: ["Vitamina A", "Vitamina D", "Vitamina E", "Vitamina K"],
        answerIndex: 1,
        explanation: "A radiação UVB converte 7-dehidrocolesterol em vitamina D3.",
        tag: "Bioquímica",
      },
      {
        id: "q2",
        text: "Em uma situação de hipercalemia grave com alteração de ECG, qual é a primeira medicação a ser administrada?",
        options: ["Cloreto de sódio hipertônico", "Gluconato de cálcio", "Insulina rápida isolada", "Furosemida"],
        answerIndex: 1,
        explanation: "O cálcio estabiliza a membrana dos cardiomiócitos, protegendo o coração dos efeitos da hipercalemia.",
        tag: "Clínica Médica",
      },
    ],
  },
];

// ---------- Main App Component ----------
export default function QuizGamificadoApp() {
  const [availableDecks, setAvailableDecks] = useState<{ id: string; name: string }[]>([]);
  const [deckId, setDeckId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExpl, setShowExpl] = useState(false);
  const [shuffleOnLoad, setShuffleOnLoad] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [dark, setDark] = useState(true);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [hearts, setHearts] = useState(5);
  const [streakDays, setStreakDays] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [goal, setGoal] = useState(100);
  const [combo, setCombo] = useState(0);
  const [confettiKey, setConfettiKey] = useState(0);
  const [lastGain, setLastGain] = useState<number | null>(null);
  const [emojiKey, setEmojiKey] = useState(0);
  const [celebrating, setCelebrating] = useState(false);
  const [questionStart, setQuestionStart] = useState<number | null>(null);
  const LS_WRONG_KEY = "quizg-v1-wrong-list";
  const [wrongList, setWrongList] = useState<Question[]>([]);
  const [lockUntil, setLockUntil] = useState<number | null>(null);
  const [, setNow] = useState(Date.now());
  const [sessionWrongAnswers, setSessionWrongAnswers] = useState<Question[]>([]);
  const [reviewingQuestion, setReviewingQuestion] = useState<Question | null>(null);
  const { playCorrect, playWrong, playFanfare } = useAudio();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const manifestRaw = localStorage.getItem("quizg-v1-deck-manifest");
    if (!manifestRaw || JSON.parse(manifestRaw).length === 0) {
      const defaultManifest = DEFAULT_DECKS.map(deck => ({ id: deck.id, name: deck.name }));
      localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(defaultManifest));
      DEFAULT_DECKS.forEach(deck => {
        localStorage.setItem(LS_DECK_KEY(deck.id), JSON.stringify({ questions: deck.questions }));
      });
      setAvailableDecks(defaultManifest);
    } else {
      setAvailableDecks(JSON.parse(manifestRaw));
    }
  }, []);

  useEffect(() => {
    const raw = localStorage.getItem(LS_WRONG_KEY);
    if (raw) try { setWrongList(JSON.parse(raw)); } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_WRONG_KEY, JSON.stringify(wrongList));
  }, [wrongList]);

  useEffect(() => {
    if (!lockUntil) return;
    const id = setInterval(() => {
      setNow(Date.now());
      if (Date.now() >= lockUntil) setLockUntil(null);
    }, 1000);
    return () => clearInterval(id);
  }, [lockUntil]);

  useEffect(() => {
    const raw = localStorage.getItem(LS_STATS_KEY);
    const today = todayKey();
    if (raw) {
      try {
        const s = JSON.parse(raw);
        const last = s.lastActiveDate as string | undefined;
        setStreakDays(last ? (daysBetween(last, today) === 1 ? (s.streakDays || 0) + 1 : (daysBetween(last, today) === 0 ? s.streakDays || 0 : 1)) : 1);
        setXp(s.xp || 0);
        setLevel(s.level || 1);
        setHearts(s.hearts ?? 5);
        setGoal(s.goal ?? 100);
        setTodayXp(s.lastXPDate === today ? s.todayXp || 0 : 0);
        setLockUntil(s.lockUntil || null);
      } catch {}
    } else {
      setStreakDays(1);
    }
  }, []);

  useEffect(() => {
    const today = todayKey();
    localStorage.setItem(LS_STATS_KEY, JSON.stringify({
      lastActiveDate: today, streakDays, xp, level, hearts, goal, todayXp, lastXPDate: today, lockUntil
    }));
  }, [streakDays, xp, level, hearts, goal, todayXp, lockUntil]);

  useEffect(() => {
    const newLevel = Math.floor(xp / 250) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      setConfettiKey(k => k + 1);
    }
  }, [xp, level]);

  useEffect(() => {
    if (!deckId) {
        setQuestions([]);
        setQueue([]);
        setCurrent(null);
        return;
    };

    const raw = localStorage.getItem(LS_DECK_KEY(deckId));
    if (raw) {
      try {
        const d = JSON.parse(raw);
        if (d.questions) {
          const loadedQuestions = d.questions;
          setQuestions(loadedQuestions);
          
          const order = loadedQuestions.map((_: any, i: number) => i);
          const newQueue = shuffleOnLoad ? shuffle(order) : order;
          setQueue(newQueue);
          setCurrent(newQueue[0] ?? null);
          setSessionWrongAnswers([]); // Limpa os erros da sessão anterior
        }
      } catch {}
    }
  }, [deckId, shuffleOnLoad]);

  useEffect(() => {
    if (deckId) localStorage.setItem(LS_DECK_KEY(deckId), JSON.stringify({ questions, queue }));
  }, [deckId, questions, queue]);

  useEffect(() => {
    if (current != null) setQuestionStart(performance.now());
  }, [current]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const sessionDone = queue.length === 0 && questions.length > 0;
  useEffect(() => {
    if (sessionDone) {
      setConfettiKey(k => k + 1);
      setCelebrating(true);
      playFanfare();
      const t = setTimeout(() => setCelebrating(false), 3200);
      return () => clearTimeout(t);
    }
  }, [sessionDone, playFanfare]);

  const handleUpload = async (file: File) => {
    const text = await file.text();
    const { questions: qs, errors } = parseTxtDeck(text);
    setErrors(errors);
    if (qs.length === 0) return;
    const deckName = file.name.replace(/\.txt$/, "");
    const newDeckId = `${deckName}-${hashString(text)}`;
    localStorage.setItem(LS_DECK_KEY(newDeckId), JSON.stringify({ questions: qs }));
    const manifest = JSON.parse(localStorage.getItem("quizg-v1-deck-manifest") || "[]");
    if (!manifest.some((d: any) => d.id === newDeckId)) {
      const newManifest = [...manifest, { id: newDeckId, name: deckName }];
      localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(newManifest));
      setAvailableDecks(newManifest);
    }
    setDeckId(newDeckId);
  };

  const formatTimeLeft = (ms: number) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const buyLivesWithXp = (cost: number, amount: number) => {
    if (xp >= cost) {
      setXp(x => x - cost);
      setHearts(h => h + amount);
      setLockUntil(null);
    }
  };

  const computeGain = (elapsedMs: number, comboNow: number) => {
    const base = 8 + Math.floor(Math.random() * 13);
    const speed = elapsedMs < 3000 ? 10 : elapsedMs < 7000 ? 6 : elapsedMs < 12000 ? 3 : 0;
    const comboBonus = Math.min(15, comboNow * 3);
    return base + speed + comboBonus;
  };

  const onSelect = (idx: number) => {
    if (current == null || selected != null) return;
    const elapsed = questionStart ? performance.now() - questionStart : 0;
    setSelected(idx);
    const q = questions[current];
    const correct = idx === q.answerIndex;
    setIsCorrect(correct);

    if (correct) {
      const gain = computeGain(elapsed, combo);
      setLastGain(gain);
      setXp(x => x + gain);
      setTodayXp(t => t + gain);
      setCombo(c => c + 1);
      setEmojiKey(k => k + 1);
      playCorrect();
      setTimeout(() => advanceQueue(true), 650);
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);
      setCombo(0);
      setShowExpl(true);
      playWrong();
      
      // Adiciona à lista de erros da sessão
      setSessionWrongAnswers(prev => {
        if (prev.find(item => item.id === q.id)) {
          return prev;
        }
        return [...prev, q];
      });

      if (newHearts <= 0) {
        setLockUntil(Date.now() + 5 * 60 * 1000); // 5 minute lock
      }
      setTimeout(() => advanceQueue(false), 900);
    }
  };

  const advanceQueue = (wasCorrect: boolean) => {
    if (current === null) return;
    const newQueue = [...queue];
    const idxPos = newQueue.indexOf(current);
    if (idxPos > -1) {
      if (wasCorrect) newQueue.splice(idxPos, 1);
      else newQueue.push(newQueue.splice(idxPos, 1)[0]);
    }
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setQueue(newQueue);
    setCurrent(newQueue[0] ?? null);
  };

  const resetSession = () => {
    if (questions.length === 0) return;
    const order = questions.map((_, i) => i);
    const newQueue = shuffleOnLoad ? shuffle(order) : order;
    setQueue(newQueue);
    setCurrent(newQueue[0]);
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setCombo(0);
    setSessionWrongAnswers([]); // Limpa os erros da sessão
  };

  const downloadTemplate = () => {
    const blob = new Blob([TEMPLATE_TXT.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "modelo_perguntas.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const progressPct = questions.length > 0 ? Math.round(((questions.length - queue.length) / questions.length) * 100) : 0;
  const goalPct = Math.min(100, Math.round((todayXp / goal) * 100));
  const currentQ = current != null ? questions[current] : null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <ReviewModal question={reviewingQuestion} onClose={() => setReviewingQuestion(null)} />
      <Confetti trigger={confettiKey} />
      <EmojiBurst trigger={emojiKey} />
      <CelebrationOverlay show={celebrating} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="h-6 w-6" /> Quiz Gamificado
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Importe um .txt com suas questões. Se errar, a questão volta para o fim.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-end">
            <div className="flex items-center gap-2"><Flame className="h-5 w-5 text-orange-500" /><span className="font-semibold">{streakDays} dias</span><Badge variant="secondary">streak</Badge></div>
            <div className="flex items-center gap-2"><Star className="h-5 w-5" /><span className="font-semibold">Lv {level}</span><Badge variant="secondary">{xp} XP</Badge></div>
            <div className="flex items-center gap-2"><Heart className="h-5 w-5 text-rose-500" /><span className="font-semibold">{hearts}</span></div>
            <div className="flex items-center gap-2"><Switch checked={dark} onCheckedChange={setDark} /><span className="text-sm">Tema</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-1 space-y-6">
            <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5" />Carregar perguntas</CardTitle>
                <CardDescription>Arquivos .txt no modelo indicado.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input ref={fileInputRef} type="file" accept=".txt" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
                <Button className="w-full" onClick={() => fileInputRef.current?.click()}><Upload className="mr-2 h-4 w-4" />Selecionar Arquivo .txt</Button>
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

            {availableDecks.length > 0 && (
              <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
                <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />Decks Salvos</CardTitle></CardHeader>
                <CardContent className="space-y-2">
                  {availableDecks.map((deck) => (
                    <Button key={deck.id} variant={deckId === deck.id ? "default" : "outline"} className="w-full justify-start" onClick={() => setDeckId(deck.id)}>{deck.name}</Button>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
              <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Meta diária</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm"><span>{todayXp} / {goal} XP hoje</span><Badge variant={goalPct === 100 ? "default" : "secondary"}>{goalPct}%</Badge></div>
                <Progress value={goalPct} />
                <div className="flex items-center justify-between gap-2"><div className="text-sm text-slate-600 dark:text-slate-300">Combo: <span className="font-semibold">{combo}</span></div><Button size="sm" variant="outline" onClick={() => setGoal(g => g + 50)}>+50 meta</Button></div>
              </CardContent>
            </Card>

             <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
              <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5"/>Deck</CardTitle><CardDescription>Progresso e ações.</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm"><span>{questions.length - queue.length} / {questions.length}</span><Badge variant="secondary">{progressPct}%</Badge></div>
                <Progress value={progressPct} />
                {lockUntil && lockUntil > Date.now() ? (
                    <div className="rounded-md p-3 bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-sm">
                        <div className="font-semibold text-rose-600 dark:text-rose-200">Você ficou sem vidas</div>
                        <div className="mt-1">Tempo restante: <span className="font-mono">{formatTimeLeft(lockUntil - Date.now())}</span></div>
                        <div className="mt-3"><Button size="sm" className="w-full" variant="secondary" onClick={() => buyLivesWithXp(100, 10)}>Comprar +10 vidas (100 XP)</Button></div>
                    </div>
                ) : (
                    <div className="flex gap-2 flex-wrap">
                        <Button variant="outline" size="sm" onClick={resetSession} disabled={questions.length === 0}><RefreshCw className="mr-2 h-4 w-4" />Recomeçar</Button>
                        <Button variant="ghost" size="sm" onClick={() => { setQuestions([]); setQueue([]); setCurrent(null); setDeckId(null); }}>Limpar</Button>
                    </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white/80 to-white/30 dark:from-slate-900/70 dark:to-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none" aria-hidden>
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-400 blur-3xl mix-blend-multiply dark:bg-fuchsia-700" />
                <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-sky-300 blur-3xl mix-blend-multiply dark:bg-sky-700" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{sessionDone ? "Parabéns!" : currentQ ? (currentQ.tag || "Questão") : "Carregue um deck"}</CardTitle>
                    <CardDescription>{sessionDone ? "Você finalizou o deck." : currentQ ? "Selecione a alternativa correta." : "Use o painel ao lado."}</CardDescription>
                  </div>
                  <Badge variant="secondary">{questions.length > 0 ? `${questions.length - queue.length}/${questions.length}` : "0/0"}</Badge>
                </div>
              </CardHeader>
              <CardContent className="min-h-[400px]">
                {currentQ && !sessionDone && (
                  <AnimatePresence mode="wait">
                    <motion.div key={currentQ.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="space-y-5">
                      <div className="text-lg md:text-xl font-semibold leading-snug">{currentQ.text}</div>
                      <div className="grid gap-3">
                        {currentQ.options.map((opt, i) => {
                          const isSel = selected === i;
                          const correct = isCorrect != null && i === currentQ.answerIndex;
                          const wrong = isSel && !isCorrect;
                          return (
                            <motion.button key={i} onClick={() => onSelect(i)} disabled={selected != null || (lockUntil != null && lockUntil > Date.now())} whileTap={{ scale: 0.98 }}
                              className={`text-left rounded-2xl p-4 border transition-all bg-white/70 dark:bg-slate-900/60 
                                ${correct ? "border-emerald-500/70 ring-2 ring-emerald-500/30" : 
                                  (isSel && wrong) ? "border-rose-500/70 ring-2 ring-rose-500/30" : 
                                  "border-slate-200/60 dark:border-slate-700/60 hover:bg-white hover:dark:bg-slate-900/80"
                                }`}
                            >
                              <div className="flex items-start gap-3">
                                <Badge className="mt-0.5" variant="secondary">{String.fromCharCode(65 + i)}</Badge>
                                <div className="flex-1 font-medium">{opt}</div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                      {selected != null && (
                        <div className={`flex items-center gap-2 text-sm ${isCorrect ? "text-emerald-600 dark:text-emerald-300" : "text-rose-600 dark:text-rose-300"}`}>
                          {isCorrect ? <><CheckCircle2 className="h-5 w-5" />Correto! {lastGain != null ? `+${lastGain} XP` : ""}</> : <><XCircle className="h-5 w-5" />Incorreto. A questão voltará depois.</>}
                        </div>
                      )}
                      {showExpl && currentQ.explanation && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border p-3 text-sm bg-emerald-50/60 dark:bg-emerald-900/20 border-emerald-300/50 dark:border-emerald-700/40">
                          <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4" />Explicação</div>
                          <div className="text-slate-700 dark:text-slate-200">{currentQ.explanation}</div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
                {sessionDone && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="text-2xl font-bold flex items-center gap-2"><Trophy className="h-6 w-6 text-amber-500" />Conjunto concluído!</div>
                    <div className="text-slate-600 dark:text-slate-300">Continue para manter sua streak e acumular XP.</div>
                    <div className="flex gap-3 mt-4">
                      <Button onClick={resetSession}><RefreshCw className="mr-2 h-4 w-4" />Repetir</Button>
                      <Button variant="secondary" onClick={() => fileInputRef.current?.click()}><Upload className="mr-2 h-4 w-4" />Novo deck</Button>
                    </div>

                    {sessionWrongAnswers.length > 0 && (
                      <div className="pt-6">
                        <h3 className="text-xl font-semibold mt-4 mb-3">Questões para revisar</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                          {sessionWrongAnswers.map((q, i) => (
                            <Button
                              key={q.id + i}
                              variant="outline"
                              className="w-full justify-start text-left h-auto"
                              onClick={() => setReviewingQuestion(q)}
                            >
                              <p className="truncate whitespace-normal">{q.text}</p>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
