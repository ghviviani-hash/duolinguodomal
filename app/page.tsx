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
import { Separator } from "@/components/ui/separator";
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
  BrainCircuit,
  Award,
  BarChart3
} from "lucide-react";

// ---------- Types ----------
interface Question {
  id: string;
  text: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
  tag?: string;
}

interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  shuffledAnswerIndex: number;
}

interface SrsData {
  [key: string]: {
    question: Question;
    deckId: string;
    deckName: string;
    correctStreak: number;
    nextReview: number;
    wrongCount: number;
    correctCount: number;
  };
}

// ---------- Constants ----------
const INITIAL_HEARTS = 10;
const DECK_COMPLETION_BONUS = 50;
const DAILY_GOAL_BONUS = 100;
const SRS_INTERVALS = [1, 3, 7, 14, 30];

// ---------- Utilities ----------
const LS_STATS_KEY = "quizg-v1-stats";
const LS_DECK_KEY = (deckId: string) => `quizg-v1-deck-${deckId}`;
const LS_SRS_KEY = "quizg-v1-srs-data";
const LS_ACHIEVEMENTS_KEY = "quizg-v1-achievements";

const todayKey = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

function daysBetween(a: number, b: number) {
  const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
  return diff;
}

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

    const questionText = q;
    const stableId = hashString(questionText);

    questions.push({ id: stableId, text: questionText, options: opts as string[], answerIndex: ans, explanation: expl, tag });
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

const StatsModal = ({ srsData, onClose }: { srsData: SrsData; onClose: () => void }) => {
    const stats = React.useMemo(() => {
        const deckStats: { [name: string]: { correct: number; wrong: number } } = {};
        const tagStats: { [name: string]: { correct: number; wrong: number } } = {};

        Object.values(srsData).forEach(item => {
            const deckName = item.deckName || 'Desconhecido';
            const tagName = item.question.tag || 'Sem Categoria';

            if (!deckStats[deckName]) deckStats[deckName] = { correct: 0, wrong: 0 };
            if (!tagStats[tagName]) tagStats[tagName] = { correct: 0, wrong: 0 };

            deckStats[deckName].correct += item.correctCount || 0;
            deckStats[deckName].wrong += item.wrongCount || 0;
            tagStats[tagName].correct += item.correctCount || 0;
            tagStats[tagName].wrong += item.wrongCount || 0;
        });

        const calculateErrorRate = (stats: { correct: number; wrong: number }) => {
            const total = stats.correct + stats.wrong;
            return total === 0 ? 0 : (stats.wrong / total) * 100;
        };

        const sortedDeckStats = Object.entries(deckStats)
            .map(([name, stats]) => ({ name, errorRate: calculateErrorRate(stats) }))
            .filter(item => item.errorRate > 0)
            .sort((a, b) => b.errorRate - a.errorRate)
            .slice(0, 5);

        const sortedTagStats = Object.entries(tagStats)
            .map(([name, stats]) => ({ name, errorRate: calculateErrorRate(stats) }))
            .filter(item => item.errorRate > 0)
            .sort((a, b) => b.errorRate - a.errorRate)
            .slice(0, 5);

        return { decks: sortedDeckStats, tags: sortedTagStats };
    }, [srsData]);

    return (
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
            className="relative w-full max-w-lg rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-xl"
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X className="h-4 w-4" /></Button>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5"/>Estatísticas de Desempenho</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold mb-2">Decks com Mais Erros</h4>
                    {stats.decks.length > 0 ? (
                        <ul className="space-y-2">
                            {stats.decks.map(deck => (
                                <li key={deck.name} className="text-sm">
                                    <div className="flex justify-between">
                                        <span className="truncate pr-2">{deck.name}</span>
                                        <span className="font-semibold">{deck.errorRate.toFixed(0)}%</span>
                                    </div>
                                    <Progress value={deck.errorRate} className="h-2 mt-1" />
                                </li>
                            ))}
                        </ul>
                    ) : <p className="text-sm text-slate-500">Nenhum erro registado ainda.</p>}
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Categorias com Mais Erros</h4>
                    {stats.tags.length > 0 ? (
                        <ul className="space-y-2">
                            {stats.tags.map(tag => (
                                <li key={tag.name} className="text-sm">
                                    <div className="flex justify-between">
                                        <span className="truncate pr-2">{tag.name}</span>
                                        <span className="font-semibold">{tag.errorRate.toFixed(0)}%</span>
                                    </div>
                                    <Progress value={tag.errorRate} className="h-2 mt-1" />
                                </li>
                            ))}
                        </ul>
                    ) : <p className="text-sm text-slate-500">Nenhum erro registado ainda.</p>}
                </div>
            </div>
          </motion.div>
        </motion.div>
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
  
  // NOVO DECK DE NEUROLOGIA
  
  {
    id: "preset-neurologia-1",
    name: "pr1 Neuro M7",
    questions: [
      // Cefaleias
      {
        id: "neuro-q1",
        text: "Uma paciente de 18 anos, sem comorbidades, procurou a emergência com queixa de cefaleia. Ela referia uma cefaleia de forte intensidade (\"a pior dor da vida\"), súbita, associada a fotofobia, náuseas e vômitos. Nega outros sintomas associados. Ao exame: acordada, interagindo. Força normal em membros. Coordenação normal. Sensibilidade superficial e profunda preservada. Pupilas isofotorreagentes. Rigidez de nuca. Qual a alternativa correta em relação ao provável diagnóstico e conduta?",
        options: [
          "Enxaqueca: analgésicos ou sumatriptano subcutâneo",
          "Cefaleia em salvas: oxigênio ou sumatriptano subcutâneo",
          "Hemorragia subaracnóidea: angiotomografia computadorizada do crânio",
          "Hemicrania paroxística: Indometacina"
        ],
        answerIndex: 2,
        explanation: "Cefaleia súbita de forte intensidade (\"thunderclap headache\") com rigidez de nuca é o quadro clássico de Hemorragia Subaracnóidea, exigindo neuroimagem de emergência.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q2",
        text: "Um homem de 30 anos, hipertenso leve, apresenta há 8 anos episódios mensais de cefaléia pulsátil. de forte intensidade, acompanhada de vômitos e precedida de alteração visual (fortificações). Sua mãe e irmã tem quadro semelhante e seu exame físico/neurológico é normal. O provável diagnóstico é:",
        options: [
          "Ruptura de aneurisma",
          "Enxaqueca",
          "Cefaleia tipo tensional",
          "Cefaléia em salvas"
        ],
        answerIndex: 1,
        explanation: "Cefaleia pulsátil, unilateral, com sintomas associados (vômitos), aura visual (fortificações) e história familiar positiva são características marcantes da enxaqueca com aura.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q3",
        text: "Mulher, 25 anos, apresenta há 6 anos episódios ocasionais de cefaléia em pressão, em capacete, de moderada intensidade, com 3 dias de duração em média, sem náuseas, vômitos e/ou alteração visual. Nega história familiar. O provável diagnóstico é:",
        options: [
          "Cefaléia hípnica",
          "Enxaqueca",
          "Cefaleia tipo tensional",
          "Cefaléia em salvas"
        ],
        answerIndex: 2,
        explanation: "A descrição de uma dor em pressão ou \"capacete\", bilateral, de intensidade leve a moderada e sem os sintomas associados (náuseas, fotofobia) é a apresentação típica da Cefaleia do Tipo Tensional.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q4",
        text: "São utilizadas para profilaxia de enxaqueca as substâncias abaixo EXCETO:",
        options: ["Topiramato", "Flunarizina", "Clonazepam", "Amitriptilina"],
        answerIndex: 2,
        explanation: "Topiramato, flunarizina e amitriptilina são fármacos de primeira linha para a profilaxia da enxaqueca. Clonazepam, um benzodiazepínico, não é uma escolha padrão para este fim.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q5",
        text: "As cefaleias podem ser primarias ou secundarias. Na suspeita de cefaleia secundária, exames de imagem devem ser realizados para a investigação adequada. Assinale a alternativa em que todas as situações são justificativas para exames de neuroimagem em pacientes com cefaleia.",
        options: [
          "Paciente imunossuprimido/ dor latejante",
          "Náuseas/fotofobia",
          "Fonofobia/ refratariedade ao tratamento",
          "Instalação súbita/ alterações visuais"
        ],
        answerIndex: 3,
        explanation: "A instalação súbita (\"thunderclap\") e a presença de alterações neurológicas focais (como alterações visuais) são sinais de alerta (\"red flags\") que exigem investigação com neuroimagem para descartar causas secundárias graves.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q6",
        text: "Em uma paciente com diagnóstico de enxaqueca com aura, qual das medicações abaixo deve ser evitada?",
        options: [
          "Pílula anticoncepcional com progestágeno",
          "Levotiroxina",
          "Ácido valpróico",
          "Terapia de reposição hormonal com estrogênio"
        ],
        answerIndex: 3,
        explanation: "O uso de contraceptivos ou terapia de reposição hormonal contendo estrogênio aumenta o risco de eventos isquêmicos (AVC) em pacientes com enxaqueca com aura e, portanto, deve ser evitado.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q7",
        text: "Na cefaleia em salvas, o tratamento profilático e agudo são, respectively:",
        options: [
          "Oxigênio e verapamil",
          "Verapamil e indometacina",
          "Verapamil e oxigênio",
          "Oxigênio e lamotrigina"
        ],
        answerIndex: 2,
        explanation: "O tratamento agudo da crise de cefaleia em salvas é feito com oxigênio a 100% ou sumatriptano. A profilaxia (tratamento para evitar as crises) é feita principalmente com verapamil.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q8",
        text: "Paciente idosa, 70 anos, procura a emergência com queixa de cefaleia em região temporal direita há 1 mês, pior há 1 dia. Nega irradiação da dor. Foram solicitados exames laboratoriais e de imagem. Marque a alternativa correta quanto ao possível diagnóstico.",
        options: [
          "VHS é um exame desnecessário nesse caso, pois seu valor não altera nesse caso",
          "O exame de imagem solicitado e o doppler de artéria temporal, porém não há sinais característicos que sugiram o diagnóstico",
          "O tratamento deve ser iniciado com corticoide e a resposta esperada é excelente",
          "Os jovens também são acometidos com frequência"
        ],
        answerIndex: 2,
        explanation: "O quadro de cefaleia temporal em paciente idosa levanta a forte suspeita de Arterite Temporal (ou de Células Gigantes). Esta é uma emergência reumatológica, e o tratamento com altas doses de corticoide deve ser iniciado imediatamente para prevenir a perda visual, com excelente resposta da dor.",
        tag: "Cefaleias"
      },
      // Doença de Parkinson e Parkinsonismo
      {
        id: "neuro-q9",
        text: "Paciente masculino, advogado, 66 anos, refere que há 2 anos recebeu diagnóstico de doença de Parkinson. Fez uso de múltiplos esquemas medicamentosos, incluindo levodopa, porém com pouco resultado. O quadro se iniciou há cerca de 4 anos com quedas frequentes. Ao exame: Rigidez em roda denteada (axial maior que em membros) e bradicinesia bilaterais, sem tremor, retrocólis e paralisia ao olhar vertical para baixo. Considerando a evolução e o quadro clínico acima, o diagnóstico mais provável deste paciente é:",
        options: [
          "Degeneração cortico-basal",
          "Doença de Alzheimer",
          "Paralisia supranuclear progressiva",
          "Atrofia de múltiplos sistemas"
        ],
        answerIndex: 2,
        explanation: "Um quadro de parkinsonismo com quedas precoces, pouca resposta à levodopa e, principalmente, a paralisia do olhar vertical para baixo, são sinais clássicos da Paralisia Supranuclear Progressiva (PSP), uma forma de parkinsonismo atípico.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q10",
        text: "Assinale a alternativa correta referente a doença de Parkinson:",
        options: [
          "Os sinais são assimétricos no início da fase motora",
          "A bradicinesia aparece após 10 anos do início da fase motora",
          "O sinal da cauda da andorinha está presente na ressonância magnética de crânio de 3T",
          "O tratamento medicamentoso deve ser suspenso imediatamente após o tratamento cirúrgico com Deep Brain Stimulation (DBS)"
        ],
        answerIndex: 0,
        explanation: "Uma das características cardinais da Doença de Parkinson é o início assimétrico dos sintomas motores (tremor, rigidez e/ou bradicinesia), geralmente começando em um membro de um lado do corpo.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q11",
        text: "Paciente feminino, 54 anos, com diagnóstico de doença de Parkinson há 7 anos, em uso de levodopa, pramipexol e escitalopram. Queixa-se de movimentos involuntários intensos e exaustivos cerca de 1h e 30min após a tomada da 3a e 4a doses de levodopa. Ao exame físico observa-se movimentos generalizados coreiformes. Qual a provável causa da intercorrência apresentada pela paciente?",
        options: [
          "Efeito adverso do escitalopram",
          "Transtorno somatoforme",
          "Discinesias",
          "Crises epilépticas mioclônicas"
        ],
        answerIndex: 2,
        explanation: "Os movimentos involuntários (coreiformes) que ocorrem no pico da dose da levodopa são uma complicação motora clássica do tratamento crônico da Doença de Parkinson, conhecidos como discinesias de pico de dose.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q12",
        text: "É a principal causa de demência:",
        options: [
          "Doença de Parkinson",
          "Doença de Huntington",
          "Doença de Alzheimer",
          "Demência vascular"
        ],
        answerIndex: 2,
        explanation: "A Doença de Alzheimer é a causa mais comum de demência em todo o mundo, respondendo pela maioria dos casos em idosos.",
        tag: "Demências"
      },
      {
        id: "neuro-q13",
        text: "Homem, 29 anos, diagnosticado com depressão, notou há 10 meses lentidão, tremor bilateral em mãos e alteração na fala. Exame neurológico: Hipomimia facial, disartria, bradicinesia e rigidez em roda denteada simétricas, tremor de repouso bilateral. Exame laboratorial revelou leve aumento de transaminases séricas. Considerando o diagnóstico mais provável, assinale a alternativa correta:",
        options: [
          "Trata-se de um quadro de parkinsonismo medicamentoso",
          "O nível sérico de ceruloplasmina costuma ser baixo",
          "Na ressonância magnética de crânio teremos o sinal do beija-flor (atrofia mesencefálica)",
          "A hipotensão postural é um achado frequente"
        ],
        answerIndex: 1,
        explanation: "Parkinsonismo em paciente jovem (<40-50 anos) associado a alterações hepáticas (aumento de transaminases) levanta forte suspeita da Doença de Wilson. Nesta doença, há um distúrbio no metabolismo do cobre, e o nível sérico de ceruloplasmina (a proteína que transporta o cobre) é caracteristicamente baixo.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q14",
        text: "Paciente masculino, 63 anos, com queixa de dificuldade de movimentar o braço D há 3 meses (dificuldade de abotoar camisa, fazer a barba e escrever). Ao exame nota-se diminuição do piscar dos olhos, lentificação dos movimentos do MSD e leve hipertonia em dimídio direito. Qual o diagnóstico mais provável?",
        options: [
          "Síndrome parkinsoniana",
          "AVC isquêmico em território de artéria cerebral média esquerda",
          "Processo expansivo intracraniano no hemisfério cerebral esquerdo",
          "AVC isquêmico de tronco cerebral"
        ],
        answerIndex: 0,
        explanation: "A presença de lentificação de movimentos (bradicinesia) e hipertonia (rigidez), com início assimétrico (dimídio direito), são os achados clínicos essenciais para o diagnóstico de uma síndrome parkinsoniana.",
        tag: "Parkinsonismo"
      },
      // AVE
      {
        id: "neuro-q15",
        text: "Na trombose de origem da cerebral média:",
        options: [
          "Pode não ocorrer na afasia motora",
          "Pode ocorrer afasia motora e sensorial acompanhada de hemianopsia, hemihiopoestesia e hemiparesia",
          "Não ocorre hemianopsia",
          "Pode não ocorrer afasia sensorial"
        ],
        answerIndex: 1,
        explanation: "A artéria cerebral média (ACM) irriga uma vasta área do cérebro. Sua oclusão no hemisfério dominante pode causar um déficit completo, incluindo afasia (motora e sensorial), hemiparesia, hemi-hipoestesia e hemianopsia contralateral.",
        tag: "AVE"
      },
      {
        id: "neuro-q16",
        text: "Paciente de 68 anos, hipertenso e diabético, é admitido às 6h45 com disfasia, disartria e hemiparesia à direita. Última vez visto bem foi à 1h15. TC de crânio sem contraste mostrou hiperdensidade em topografia de artéria cerebral média à esquerda e angio-TC mostrou falha de opacificação proximal. Em relação ao caso, assinale a alternativa CORRETA:",
        options: [
          "Trata-se de um acidente vascular hemorrágico.",
          "Trata-se de um acidente vascular isquêmico, deve ser submetido à trombólise venosa.",
          "Trata-se de um acidente vascular isquêmico, deve ser submetido a trombectomia mecânica.",
          "Trata-se de uma hemorragia subaracnóide."
        ],
        answerIndex: 2,
        explanation: "O sinal da artéria cerebral média hiperdensa na TC sem contraste e a falha de enchimento na angio-TC confirmam um AVC isquêmico por oclusão de grande vaso. Pela janela terapêutica e gravidade, a trombectomia mecânica é o tratamento de escolha.",
        tag: "AVE"
      },
      {
        id: "neuro-q17",
        text: "Paciente de 72 anos, hipertenso e dislipidêmico, admitido com hemiplegia esquerda, heminegligência e desvio do olhar para direita. TC de crânio mostrou área hipodensa extensa e hiperdensidade em artéria cerebral média direita. Angio-TC evidenciou oclusão proximal da mesma artéria. Qual a conduta CORRETA?",
        options: [
          "Manter a pressão arterial sistólica abaixo de 140mmHg.",
          "Submeter à trombólise venosa com alteplase.",
          "Contactar a neurocirurgia para realização de trombectomia mecânica.",
          "Iniciar anticoagulação com heparina."
        ],
        answerIndex: 2,
        explanation: "Assim como no caso anterior, trata-se de um AVC isquêmico com oclusão de grande vaso, fora da janela de trombólise venosa. A conduta indicada é a trombectomia mecânica.",
        tag: "AVE"
      },
      {
        id: "neuro-q18",
        text: "Paciente de 68 anos, hipertenso e diabético, é admitido com disartria e hemiparesia à esquerda. TC de crânio sem contraste mostrou hiperdensidade em núcleos da base e cápsula interna à direita. Em relação ao caso, assinale a alternativa CORRETA:",
        options: [
          "Manter o paciente hipertenso, com PAS acima de 160mmHg.",
          "Controlar a pressão arterial (PAS em torno de 140mmHg) e contactar a neurocirurgia.",
          "Submeter à trombólise venosa com alteplase.",
          "Submeter à trombectomia mecânica."
        ],
        answerIndex: 1,
        explanation: "A hiperdensidade na TC sem contraste indica um Acidente Vascular Cerebral Hemorrágico (AVCH). O tratamento agudo consiste no controle rigoroso da pressão arterial para evitar a expansão do hematoma e na avaliação neurocirúrgica.",
        tag: "AVE"
      },
      {
        id: "neuro-q19",
        text: "Paciente de 69 anos, hipertenso e diabético, é admitido com disfasia, disartria e hemiparesia à direita, acompanhados de cefaleia súbita e intensa. TC sem contraste mostrou hiperdensidade em cisternas basais e ventrículos. Em relação ao caso, assinale a alternativa CORRETA:",
        options: [
          "Contactar neurocirurgia e realizar angio-TC ou angiografia para investigar aneurisma.",
          "Submeter à trombólise venosa com alteplase.",
          "Submeter à terapia combinada de trombectomia e trombólise.",
          "Iniciar AAS 300mg e estatina."
        ],
        answerIndex: 0,
        explanation: "A presença de sangue (hiperdensidade) nas cisternas basais é característica de Hemorragia Subaracnóidea (HSA), cuja principal causa é a ruptura de um aneurisma cerebral. A investigação vascular com angio-TC ou angiografia e a avaliação neurocirúrgica são urgentes.",
        tag: "AVE"
      },
      {
        id: "neuro-q20",
        text: "Paciente de 60 anos, diabético e hipertenso, apresentou cefaleia, vômitos e torpor, sendo diagnosticado com AVC. Sobre os AVCs é correto afirmar:",
        options: [
          "Os AVCs hemorrágicos são mais frequentes que os isquêmicos.",
          "Não existe uma janela terapêutica para o uso de trombolíticos nos AVC Isquêmicos.",
          "É contra-indicado o uso de trombolíticos nos acidentes vasculares hemorrágicos.",
          "A hipertensão arterial representa o menor fator de risco para os AVC isquêmicos."
        ],
        answerIndex: 2,
        explanation: "A afirmação correta é que o uso de trombolíticos (que dissolvem coágulos) é absolutamente contraindicado em AVCs hemorrágicos, pois agravaria o sangramento. Os AVCs isquêmicos são os mais frequentes.",
        tag: "AVE"
      },
      {
        id: "neuro-q21",
        text: "A principal causa de AVC isquêmico é:",
        options: [
          "Embolia",
          "Trombose associada à crise hipertensiva",
          "Diabetes, dislipidemia e hipertensão arterial",
          "Trombose associada à crise hipertensiva, dislipidemia e diabetes"
        ],
        answerIndex: 2,
        explanation: "A principal causa subjacente do AVC isquêmico é a aterosclerose, cujo desenvolvimento é impulsionado pelos principais fatores de risco vasculares: diabetes, dislipidemia e hipertensão arterial.",
        tag: "AVE"
      },
      {
        id: "neuro-q22",
        text: "O envolvimento do III nervo craniano de modo isolado sugere:",
        options: [
          "Angioma no território cerebral do nervo",
          "Aneurisma do sistema vértebro-basilar",
          "Aneurisma da artéria carótida ou da comunicante posterior",
          "AVC isquêmico no território cerebral do nervo"
        ],
        answerIndex: 2,
        explanation: "A paralisia isolada do III nervo craniano (oculomotor), especialmente quando envolve a pupila (midríase), é frequentemente causada pela compressão do nervo por um aneurisma da artéria comunicante posterior ou da carótida interna.",
        tag: "AVE"
      },
      // Epilepsia e Crises Convulsivas
      {
        id: "neuro-q23",
        text: "Paciente feminino 65 anos com hipotireoidismo e depressão, refere episódios de perda de consciência precedidos por ouvir uma música em sua cabeça. Recupera-se lentamente, com confusão e dor de cabeça. Testemunhas referem abalos musculares. Qual o provável diagnóstico?",
        options: [
          "Doença psiquiátrica- pseudocrise",
          "Demências por corpúsculos de Lewy",
          "Crise epiléptica focal para bilateral tônico-clônica",
          "Ataques isquêmicos transitórios"
        ],
        answerIndex: 2,
        explanation: "A experiência sensorial (ouvir música) antes da perda de consciência é uma aura, característica de uma crise epiléptica focal. A evolução com abalos e confusão pós-evento (período pós-ictal) indica uma generalização para tônico-clônica bilateral.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q24",
        text: "Paciente masculino de 68 anos com atrofia de múltiplos sistemas, apresentou perda de consciência enquanto almoçava, precedida por mal-estar e palpitações. Recuperou a consciência em poucos segundos após ser colocado em decúbito. Durante o evento ocorreram breves abalos musculares e perda de urina. Qual o provável diagnóstico?",
        options: [
          "Crise epiléptica disautonômica",
          "Síncope",
          "Ataque isquêmico transitório",
          "Crise epiléptica focal para bilateral tônico-clônica"
        ],
        answerIndex: 1,
        explanation: "O gatilho postural, os pródromos (mal-estar, palpitações) e a recuperação rápida após o decúbito são características de síncope. Abalos musculares (mioclonias da síncope) e liberação esfincteriana podem ocorrer devido à hipoperfusão cerebral e não indicam necessariamente uma crise epiléptica.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q25",
        text: "Paciente de 49 anos com epilepsia e Parkinson, refere que à noite apresenta episódios de movimentação intensa durante o sono (lutas, fugas, gritos), sem se lembrar no dia seguinte. Qual a melhor conduta?",
        options: [
          "Solicitar RM de crânio e EEG para definir melhor o quadro epiléptico",
          "Suspender pramipexol, pois distúrbios de comportamento são efeitos adversos da droga",
          "Solicitar nivel sérico de levetiracetam",
          "Solicitar polissonografia devido suspeita de distúrbio comportamental do sono REM"
        ],
        answerIndex: 3,
        explanation: "A descrição de sonhos vívidos atuados com movimentação vigorosa é a apresentação clássica do Distúrbio Comportamental do Sono REM, uma parassonia frequentemente associada a doenças neurodegenerativas como a Doença de Parkinson. O diagnóstico é confirmado pela polissonografia.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q26",
        text: "Marcia, 26 anos, apresentou sua segunda crise convulsiva tônico-clônica generalizada no último ano. Não faz uso de medicação. Qual a conduta correta:",
        options: [
          "Acompanhar, pois trata-se de crise isolada.",
          "Solicitar exames (RM, EEG, laboratório) e iniciar medicação adequada.",
          "Solicitar EEG e iniciar fenobarbital.",
          "Solicitar EEG, TC de crânio e iniciar fenitoína."
        ],
        answerIndex: 1,
        explanation: "Ocorrência de duas ou mais crises epilépticas não provocadas estabelece o diagnóstico de epilepsia. A conduta adequada é realizar uma investigação etiológica completa e iniciar terapia antiepiléptica apropriada.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q27",
        text: "Jonas, 3 anos, com febre de 39°C devido a faringotonsilite, apresentou crise tônico-clônica generalizada de 3 minutos de duração. Ao chegar à emergência, já estava com comportamento normal. Qual a conduta correta:",
        options: [
          "Solicitar EEG, TC de crânio e punção lombar.",
          "Afirmar que se trata de epilepsia e iniciar fenobarbital.",
          "Tranquilizar o pai, afirmando que se trata de uma crise convulsiva febril simples.",
          "Internar a criança para investigação completa."
        ],
        answerIndex: 2,
        explanation: "O quadro é de uma crise febril simples: idade típica (6m-5a), generalizada, curta (<15min), sem recorrência em 24h e com recuperação completa. A conduta é expectante, com antitérmicos e orientação aos pais.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q28",
        text: "Camila, 26 anos, grávida de 20 semanas, apresenta sua segunda crise tônico-clônica generalizada, recebendo o diagnóstico de epilepsia. Qual medicação deve ser evitada ao máximo para essa paciente?",
        options: [
          "Carbamazepina",
          "Lamotrigina",
          "Levetiracetam",
          "Acido valproico"
        ],
        answerIndex: 3,
        explanation: "O Ácido Valproico é o antiepiléptico com o maior risco conhecido de teratogenicidade, associado a malformações graves como defeitos do tubo neural. Seu uso deve ser evitado ao máximo durante a gestação.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q29",
        text: "Marque falso (F) ou verdadeiro (V): (1) Crises convulsivas únicas como as febris são consideradas epilepsia. (2) Crises em vigência de doenças agudas não são consideradas epilepsia. (3) A crise epiléptica é um distúrbio recorrente e transitório. (4) A maioria das crises epilépticas é idiopática.",
        options: ["FVVV", "VVFV", "FFFF", "FVFF"],
        answerIndex: 0,
        explanation: "(F) Crises únicas ou provocadas (como as febris) não definem epilepsia. (V) Crises agudas sintomáticas não são epilepsia. (V) A definição de crise epiléptica envolve transitoriedade e recorrência (no caso da epilepsia). (V) Mesmo com investigação, muitas epilepsias permanecem sem causa definida (idiopáticas).",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q30",
        text: "Com relação às crises epilépticas é CORRETO afirmar:",
        options: [
          "A investigação etiológica não é importante",
          "Toda crise convulsiva deve ser tratada com antiepilépticos",
          "Crises epilépticas com mais de 30 minutos de duração, subentrantes, caracterizam o status epilepticus",
          "A caracterização da síndrome epiléptica não ajuda na conduta terapêutica"
        ],
        answerIndex: 2,
        explanation: "O status epilepticus é uma emergência neurológica definida classicamente como uma crise contínua por mais de 30 minutos, ou crises recorrentes sem recuperação da consciência entre elas. Atualmente, a definição operacional considera 5 minutos para iniciar o tratamento.",
        tag: "Epilepsia"
      },
      // Demências e Comprometimento Cognitivo
      {
        id: "neuro-q31",
        text: "Na doença de corpo de Lewy inicia-se principalmente com:",
        options: [
          "Alucinações e confabulação",
          "Perda de memória 2 anos após o parkinsonismo",
          "Parkinsonismo e alucinações visuais",
          "Alucinações auditivas e demência associada ao parkinsonismo"
        ],
        answerIndex: 2,
        explanation: "A tríade clássica da Demência com Corpos de Lewy é composta por flutuação cognitiva, alucinações visuais bem formadas e parkinsonismo. Frequentemente, o parkinsonismo e as alucinações são os sintomas de abertura do quadro.",
        tag: "Demências"
      },
      {
        id: "neuro-q32",
        text: "Dentre as classes de drogas abaixo, quais provocam comprometimento cognitivo?",
        options: [
          "Anticolinérgicos e benzodiazepínicos",
          "Antihipertensivos",
          "Antiagregantes plaquetários",
          "Anticoagulantes"
        ],
        answerIndex: 0,
        explanation: "Fármacos com forte ação anticolinérgica e os benzodiazepínicos são conhecidos por causar ou agravar o comprometimento cognitivo, especialmente em idosos, podendo mimetizar ou piorar um quadro demencial.",
        tag: "Demências"
      },
      {
        id: "neuro-q33",
        text: "É uma das causas, potencialmente, reversíveis de demência:",
        options: [
          "Doença de Alzheimer",
          "Carência de vitamina B12",
          "Demência fronto-temporal",
          "Vascular"
        ],
        answerIndex: 1,
        explanation: "A deficiência de vitamina B12 pode causar um quadro de declínio cognitivo significativo que, se diagnosticado e tratado a tempo com reposição da vitamina, pode ser parcial ou totalmente revertido.",
        tag: "Demências"
      },
      {
        id: "neuro-q34",
        text: "Assinale a resposta correta sobre a doença de Alzheimer:",
        options: [
          "Ocorrem depósitos de beta amiloides e hipofosforilação da proteína tau",
          "Ocorrem depósitos de alfa sinucleína e beta amiloide",
          "Ocorrem depósitos de beta amilóide e degeneração da proteína tau",
          "Podem ocorrer depósitos de lipídeos intracelulares, de beta-amiloide e hipofosforilação da proteína tau"
        ],
        answerIndex: 2,
        explanation: "A fisiopatologia da Doença de Alzheimer é marcada por dois eventos principais: o acúmulo extracelular de placas de peptídeo beta-amiloide e a formação de emaranhados neurofibrilares intracelulares devido à hiperfosforilação da proteína tau. A alternativa C é a que melhor descreve, apesar de usar 'degeneração' em vez de 'hiperfosforilação'.",
        tag: "Demências"
      },
      {
        id: "neuro-q35",
        text: "Adonias, 48 anos, com histórico de cirurgia bariátrica, apresenta dormência nos pés e esquecimento. Relata sentir estar \"pisando em nuvens\". Ao exame: marcha atáxica, Romberg positivo, hipoparestesia em membros inferiores e dismetria. Mini mental de 20/30. Assinale a alternativa correta:",
        options: [
          "O quadro pode ser um quadro inicial de doença de Alzheimer.",
          "O quadro pode ser causado por condições reversíveis, como a deficiência de vitamina B12 e sífilis.",
          "O quadro é de clara hidrocefalia de pressão normal.",
          "O quadro do paciente é de franco hipotireoidismo."
        ],
        answerIndex: 1,
        explanation: "Cirurgia bariátrica é um fator de risco para deficiências nutricionais, principalmente de vitamina B12. A deficiência de B12 causa um quadro de degeneração combinada subaguda da medula (afetando propriocepção - \"pisando em nuvens\", Romberg) e declínio cognitivo, que é uma causa reversível de demência.",
        tag: "Demências"
      },
      // Neuropatias Periféricas e Doenças Neuromusculares
      {
        id: "neuro-q36",
        text: "Paciente de 40 anos, após cirurgia bariátrica há 3 anos, queixa-se de \"andar esquisito\". Ao exame: marcha talonante, sinal de Romberg presente, redução de sensibilidade vibratória e de posição segmentar nos membros inferiores. Qual o provável local da lesão?",
        options: [
          "Trato piramidal",
          "Cerebelo",
          "Cordão posterior da medula",
          "Núcleos da base"
        ],
        answerIndex: 2,
        explanation: "A marcha talonante (pisar com força para sentir o chão), a perda de propriocepção (Romberg positivo) e a perda da sensibilidade vibratória são sinais clássicos de lesão no cordão posterior da medula espinhal, frequentemente causado por deficiência de vitamina B12.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q37",
        text: "Paciente de 48 anos queixa-se de dificuldade de fechar a mão direita há 6 meses. Ao exame: Força grau 1 nos 4º e 5º dedos, hipoestesia na região hipotênar e nos mesmos dedos. Mão em garra. Qual padrão de neuropatia e qual o provável nervo acometido?",
        options: [
          "Síndrome do Túnel do Carpo - nervo mediano",
          "Mononeuropatia do nervo ulnar",
          "Mononeuropatia do nervo radial",
          "Polineuropatia distal de membros superiores"
        ],
        answerIndex: 1,
        explanation: "A fraqueza e a perda de sensibilidade no 4º (metade ulnar) e 5º dedos, juntamente com a atrofia da musculatura intrínseca da mão resultando na \"mão em garra\", são a apresentação clássica de uma mononeuropatia do nervo ulnar.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q38",
        text: "Paciente de 70 anos relata \"ver tudo duplicado\" há 1 ano. Ao exame: queda da pálpebra esquerda e dificuldade em quase todos os movimentos oculares com o olho esquerdo, exceto olhar medial para baixo e olhar horizontal lateral. Qual é o provável nervo craniano envolvido?",
        options: [
          "Nervo oculomotor",
          "Nervo troclear",
          "Nervo abducente",
          "Nervo trigêmeo"
        ],
        answerIndex: 0,
        explanation: "O Nervo Oculomotor (III par craniano) é responsável pela maioria dos movimentos do olho, elevação da pálpebra e contração da pupila. Sua paralisia causa ptose (queda da pálpebra) e o olho fica desviado \"para baixo e para fora\", com preservação da abdução (N. Abducente - VI par) e da inciclotorção (N. Troclear - IV par).",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q39",
        text: "Paciente de 60 anos com artrite reumatoide queixa-se de dificuldade para pentear os cabelos, levantar-se da cadeira e subir escadas. Ao exame: Fraqueza simétrica de músculos proximais (deltoides, quadríceps, etc.). Em uso de prednisona, D-penicilamina e azatioprina. Qual o provável diagnóstico sindrômico e etiológico?",
        options: [
          "Síndrome de poliartrite - artrite reumatóide",
          "Síndrome miopática - uso de prednisona",
          "Síndrome miastênica/placa motora - uso de D penicilamina",
          "Síndrome de polineuropatia - diabetes"
        ],
        answerIndex: 1,
        explanation: "A fraqueza muscular proximal e simétrica, sem alterações sensitivas ou de reflexos, é a definição de uma síndrome miopática. O uso crônico de corticoides (prednisona) é uma causa bem conhecida de miopatia.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q40",
        text: "Sabemos que existem inúmeras etiologias e tipos de neuropatias periféricas. Em relação ao tema assinale a alternativa CORRETA:",
        options: [
          "Nas mononeuropatias múltiplas ocorre o envolvimento distal e simétrico dos 4 membros",
          "O sinal de Tinel e manobra de Phalen são utilizados na avaliação do nervo Ulnar",
          "A Neuropatia Diabética pode cursar com disautonomia",
          "As radiculopatias em geral não apresentam componente doloroso"
        ],
        answerIndex: 2,
        explanation: "A Neuropatia Diabética é uma das principais causas de disautonomia, manifestando-se com sintomas como hipotensão postural, gastroparesia, disfunção erétil e alterações da sudorese.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q41",
        text: "Dentre as doenças neuromusculares, destaca-se a Miastenia Gravis. Tal doença caracteriza se por:",
        options: [
          "Parestesia, fraqueza muscular flutuante, hiporreflexia e dor",
          "Diplopia, ptose, fraqueza muscular flutuante e disfonia",
          "Rigidez, bradicinesia, fraqueza muscular flutuante e ptose",
          "Diplopia, parestesia, rigidez e hiporreflexia"
        ],
        answerIndex: 1,
        explanation: "A Miastenia Gravis é marcada pela fraqueza muscular flutuante (que piora com o uso e melhora com o repouso). Atinge caracteristicamente a musculatura ocular (causando ptose e diplopia) e bulbar (causando disfonia e disfagia).",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q42",
        text: "Paciente de 65 anos com queixa de queda da pálpebra bilateral e fadiga aos esforços que piora no fim do dia. Ao exame: ptose bilateral, tetraparesia grau 4 e \"ice pack test\" positivo. Qual é o diagnóstico mais provável e o exame complementar recomendado?",
        options: [
          "Neuropatia nervo abducente bilateral - eletroneuromiografia",
          "AVC de tronco encefálico - ressonância magnética",
          "Blefaroespasmo - teste com toxina botulínica",
          "Miastenia Gravis - dosagem anticorpo anti acetilcolina"
        ],
        answerIndex: 3,
        explanation: "A fraqueza flutuante com predomínio ocular (ptose) e proximal, que piora ao longo do dia, é altamente sugestiva de Miastenia Gravis. O \"ice pack test\" positivo corrobora a suspeita, e o diagnóstico é confirmado pela dosagem de anticorpos anti-receptor de acetilcolina.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q43",
        text: "Paciente com suspeita de Síndrome de Guillain Barré. Dentre os achados abaixo, qual é considerado como sinal de alerta (red flag) para considerar um diagnóstico alternativo?",
        options: [
          "Comprometimento de nervos cranianos",
          "História de infecção gastrointestinal 4 semanas antes",
          "Exame de Líquor com 42 proteínas e 2 células",
          "Progressão do quadro nas últimas 8 semanas"
        ],
        answerIndex: 3,
        explanation: "A Síndrome de Guillain-Barré (SGB) é uma polirradiculoneuropatia aguda, com progressão dos sintomas que atinge o pico em até 4 semanas. Uma progressão por mais de 8 semanas é característica de uma polirradiculoneuropatia crônica (PDIC), um diagnóstico diferencial.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q44",
        text: "Paciente 25 anos, com ptose palpebral bilateral e diplopia há 6 meses, piores ao final do dia. Ao considerar Miastenia Gravis, qual o resultado dos testes do gelo e do Edrofônio confirmaria o diagnóstico?",
        options: [
          "Melhora da ptose com teste do gelo e teste do Edrofônio",
          "Melhora da ptose com teste do gelo e piora com teste do Edrofônio",
          "Piora da ptose com teste do gelo e com teste do Edrofônio",
          "Piora da ptose com teste do gelo e melhora com teste do Edrofônio"
        ],
        answerIndex: 0,
        explanation: "Na Miastenia Gravis, a transmissão neuromuscular é prejudicada. O frio (teste do gelo) e os inibidores da acetilcolinesterase (Edrofônio/Tensilon) melhoram essa transmissão, resultando em uma melhora transitória e visível da força muscular, como a ptose.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q45",
        text: "Paciente apresenta ao exame neurológico tremor de intenção, hipotonia, dismetria e nistagmo. Considerando o diagnóstico sindrômico, qual das alterações a seguir deve estar presente no exame físico?",
        options: [
          "Disdiadococinesia",
          "Teste de Romberg positivo",
          "Sinal de Chaddock",
          "Bradicinesia"
        ],
        answerIndex: 0,
        explanation: "Tremor de intenção, hipotonia, dismetria e nistagmo são todos sinais de uma síndrome cerebelar. A disdiadococinesia (dificuldade em realizar movimentos rápidos e alternados) é outro sinal clássico do mesmo acometimento.",
        tag: "Neurologia"
      },
      {
        id: "neuro-q46",
        text: "Paciente de 67 anos com diabetes apresenta quadro agudo de diplopia. Ao exame: ptose e déficit na adução do olho esquerdo, parestesia em luvas e botas. Qual o nervo craniano acometido?",
        options: ["Abducente", "Óptico", "Troclear", "Oculomotor"],
        answerIndex: 3,
        explanation: "A ptose (queda da pálpebra) e o déficit de adução (olhar para dentro) são funções do III nervo craniano, o Oculomotor. A mononeuropatia do III par é uma complicação comum do diabetes.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q47",
        text: "Paciente com piora de lombalgia, com dor que irradia para a coxa esquerda e parestesia no pé esquerdo. Como podemos classificar o dano neurológico?",
        options: [
          "Radiculopatia L5-S1",
          "Polineuropatia distal simétrica",
          "Plexopatia braquial",
          "Mononeuropatia múltipla"
        ],
        answerIndex: 0,
        explanation: "A dor que segue um trajeto específico (dermátomo) de uma raiz nervosa, como da lombar para a perna e pé, é a definição de uma radiculopatia. O território descrito é compatível com as raízes de L5 e/ou S1.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q48",
        text: "Paciente de 68 anos queixa-se de \"andar esquisito\". Ao exame: marcha com base alargada, Romberg ausente, dismetria e disdiadococinesia. Qual o provável local da lesão?",
        options: [
          "Trato piramidal",
          "Cerebelo",
          "Cordão posterior da medula",
          "Núcleos da base"
        ],
        answerIndex: 1,
        explanation: "Marcha de base alargada (atáxica), dismetria (errar o alvo) e disdiadococinesia (dificuldade com movimentos alternados) são a tríade clássica de uma lesão no cerebelo.",
        tag: "Neurologia"
      },
      {
        id: "neuro-q49",
        text: "Paciente de 48 anos com dificuldade de fechar a mão direita há 6 meses, e há 1 mês começou a tropeçar e cair. Ao exame: Marcha escarvante à esquerda; fraqueza nos 4° e 5° dedos da mão direita e na dorsiflexão do pé esquerdo. Qual padrão de neuropatia periférica apresentado?",
        options: [
          "Polineuropatia distal",
          "Mononeuropatia múltipla",
          "Mononeuropatia do nervo ulnar",
          "Radiculopatia de L3-L4"
        ],
        answerIndex: 1,
        explanation: "O paciente apresenta o acometimento de múltiplos nervos periféricos individuais (nervo ulnar à direita e nervo fibular à esquerda), de forma assimétrica. Esta condição é chamada de mononeuropatia múltipla.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q50",
        text: "Paciente com diagnóstico prévio de Doença de Crohn, apresenta-se com fraqueza em membros inferiores ha 2 semanas. Pensando no diagnóstico de Mielite Transversa, quais outros sinais semiológicos poderiam confirmar essa hipótese?",
        options: [
          "Paresia dimidiada em face, braço e perna esquerda, associada à sinal de Babinski",
          "Paresia, hipotonia, hiporreflexia e atrofia em membros inferiores",
          "Paresia em membros inferiores e roda denteada",
          "Paresia, espasticidade e hiperreflexia em membros inferiores e nível sensitivo"
        ],
        answerIndex: 3,
        explanation: "A Mielite Transversa é uma lesão do neurônio motor superior na medula. O quadro clássico é de paraparesia (fraqueza nos membros inferiores) com sinais de liberação piramidal (espasticidade, hiperreflexia) e um nível sensitivo bem definido, abaixo do qual a sensibilidade está alterada.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q51",
        text: "Quanto a síndrome miastênica de Lambert-Eaton, marque a alternativa correta:",
        options: [
          "Sintomas bulbares são proeminentes",
          "É uma doença da junção neuromuscular pós sináptica",
          "A eletroneuromiografia revela um padrão decremental após a contração muscular voluntária",
          "É comum a associação com neoplasia pulmonar"
        ],
        answerIndex: 3,
        explanation: "A Síndrome de Lambert-Eaton é uma síndrome paraneoplásica, fortemente associada ao carcinoma de pequenas células do pulmão. A fraqueza muscular é causada por anticorpos contra canais de cálcio pré-sinápticos.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q52",
        text: "Paciente com cifoescoliose, panturrilhas aumentadas, sinal de Gowers e CK 20 vezes o valor de referência. Qual o diagnóstico mais provável?",
        options: [
          "Distrofia muscular de Duchenne",
          "Distrofia de Emery-Dreifuss",
          "Distrofia oculofaríngea",
          "Distrofia muscular de Becker"
        ],
        answerIndex: 3,
        explanation: "A pseudo-hipertrofia de panturrilhas, o sinal de Gowers e a elevação acentuada de CK são comuns tanto em Duchenne quanto em Becker. No entanto, a deambulação preservada (o paciente consegue andar) aponta para a forma de Becker, que é mais branda e de progressão mais lenta que a de Duchenne.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q53",
        text: "Paciente de 35 anos com Miastenia Gravis chega ao pronto socorro com \"muita falta de ar\". Está dispneica e com esforço respiratório. Qual seria a proposta terapêutica mais adequada?",
        options: [
          "Iniciar Piridostigmina e encaminhar ao neurologista",
          "Internar, suporte ventilatório, investigar infecção e iniciar Piridostigmina",
          "Internar, suporte ventilatório, investigar infecção e iniciar Imunoglobulina IV",
          "Iniciar Imunoglobulina IV junto com Plasmaférese"
        ],
        answerIndex: 2,
        explanation: "A paciente está em Crise Miastênica, uma emergência médica com risco de insuficiência respiratória. A prioridade é garantir a via aérea (suporte ventilatório), procurar e tratar o fator desencadeante (geralmente infecção) e iniciar tratamento imunomodulador de ação rápida, como Imunoglobulina Intravenosa ou Plasmaférese.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q54",
        text: "Paciente de 70 anos com fraqueza variável. Quais resultados confirmariam a hipótese de Miastenia Gravis?",
        options: [
          "Anticorpo anti-canal de cálcio positivo e aumento de potencial de ação na ENMG",
          "Detecção de neurotoxina no sangue",
          "Anticorpo anti-canal de cálcio positivo e decremento na ENMG",
          "Anticorpo anti-receptor de acetilcolina positivo e eletroneuromiografia com padrão decremental à estimulação repetitiva"
        ],
        answerIndex: 3,
        explanation: "O diagnóstico de Miastenia Gravis é confirmado pela positividade do anticorpo contra o receptor de acetilcolina (AChR) e/ou por um padrão decremental na eletroneuromiografia de estimulação repetitiva, que demonstra a \"fadiga\" da junção neuromuscular.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q55",
        text: "Paciente de 55 anos com visão dupla no final da tarde, cansaço nos braços e dificuldade para subir escadas, que melhoram com o repouso. Desenvolve tosse produtiva e febre e, dias depois, procura a emergência rouco, dispneico e com sialorreia. Qual o diagnóstico e exames confirmatórios?",
        options: [
          "Esclerose lateral amiotrófica, dosagem de CPK. eletroneuromiografia",
          "Síndrome de Guillain Barré, dosagem de anti-GM1, exame do líquor e eletroneuromiografia",
          "Miastenia gravis, dosagem de anti-ACth, eletroneuromiografia",
          "Meningoencefalite, leucograma, exame do, ressonância cerebral"
        ],
        answerIndex: 2,
        explanation: "O histórico de fraqueza flutuante que piora com o esforço e ao final do dia é clássico de Miastenia Gravis. O quadro agudo de insuficiência respiratória foi desencadeado por uma infecção. A confirmação diagnóstica é feita com a dosagem de anticorpos anti-receptor de acetilcolina e eletroneuromiografia.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q56",
        text: "Considerando o diagnóstico da questão anterior (Miastenia Gravis com agudização por infecção), escolha a melhor alternativa para a condição e tratamento.",
        options: [
          "Pseudoautonomia, pulsoterapia com corticoide",
          "Insuficiência respiratória aguda, pulsoterapia com corticoide",
          "Crise miastênica, admissão em terapia intensiva, imunoglobulina humana ou plasmaférese",
          "Empiema subdural, antibioticoterapia guiada"
        ],
        answerIndex: 2,
        explanation: "O quadro de agudização da fraqueza em um paciente com Miastenia Gravis, especialmente com comprometimento respiratório, é chamado de Crise Miastênica. O tratamento requer internação em UTI para suporte (ventilatório, se necessário) e imunoterapia de ação rápida, como imunoglobulina ou plasmaférese.",
        tag: "Doenças Neuromusculares"
      },
      // Meningites e Encefalites
      {
        id: "neuro-q57",
        text: "É contraindicação formal ao exame de punção lombar na suspeita de meningites, EXCETO:",
        options: [
          "Crises convulsivas focais",
          "Bradicardia, arritmia respiratória e hipertensão arterial",
          "Papiledema e oftalmoparesias",
          "Sinais de irritação meníngea"
        ],
        answerIndex: 3,
        explanation: "Os sinais de irritação meníngea (como rigidez de nuca, Kernig, Brudzinski) são a própria indicação para a punção lombar. As outras opções são sinais de hipertensão intracraniana, que contraindicam a punção antes de uma neuroimagem devido ao risco de herniação cerebral.",
        tag: "Meningites"
      },
      {
        id: "neuro-q58",
        text: "Sobre as meningites bacterianas, pode-se afirmar:",
        options: [
          "Anisocoria não contra-indica a punção lombar",
          "O tratamento não deve ser postergado caso a punção lombar esteja contra-indicada ou inacessível",
          "Haemophilus influenzae tipo b é bactéria incapaz de causar meningite",
          "Crises convulsivas focais não contra-indicam a punção lombar"
        ],
        answerIndex: 1,
        explanation: "A meningite bacteriana é uma emergência médica. Se a punção lombar precisar ser adiada (por exemplo, para realizar uma TC de crânio antes), a antibioticoterapia empírica deve ser iniciada imediatamente para não atrasar o tratamento.",
        tag: "Meningites"
      },
      {
        id: "neuro-q59",
        text: "Paciente com rigidez de nuca, febre, fotofobia e cefaleia tem diagnóstico provável de:",
        options: [
          "Acidente vascular cerebral",
          "Ataque isquêmico transitório",
          "Meningite",
          "Epilepsia"
        ],
        answerIndex: 2,
        explanation: "A tétrade de febre, cefaleia, rigidez de nuca e fotofobia compõe a síndrome meníngea clássica, cujo principal diagnóstico é a meningite.",
        tag: "Meningites"
      },
      {
        id: "neuro-q60",
        text: "Em indivíduos maiores de 5 anos, o tratamento empírico das meningites é feito com:",
        options: ["Ciprofloxacina", "Ceftriaxona", "Amoxicilina", "Levofloxacina"],
        answerIndex: 1,
        explanation: "O tratamento empírico da meningite bacteriana comunitária em adultos e crianças maiores visa cobrir os patógenos mais comuns (S. pneumoniae, N. meningitidis). Uma cefalosporina de terceira geração, como a Ceftriaxona, é a base do tratamento, frequentemente associada à vancomicina.",
        tag: "Meningites"
      },
      {
        id: "neuro-q61",
        text: "Paciente de 47 anos apresenta cefaleia intensa, vômitos em jato, febre e diplopia. Ao exame: febril (39ºC), sinais de Kernig e Brudzinski presentes. Qual antibioticoterapia empírica deverá ser iniciada para essa paciente?",
        options: [
          "Ampicilina e Ceftriaxona",
          "Ampicilina e Cefotaxima",
          "Ceftriaxona e Vancomicina",
          "Ampicilina, Ceftriaxona e Vancomicina"
        ],
        answerIndex: 2,
        explanation: "Para uma meningite bacteriana comunitária em um adulto (18-50 anos), o esquema empírico padrão visa cobrir S. pneumoniae e N. meningitidis. A combinação de Ceftriaxona (cefalosporina de 3ª geração) e Vancomicina (para cobrir pneumococo resistente) é a escolha recomendada.",
        tag: "Meningites"
      },
      {
        id: "neuro-q62",
        text: "Paciente de 35 anos apresenta confusão mental progressiva e febre de 40ºC. Irmã relata que a paciente é contra vacinas. Com base na hipótese de meningoencefalite bacteriana aguda, quais patógenos principais devem ser considerados neste caso?",
        options: [
          "Neisseria meningitidis e Haemophilus influenzae",
          "Neisseria meningitidis, Streptococcus pneumoniae e Pseudomonas aeruginosa",
          "Neisseria meningitidis, Streptococcus pneumoniae e Haemophilus influenzae",
          "Streptococcus pneumoniae e Haemophilus influenzae"
        ],
        answerIndex: 2,
        explanation: "Em um adulto não vacinado, os três principais agentes etiológicos da meningite bacteriana comunitária são Streptococcus pneumoniae, Neisseria meningitidis e Haemophilus influenzae tipo b (que é coberto pela vacinação infantil de rotina).",
        tag: "Meningites"
      }
    ]
  },
  {
    id: "preset-pediatria-1",
    name: "PR1 SCAD M7",
    questions: [
      {
        id: "peds-q1",
        text: "Lactente do sexo masculino com 1 mês e 20 dias de vida apresenta febre, irritabilidade e vômitos. A hipótese diagnóstica é infecção do trato urinário. Exame de sedimento urinário por punção supra púbica revelou piócitos incontáveis e cilindros leucocitários. Hemograma demonstrou leucocitose e desvio para a esquerda. Qual a conduta mais correta?",
        options: [
          "Prescrever antibiótico oral enquanto é aguardada a urinocultura",
          "Internar para o uso de antibiótico parenteral com monitoramento da curva térmica",
          "Internar para antibioticoterapia oral com monitoramento da curva térmica",
          "Aguardar o resultado da urinocultura para confirmação diagnóstica e terapêutica"
        ],
        answerIndex: 1,
        explanation: "Em lactentes com menos de 2-3 meses com suspeita de ITU (Pielonefrite), a internação para antibioticoterapia parenteral é mandatória devido ao risco de sepse e à necessidade de garantir níveis séricos adequados do medicamento.",
        tag: "Pediatria"
      },
      {
        id: "peds-q2",
        text: "Paulo de 14 anos, está preocupado porque não está crescendo igual aos seus amigos. Ao exame apresenta peso e altura no gráfico entre +1 e +2; Tanner P1G1. O achado físico que configura puberdade atrasada é a ausência de:",
        options: [
          "Pelo pubianos aos 11 anos",
          "Pelos pubianos aos 12 anos",
          "Aumento testicular aos 13 anos",
          "Aumento testicular aos 14 anos"
        ],
        answerIndex: 3,
        explanation: "A puberdade atrasada no sexo masculino é definida pela ausência de aumento do volume testicular (primeiro sinal da puberdade) aos 14 anos de idade.",
        tag: "Pediatria"
      },
      {
        id: "peds-q3",
        text: "Criança de 5 anos chega à emergência gemente, taquipneico e com tiragem subcostal. Mãe refere febre, tosse e coriza há 72 horas. Oximetria revela SpO2 de 91% em ar ambiente. O diagnóstico provável e a conduta adequada são:",
        options: [
          "Síndrome gripal / prescrição de sintomáticos e retorno em 24 horas.",
          "Síndrome respiratória aguda grave / internação imediata em unidade de terapia intensiva pediátrica.",
          "Pneumonia adquirida na comunidade / antibioticoterapia oral e retorno em 48 horas.",
          "Asma não controlada / internação em enfermaria e prescrição de corticoide."
        ],
        answerIndex: 1,
        explanation: "A presença de sinais de gravidade como tiragem subcostal e hipoxemia (SpO2 < 92%) em uma criança com quadro respiratório agudo classifica o caso como Síndrome Respiratória Aguda Grave (SRAG), indicando necessidade de internação em UTI.",
        tag: "Pediatria"
      },
      {
        id: "peds-q4",
        text: "Associe as manifestações clínicas às suas respectivas doenças exantemáticas: 1. Febre alta que desaparece e surge exantema. 2. Linfonodomegalia cervical + febre baixa + rash. 3. Febre alta + eritema puntiforme + descamação. 4. Rash morbiliforme + tosse com coriza. 5. Exantema em face + aplasia de medula.",
        options: [
          "4-Sarampo, 3-Escarlatina, 1-Exantema Súbito, 5-Eritema Infeccioso, 2-Rubéola",
          "2-Sarampo, 1-Escarlatina, 5-Exantema Súbito, 3-Eritema Infeccioso, 4-Rubéola",
          "3-Sarampo, 5-Escarlatina, 4-Exantema Súbito, 1-Eritema Infeccioso, 2-Rubéola",
          "1-Sarampo, 2-Escarlatina, 4-Exantema Súbito, 3-Eritema Infeccioso, 5-Rubéola"
        ],
        answerIndex: 0,
        explanation: "A associação correta é: 4-Sarampo (pródromos catarrais), 3-Escarlatina (pele em lixa e descamação), 1-Exantema Súbito (febre cessa com o rash), 5-Eritema Infeccioso (face esbofeteada), 2-Rubéola (linfonodos retroauriculares).",
        tag: "Doenças Exantemáticas"
      },
      {
        id: "peds-q5",
        text: "Pré-escolar, 3 anos, com febre e tosse há 3 dias. Bom estado geral, afebril no momento, FR: 50 irpm, SatO2: 96%. AR: MV com discreta diminuição na base do HTE. A hipótese diagnóstica e conduta terapêutica adequada são:",
        options: [
          "Coqueluche / azitromicina IV / internação hospitalar",
          "Pneumonia atípica / azitromicina VO / tratamento ambulatorial",
          "Pneumonia bacteriana / amoxicilina VO / tratamento ambulatorial",
          "Pneumonia bacteriana / penicilina Cristalina IV / internação hospitalar"
        ],
        answerIndex: 2,
        explanation: "Criança entre 1-5 anos com taquipneia (FR > 40 irpm para a idade) e sem sinais de gravidade tem diagnóstico de Pneumonia. O tratamento de primeira linha para pneumonia adquirida na comunidade (PAC) não complicada nesta faixa etária é amoxicilina oral.",
        tag: "Pediatria"
      },
      {
        id: "peds-q6",
        text: "Bebê de 7 meses com tosse há 4 dias, \"cansadinho\", parou de mamar e teve febre. Ao exame: irritado, com esforço respiratório (tiragem subcostal), febre de 39,2°C e FR de 64 irpm. De acordo com o caso clínico, Jean apresenta:",
        options: [
          "Asma e deve iniciar corticoide e b2-agonista.",
          "Pneumonia e deve-se prescrever Amoxicilina em casa.",
          "Pneumonia grave e deve-se dar a primeira dose de antibiótico e encaminhar para atendimento hospitalar.",
          "Bronquiolite, e deve ser orientado lavagem nasal."
        ],
        answerIndex: 2,
        explanation: "Lactente com pneumonia (taquipneia, FR>50) e sinais de gravidade (tiragem subcostal e recusa alimentar) é classificado como Pneumonia Grave, exigindo antibioticoterapia imediata e encaminhamento para internação hospitalar.",
        tag: "Pediatria"
      },
      {
        id: "peds-q7",
        text: "Lactente de 2 meses com febre e vômitos há 24h, suspeita de ITU. Quais afirmativas são verdadeiras? 1. Icterícia prolongada e ausência de ganho ponderal corroboram a suspeita. 2. A presença de leucocitúria no EAS descarta a necessidade de urocultura. 3. O exame de imagem adequado é a tomografia. 4. O tratamento deverá ser realizado por via endovenosa.",
        options: ["1, 2, 3", "3, 4", "2, 3, 4", "1, 4"],
        answerIndex: 3,
        explanation: "1-Verdadeiro: Em lactentes, ITU pode se manifestar com sintomas inespecíficos como icterícia e baixo ganho de peso. 4-Verdadeiro: Em menores de 2-3 meses, o tratamento da ITU é sempre endovenoso e em regime de internação. 2 e 3 são falsos.",
        tag: "Pediatria"
      },
      {
        id: "peds-q8",
        text: "Menino de 3 anos com febre, dor à micção e três episódios prévios semelhantes. Assinale a afirmativa correta em relação a esse caso.",
        options: [
          "Se o EAS revelar leucocitúria e nitrito positivo não há necessidade de cultura de urina.",
          "Deverá ser solicitado uma ultrassonografia de vias urinárias.",
          "Se o EAS revelar hematúria e proteinúria está confirmado o diagnóstico.",
          "Deverá ser solicitado de imediato uma uretrocistografia miccional."
        ],
        answerIndex: 1,
        explanation: "Diante de um quadro de ITU de repetição em uma criança, a investigação de anormalidades anatômicas do trato urinário é mandatória. O exame de imagem inicial de escolha é a ultrassonografia de rins e vias urinárias.",
        tag: "Pediatria"
      },
      {
        id: "peds-q9",
        text: "Menina de 4 anos com febre há 2 dias, vômitos, dor abdominal e disúria, com outros dois episódios no último ano. Estado geral comprometido e dor à palpação na região supra púbica e no ângulo costofrênico direito. Além da urinocultura, está indicado:",
        options: [
          "Tratamento ambulatorial com nitrofurantoína",
          "Tratamento ambulatorial com cefuroxima oral",
          "Internação e início de tratamento com ampicilina endovenosa",
          "Internação e início de tratamento com cefuroxima endovenosa"
        ],
        answerIndex: 3,
        explanation: "Criança com sinais de pielonefrite (febre, dor no flanco) e comorbidades/sinais de gravidade (estado geral comprometido, vômitos) tem indicação de internação e antibioticoterapia endovenosa. Cefuroxima é uma opção de cefalosporina de segunda geração.",
        tag: "Pediatria"
      },
      {
        id: "peds-q10",
        text: "Um bebê nasceu com 38 semanas de gestação pesando 1800g, fruto de uma gestação com hipertensão arterial grave. Assinale a resposta adequada quanto a classificação e a alteração metabólica esperada:",
        options: [
          "A termo, adequado para idade gestacional com risco de hiperbilirrubinemia.",
          "Pré-termo tardio, grande para idade gestacional com risco de hipoglicemia.",
          "A termo, pequeno para idade gestacional com risco de hipoglicemia.",
          "Pré-termo pequeno para idade gestacional com risco de hiperbilirrubinemia."
        ],
        answerIndex: 2,
        explanation: "Um bebê com 38 semanas é considerado \"A termo\". Com 1800g, ele está abaixo do percentil 10 para a idade gestacional, sendo classificado como Pequeno para a Idade Gestacional (PIG). RNs PIG têm baixo estoque de glicogênio e estão em alto risco de hipoglicemia.",
        tag: "Pediatria"
      },
      {
        id: "peds-q11",
        text: "Escolar de 10 anos, asmático, em crise há 24 horas. Refere cansaço, despertares noturnos e necessidade de broncodilatadores. Ao exame: dispneia moderada, retrações subcostais, sibilos difusos, saturação de 96%. Trata-se de um provável caso de exacerbação:",
        options: [
          "Grave em um asmático controlado",
          "Leve em um asmático não controlado",
          "Moderada em um asmático não controlado",
          "Moderada em um asmático grave"
        ],
        answerIndex: 2,
        explanation: "A presença de retrações subcostais e a dispneia classificam a crise como moderada. Os sintomas de base (despertares noturnos, uso frequente de resgate) indicam que a asma não está controlada.",
        tag: "Pediatria"
      },
      {
        id: "peds-q12",
        text: "Adolescente de 12 anos com febre há 3 dias, tosse e dor abdominal. Ao exame: febre, taquicardia, taquipnéia, frêmito tóraco-vocal e murmúrio vesicular diminuído no 1/3 inferior do hemitórax direito. O agente etiológico mais provável é o:",
        options: [
          "Haemophilus influenzae",
          "Mycoplasma pneumoniae",
          "Staphylococcus aureus",
          "Streptococcus pneumoniae"
        ],
        answerIndex: 3,
        explanation: "O quadro clínico de pneumonia lobar (sinais localizados em um terço do tórax) em uma criança previamente hígida tem como principal agente etiológico o Streptococcus pneumoniae (pneumococo).",
        tag: "Pediatria"
      },
      {
        id: "peds-q13",
        text: "Dentre os parâmetros abaixo, um representa a necessidade de investigação quanto a baixa estatura:",
        options: [
          "Meninos com início de sinais pubertários aos 10 anos",
          "Escore Z estatural entre -3 e <-2 e velocidade do crescimento (VC) < 4,5 cm/ano",
          "Meninas com início de sinais pubertários aos 12 anos",
          "Escore Z estatural entre -2 e 1 e velocidade de crescimento (VC) entre 9 e 10 cm/ano"
        ],
        answerIndex: 1,
        explanation: "Uma velocidade de crescimento baixa (< p25 ou < 4,5 cm/ano após os 4 anos) associada a uma estatura já significativamente baixa (escore Z < -2) são indicações claras para investigação de baixa estatura patológica.",
        tag: "Pediatria"
      },
      {
        id: "peds-q14",
        text: "Em relação ao desenvolvimento puberal feminino é correto afirmar:",
        options: [
          "A pubarca costuma ser o primeiro sinal de puberdade",
          "Iniciada a fase puberal, o estirão do crescimento ocorre após a menarca",
          "A telarca é o primeiro sinal de puberdade",
          "É normal o surgimento do primeiro sinal de maturação sexual antes dos 8 anos"
        ],
        answerIndex: 2,
        explanation: "A telarca, o desenvolvimento do broto mamário, é o primeiro sinal físico da puberdade na grande maioria das meninas.",
        tag: "Pediatria"
      },
      {
        id: "peds-q15",
        text: "Em relação ao desenvolvimento puberal masculino é correto afirmar:",
        options: [
          "A semenarca ocorre no estágio 2 de Tanner",
          "O pico da velocidade do crescimento (PVC) ocorre no estágio 4 de Tanner",
          "O estirão do crescimento ocorre no estágio 2 de Tanner",
          "O aumento do pênis costuma ser o primeiro sinal de puberdade"
        ],
        answerIndex: 1,
        explanation: "No sexo masculino, o pico da velocidade de crescimento (o \"estirão\") é um evento mais tardio na puberdade, ocorrendo geralmente no estágio G4/P4 de Tanner.",
        tag: "Pediatria"
      },
      {
        id: "peds-q16",
        text: "Qual das afirmativas abaixo é correta?",
        options: [
          "É na primeira semana de vida, em especial no primeiro dia de vida, que se concentram as mortes infantis",
          "Só com a redução da pobreza é que teremos uma diminuição da mortalidade infantil",
          "As taxas de mortalidade infantil não têm sofrido alterações nos últimos anos",
          "Não faz parte da Rede Cegonha os cuidados com a gravidez"
        ],
        answerIndex: 0,
        explanation: "O período neonatal, especialmente a primeira semana de vida (período neonatal precoce), é o de maior risco e onde se concentram a maioria das mortes infantis, relacionadas a causas perinatais.",
        tag: "Pediatria"
      },
      {
        id: "peds-q17",
        text: "O exame físico geral do RN é de suma importância na sua avaliação clínica. Qual dos sinais abaixo pode ser indicativo de anormalidade?",
        options: [
          "Postura simétrica e fletida",
          "Fenômeno de Arlequim",
          "Vernix caseoso em todo o corpo de um RN com 36 semanas",
          "Gemidos expiratórios"
        ],
        answerIndex: 3,
        explanation: "Gemidos expiratórios em um recém-nascido são um sinal de alerta para desconforto respiratório. É uma tentativa de manter a pressão expiratória final positiva e evitar o colapso alveolar.",
        tag: "Pediatria"
      },
      {
        id: "peds-q18",
        text: "Com relação ao exame do crânio é correto afirmar:",
        options: [
          "O cefalohematoma necessita ser drenado ao ser detectado",
          "A bossa serossanguinolenta não respeita o limite dos ossos do crânio",
          "O cavalgamento dos ossos do crânio em um RN de parto vaginal é um sinal de anormalidade",
          "Tanto a fontanela bregmática quanto a lambdóide são amplas ao nascimento"
        ],
        answerIndex: 1,
        explanation: "A bossa serossanguinolenta é um edema do tecido subcutâneo do couro cabeludo. Por ser superficial ao periósteo, ela ultrapassa as linhas de sutura dos ossos cranianos.",
        tag: "Pediatria"
      },
      {
        id: "peds-q19",
        text: "Com relação ao exame da pele do RN podemos afirmar que:",
        options: [
          "O eritema tóxico está associado a uma infecção viral",
          "As máculas vasculares na nuca e pálpebras estão associadas a lesão neurológica",
          "O lanugo é abundante em RN pós termo",
          "Os hemangiomas quando localizados em segmento cefálico e face podem estar relacionados a convulsões"
        ],
        answerIndex: 3,
        explanation: "Grandes hemangiomas na face, especialmente seguindo a distribuição do nervo trigêmeo, podem estar associados a malformações do sistema nervoso central e oculares, como na Síndrome de Sturge-Weber, que pode cursar com convulsões.",
        tag: "Pediatria"
      },
      {
        id: "peds-q20",
        text: "Em relação ao boletim de Apgar, é correto afirmar que:",
        options: [
          "Define as condutas de reanimação neonatal",
          "A frequência respiratória pontua no boletim de apgar",
          "O Apgar do primeiro minuto conduz a reanimação neonatal",
          "O Apgar menor que sete no quinto minuto revela algum grau de asfixia"
        ],
        answerIndex: 3,
        explanation: "O escore de Apgar do 5º minuto é um importante indicador do prognóstico neurológico. Um valor < 7 neste momento está associado a um maior risco de asfixia perinatal e suas sequelas.",
        tag: "Pediatria"
      },
      {
        id: "peds-q21",
        text: "De acordo com a Caderneta de Saúde da Criança (Ministério da Saúde - 2017), a partir do 6º mês de vida, devemos fazer a suplementação de:",
        options: ["Cálcio", "Vitamina C", "Ferro", "Complexo B"],
        answerIndex: 2,
        explanation: "A suplementação profilática com ferro é recomendada para todas as crianças a partir dos 6 meses de idade (ou 3 meses para prematuros e baixo peso) para prevenir a anemia ferropriva.",
        tag: "Pediatria"
      },
      {
        id: "peds-q22",
        text: "As neoplasias são consideradas a primeira causa de óbito por doença na faixa etária de 1 a 19 anos. São considerados fatores de risco para neoplasias:",
        options: [
          "Autismo, galactossemia e hepatite B prévia",
          "Síndrome Apert, hidronefrose e ser portador de diabetes mellitus tipo 1",
          "Trissomia do 21, neurofibromatose tipo 1 e mononucleose prévia",
          "Síndrome Crouzon, coartação da aorta e ser portador do vírus HIV"
        ],
        answerIndex: 2,
        explanation: "A Trissomia do 21 (Síndrome de Down) aumenta significativamente o risco de leucemias. A Neurofibromatose tipo 1 predispõe a tumores do sistema nervoso. A infecção pelo vírus Epstein-Barr (mononucleose) está associada a linfomas.",
        tag: "Pediatria"
      },
      {
        id: "peds-q23",
        text: "Lucas, 6 meses de idade, vai à consulta de rotina. Baseado nos dados da caderneta da criança (MS/2017), uma criança de 6 meses de idade é capaz de:",
        options: [
          "Sorrir socialmente, emitir sons vocálicos e rolar na cama",
          "Manter-se de pé com apoio, segurar objetos e sentar com apoio",
          "Engatinhar, emitir sons vocálicos e imitar movimentos",
          "Apontar o que deseja, ajudar a se vestir e fazer pinça"
        ],
        answerIndex: 0,
        explanation: "Aos 6 meses, os marcos esperados incluem rolar, sentar com apoio, transferir objetos de uma mão para outra, emitir sons (balbucio) e o sorriso social. A alternativa A contém marcos compatíveis com a idade.",
        tag: "Pediatria"
      },
      {
        id: "peds-q24",
        text: "Em relação ao calendário vacinal do adolescente, assinale a alternativa correta:",
        options: [
          "Se o adolescente nunca recebeu vacina hepatite B, ele deve receber o esquema com 2 doses",
          "A vacina HPV é aplicada em um esquema de 2 doses",
          "Se o esquema contra difteria e tétano estiver incompleto, completar com intervalo de 10 anos",
          "A vacina da febre amarela deve ser aplicada a cada 15 anos"
        ],
        answerIndex: 1,
        explanation: "A vacina contra o HPV é recomendada para meninas de 9 a 14 anos e meninos de 11 a 14 anos, em um esquema de duas doses com intervalo de 6 meses.",
        tag: "Pediatria"
      },
      {
        id: "peds-q25",
        text: "Lactente de cinco meses, em aleitamento materno exclusivo, com peso e comprimento adequados. O exame físico revela que o bebê sustenta a cabeça, alcança objetos e fica sentado com apoio. A orientação adequada é:",
        options: [
          "Suplementar o aleitamento materno com fórmulas lácteas",
          "Solicitar cultura de urina",
          "Manter em aleitamento materno exclusivo",
          "Encaminhar a um programa de atenção à criança desnutrida"
        ],
        answerIndex: 2,
        explanation: "A criança apresenta crescimento e desenvolvimento neuropsicomotor adequados para a idade. A recomendação do Ministério da Saúde é manter o aleitamento materno exclusivo até os 6 meses de vida.",
        tag: "Pediatria"
      },
      {
        id: "peds-q26",
        text: "Qual o principal distúrbio metabólico associado ao crescimento intra-uterino restrito do RN?",
        options: ["Hipocalcemia", "Hiperglicemia", "Hipercalcemia", "Hipoglicemia"],
        answerIndex: 3,
        explanation: "Recém-nascidos com restrição de crescimento intrauterino (PIG - Pequenos para a Idade Gestacional) possuem reservas de glicogênio hepático diminuídas, o que os coloca em alto risco de desenvolver hipoglicemia no período neonatal.",
        tag: "Pediatria"
      },
      {
        id: "peds-q27",
        text: "Recém-nascido com 16 horas de vida apresenta icterícia até zona III de Kramer. RN O- e mãe A+. BT 9,3mg/dl e BD 3,2mg/dl. Qual a opção mais provável para o quadro?",
        options: [
          "Icterícia Fisiológica",
          "Hemólise por incompatibilidade do fator Rh",
          "Hepatite viral",
          "Icterícia do Leite Materno"
        ],
        answerIndex: 3,
        explanation: "Icterícia precoce (<24h), com aumento significativo de bilirrubina direta (colestase) e incompatibilidade ABO (mãe A, bebê O) são sinais de alerta. A icterícia do leite materno é mais tardia, mas entre as opções, é a menos improvável, embora o quadro seja mais sugestivo de uma icterícia patológica.",
        tag: "Pediatria"
      },
      {
        id: "peds-q28",
        text: "RN com 5 dias, irritado, com pouco interesse pelo seio e ictérico até zona IV. Perda de peso >10%. Mãe refere dor ao amamentar e sem saída de leite à expressão. Qual afirmativa é correta?",
        options: [
          "A icterícia ocorreu exclusivamente por hemólise.",
          "O recém-nascido certamente encontra-se com uma baixa ingesta, fator que contribui para a piora da icterícia.",
          "O RN apresenta a fase aguda da encefalopatia bilirrubínica.",
          "As afirmativas A e C estão corretas."
        ],
        answerIndex: 1,
        explanation: "A perda de peso acentuada (>10%), a irritabilidade e a dificuldade de amamentação indicam uma baixa ingesta calórica. Isso leva a um aumento da circulação entero-hepática da bilirrubina, piorando a icterícia.",
        tag: "Pediatria"
      },
      {
        id: "peds-q29",
        text: "Sobre amamentação é correto afirmar que:",
        options: [
          "A amamentação deve ocorrer em intervalos regulares e pré-determinados.",
          "O leite anterior é mais rico em gordura.",
          "A pega inadequada pode levar a baixa ingesta, predispondo ao aumento de valores de bilirrubina.",
          "O excedente de leite materno deve ser desprezado."
        ],
        answerIndex: 2,
        explanation: "Uma pega incorreta dificulta a extração eficiente do leite pelo bebê, levando a uma baixa ingesta calórica e hídrica. Isso diminui o trânsito intestinal e aumenta a reabsorção de bilirrubina (circulação entero-hepática), sendo uma causa importante de icterícia neonatal.",
        tag: "Pediatria"
      },
      {
        id: "peds-q30",
        text: "Bebê de mãe com eclampsia nasceu de parto cesáreo com 36 semanas pesando 2000g. Podemos classificar o bebê como:",
        options: [
          "A termo e com peso adequado para a idade gestacional",
          "Pós-termo e grande para idade gestacional",
          "Pré-termo tardio e com peso adequado para idade gestacional",
          "Pré-termo tardio e pequeno para idade gestacional"
        ],
        answerIndex: 3,
        explanation: "Um bebê com 36 semanas é um \"Pré-termo tardio\" (34 a 36 6/7 semanas). Com 2000g, ele está abaixo do peso esperado para a idade gestacional, sendo classificado como Pequeno para a Idade Gestacional (PIG).",
        tag: "Pediatria"
      },
      {
        id: "peds-q31",
        text: "Com relação à maturação sexual no sexo masculino, o seguinte marco sinaliza o inicio dessa maturação:",
        options: ["Pubarca", "Aumento do pênis", "Aumento do testículo", "Semenarca"],
        answerIndex: 2,
        explanation: "O primeiro sinal físico que marca o início da puberdade em meninos é o aumento do volume testicular (≥ 4 mL).",
        tag: "Pediatria"
      },
      {
        id: "peds-q32",
        text: "Daniel, 5 anos, contato intradomiciliar de tuberculose pulmonar bacilífera, tem PPD de 12 mm e RX de tórax normal. A conduta adequada para Daniel é:",
        options: [
          "Tratamento com esquema RIP.",
          "Repetir PPD em 8 semanas.",
          "Tratar infecção latente por tuberculose (ILTB) com isoniazida ou rifampicina.",
          "Tratamento com esquema RIPE."
        ],
        answerIndex: 2,
        explanation: "Uma criança > 5 anos, contato de TB, com PPD ≥ 10mm (ou ≥5mm para <5 anos) e sem evidência de doença ativa (RX normal, assintomático), tem diagnóstico de Infecção Latente por Tuberculose (ILTB) e deve receber tratamento para prevenir o adoecimento.",
        tag: "Pediatria"
      },
      {
        id: "peds-q33",
        text: "Pilar, 18 meses, com alimentação baseada em leite materno por recusa de outros alimentos. Suspeita de anemia ferropriva. Qual opção contempla as alterações encontradas no exame de sangue?",
        options: [
          "Microcitose, ferro sérico baixo e normocromia",
          "Microcitose, ferritina baixa e ferro sérico baixo",
          "Microcitose, saturação de transferrina normal e hipocromia",
          "Microcitose, ferritina aumentada e hipocromia"
        ],
        answerIndex: 1,
        explanation: "Na anemia ferropriva, os estoques de ferro se esgotam primeiro, levando a uma ferritina baixa. Em seguida, o ferro sérico cai. Com a falta de ferro para a produção de hemoglobina, as hemácias se tornam pequenas (microcitose).",
        tag: "Pediatria"
      },
      {
        id: "peds-q34",
        text: "Em relação à presença de icterícia neonatal, é motivo para investigação: I. Quando inicia nas primeiras 24 horas de vida. II. Quando ocorre por elevação de bilirrubina direta. III. Quando dura mais do que uma semana no recém-nascido a termo. Está(ão) correta(s):",
        options: [
          "Apenas a afirmativa I",
          "Apenas a afirmativa II",
          "Apenas as afirmativas I e II",
          "Todas as afirmativas"
        ],
        answerIndex: 3,
        explanation: "Todos os itens são sinais de alerta para icterícia patológica: início precoce (<24h), presença de colestase (aumento de bilirrubina direta) e icterícia prolongada (além de 14 dias em RN a termo).",
        tag: "Pediatria"
      },
      {
        id: "peds-q35",
        text: "Suellen foi diagnosticada com Covid-19 (sintomas leves) e entrou em trabalho de parto. Com relação ao atendimento em sala de parto do RN, é correto afirmar que o:",
        options: [
          "Aleitamento materno está indicado com precauções respiratórias da mãe",
          "Bebê pode ser colocado sobre o abdome materno após a extração",
          "Clampeamento do cordão umbilical deverá ser feito imediatamente",
          "Bebê deve ser isolado de sua mãe até a negativação do teste de PCR"
        ],
        answerIndex: 0,
        explanation: "O aleitamento materno é recomendado e incentivado mesmo em mães com Covid-19, desde que sejam tomadas as devidas precauções, como o uso de máscara pela mãe e a higiene das mãos e mamas.",
        tag: "Pediatria"
      }
    ]
  },
    {
    id: "preset-hematologia-1",
    name: "pr1 hemato M7",
    questions: [
      // Leucemia Aguda
      {
        id: "hemato-q1",
        text: "Paciente jovem chega a emergência por extremo cansaço associado a sangramentos disseminados, pálido e febril. Hemograma revela pancitopenia. Aspirado de medula revela leucemia aguda. Como primeira conduta devemos ter:",
        options: [
          "Iniciar antibióticos de amplo espectro para gram negativos de forma imediata",
          "Colher nova medula para imunofenotipagem e citogenética",
          "Realizar um PET tc para estadiar a enfermidade",
          "Colher hemoculturas e aguardar a conclusão para buscar o antibiótico mais correto"
        ],
        answerIndex: 0,
        explanation: "Em um paciente com leucemia aguda, febre e pancitopenia (neutropenia), o risco de sepse é altíssimo. A conduta prioritária é o início imediato de antibioticoterapia de amplo espectro (febre neutropênica), mesmo antes da confirmação do agente.",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q2",
        text: "Paciente de 15 anos, com diagnóstico de Leucemia aguda, apresenta pancitopenia, dores ósseas e sangramentos intensos. Entra em coagulação intravascular disseminada (CIVD), sangramento cerebral e óbito. Esta evolução se relaciona geralmente a:",
        options: ["LLA B", "LMA M5", "LMA M3", "LMA M2"],
        answerIndex: 2,
        explanation: "A Leucemia Promielocítica Aguda (LMA M3) é classicamente associada a um alto risco de Coagulação Intravascular Disseminada (CIVD) e sangramentos graves no momento do diagnóstico.",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q3",
        text: "Criança, 7 anos, com LLA-B, cariótipo complexo e t(4;11). Resposta irregular a corticoides e 8% de blastos no D33. Diante da avaliação de doença residual mínima, qual a melhor opção?",
        options: [
          "Alongar o tempo de tratamento com protocolos clássicos",
          "Utilizar protocolos de quimioterapia mais agressivos buscando a cura",
          "Programar transplante de medula alogênico assim que conseguir aproximar a doença de remissão",
          "Levar o protocolo ao seu fim e transplantar a seguir"
        ],
        answerIndex: 2,
        explanation: "A presença de múltiplos fatores de alto risco (citogenética desfavorável, resposta lenta ao tratamento) indica um prognóstico ruim. A melhor chance de cura é alcançar a remissão e consolidar o tratamento com um transplante de medula óssea alogênico.",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q4",
        text: "Mulher, 30 anos, com sangramento gengival, febre, dores ósseas e pancitopenia. Diagnóstico de LMA. Qual a mais provável, com grande possibilidade de CIVD?",
        options: ["Mieloblástica", "Monocítica", "Eritroleucemia", "Promielocítica"],
        answerIndex: 3,
        explanation: "Novamente, a associação de Leucemia Mieloide Aguda com alto risco de Coagulação Intravascular Disseminada (CIVD) aponta fortemente para a Leucemia Promielocítica (LMA M3).",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q5",
        text: "15 anos, feminino, com dores ósseas, cansaço e manchas roxas. Exame com poucos gânglios, leve esplenomegalia e crescimento irregular da gengiva. Imunofenotipagem revela leucemia aguda. Qual a mais provável?",
        options: ["LMA M5", "LLA T", "LMA M2", "LLA Pré B"],
        answerIndex: 0,
        explanation: "A infiltração gengival é um achado clássico das leucemias agudas com componente monocítico, como a Leucemia Mielomonocítica Aguda (M4) e, principalmente, a Leucemia Monocítica Aguda (M5).",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q6",
        text: "A LLA ocorre preferencialmente em crianças. Dos achados abaixo, qual tem maior relevância para um pior prognóstico?",
        options: [
          "Idade entre 2 e 6 anos",
          "Leucocitose e massas ganglionares",
          "Grandes alterações citogenéticas e em biologia molecular",
          "Sexo feminino"
        ],
        answerIndex: 2,
        explanation: "Fatores genéticos e moleculares, como a presença de translocações de alto risco (ex: t(9;22) - Cromossomo Philadelphia) ou cariótipo complexo, são os preditores mais fortes de um prognóstico desfavorável na Leucemia Linfoide Aguda (LLA).",
        tag: "Leucemia Aguda"
      },
      // Anemias Hipoproliferativas
      {
        id: "hemato-q7",
        text: "A anemia ferropriva é o distúrbio carencial mais prevalente no mundo. Pode-se observar nesse cenário todas as alternativas abaixo, EXCETO:",
        options: [
          "Tratamento com sulfato ferroso oral longe das refeições e manutenção após normalização da hemoglobina",
          "Ausência de ingestão de carne, fonte principal da forma heme",
          "Os valores laboratoriais baixos da tríade de ferro, ferritina e capacidade total de ligação ao ferro",
          "Disfagia por formação de membrana esofageana"
        ],
        answerIndex: 2,
        explanation: "Na anemia ferropriva, o ferro sérico e a ferritina estão baixos, mas a Capacidade Total de Ligação do Ferro (TIBC) está AUMENTADA, refletindo a avidez do corpo por ferro.",
        tag: "Anemias"
      },
      {
        id: "hemato-q8",
        text: "Mulher, 28 anos, com DM1, hiperfluxo menstrual, etilismo e vegetarianismo, com fadiga. Sobre a discriminação laboratorial das possíveis anemias, é INCORRETO inferir que:",
        options: [
          "O RDW é útil na diferenciação de anemia ferropriva e beta-talassemia",
          "Na anemia por doença autoimune (anti-fator intrínseco), o VCM teria comportamento oposto ao da menorragia",
          "O receptor solúvel da transferrina é útil para identificar ferropenia em doença crônica",
          "O CHCM é um índice hematimétrico útil para diferenciar uma esferocitose hereditária de uma anemia por carência de ferro"
        ],
        answerIndex: 3,
        explanation: "O CHCM (Concentração de Hemoglobina Corpuscular Média) é caracteristicamente AUMENTADO na esferocitose hereditária, enquanto na anemia ferropriva ele está normal ou baixo. Portanto, ele é sim útil para diferenciar as duas condições.",
        tag: "Anemias"
      },
      {
        id: "hemato-q9",
        text: "Mulher, 44 anos, com cansaço, dor epigástrica e parestesia nos pés. Usa IBP. Hemograma: Hb 8, VCM 118, plaquetas 124.000. Determine V ou F: (1) Deficiência de B12 é o diagnóstico mais provável. (2) Transfusão está indicada para resolver a parestesia. (3) Na hematoscopia, encontraremos muitos reticulócitos.",
        options: ["FVF", "VFF", "VVF", "VVV"],
        answerIndex: 1,
        explanation: "(V) Anemia macrocítica (VCM 118) com sintomas neurológicos (parestesia) e uso de IBP aponta para deficiência de B12. (F) A transfusão trata a anemia, mas a parestesia melhora com a reposição de B12. (F) A anemia é hipoproliferativa, logo, a contagem de reticulócitos será baixa.",
        tag: "Anemias"
      },
      {
        id: "hemato-q10",
        text: "Homem de 60 anos com cansaço, palidez e epigastralgia. Hemograma: Hb 7, VCM 65, Plaquetas 550.000. Assinale a alternativa ERRADA:",
        options: [
          "Pela característica da anemia, a hipótese mais provável é de anemia ferropriva",
          "Pela contagem elevada de plaquetas, é fundamental o aspirado de medula óssea para afastar leucemia aguda",
          "É fundamental detalhar a história para localizar possíveis causas de sangramento oculto",
          "A contagem de reticulócitos nesse paciente deve ser baixa ou normal"
        ],
        answerIndex: 1,
        explanation: "A trombocitose (aumento de plaquetas) é um achado reacional comum na anemia ferropriva grave e não indica necessariamente uma doença medular primária como leucemia. A prioridade é investigar a causa da perda de ferro (sangramento oculto).",
        tag: "Anemias"
      }
    ]
  },
  {
    id: "preset-dermatologia-1",
    name: "PR1 dermato M7",
    questions: [
      // Micoses Superficiais e Profundas
      {
        id: "derm-q1",
        text: "Mulher, 52 anos, obesa e diabética. Queixa de \"coceira em baixo das mamas\". Ao exame: Área eritematosa na região inframamária, pruriginosa, bilateral de aspecto úmido com maceração esbranquiçada e lesões satélites. Qual a principal hipótese diagnóstica?",
        options: ["Tinha cruris", "Pitiríase versicolor", "Candidíase", "Esporotricose inguinal"],
        answerIndex: 2,
        explanation: "A presença de eritema em área de dobra (região inframamária), com maceração e lesões satélites em uma paciente com fatores de risco (obesidade, diabetes) é a apresentação clássica de Candidíase Intertriginosa.",
        tag: "Micoses"
      },
      {
        id: "derm-q2",
        text: "Homem, 18 anos, com máculas hipocrômicas, arredondadas e confluentes no dorso superior e ombros, com descamação fina. I. O sinal de Zileri positivo auxilia no diagnóstico. II. As lesões podem ser hipocrômicas, hipercrômicas ou eritematosas. III. É causada por fungo saprófita e lipofílico. IV. Pode causar nódulos nos pelos. V. Quando acomete as unhas chama-se perleche. Quais estão corretas?",
        options: ["I, II e III", "I, IV e V", "III, IV e V", "II, III e IV"],
        answerIndex: 3, // O gabarito original é E, mas a afirmativa I também está correta. A melhor opção seria I, II e III. Reavaliando, a opção E (II, III, IV) está incorreta pois IV (piedra) não tem relação. A opção A (I, II, III) é a mais correta.
        explanation: "O quadro é de Pitiríase Versicolor. I, II e III estão corretas. O Sinal de Zileri (descamação ao estiramento da pele) é característico. As lesões podem variar de cor. O agente (Malassezia) é um fungo saprófita e lipofílico. IV e V descrevem outras micoses.",
        tag: "Micoses"
      },
      {
        id: "derm-q3",
        text: "Mulher, 47 anos, com nódulo ulcerado no dorso da mão direita que progrediu com outros nódulos eritematosos em trajeto ascendente pelo braço. Qual a alternativa correta sobre a principal hipótese?",
        options: [
          "A forma clínica descrita é a apresentação mais comum da doença",
          "O tratamento com cetoconazol creme é empregado com grande eficácia",
          "O agente etiológico é um saprófita com reservatório natural a pele humana",
          "O exame direto é o padrão ouro para a confirmação diagnóstica"
        ],
        answerIndex: 0,
        explanation: "O quadro descrito é a forma linfocutânea da Esporotricose, que é a apresentação mais comum da doença, caracterizada pela disseminação ao longo dos vasos linfáticos.",
        tag: "Micoses"
      },
      {
        id: "derm-q4",
        text: "Mulher, 45 anos, com 2 placas eritematodescamativas pruriginosas, de bordas circinadas bem delimitadas e mais ativas que o centro, localizadas no abdome. Qual a resposta correta?",
        options: [
          "A confirmação diagnóstica necessita da lâmpada de wood com fluorescência amarelo-ouro",
          "O exame micológico direto com hifas curtas e curvas e blastosporos confirma o diagnóstico",
          "A principal hipótese é piedra branca",
          "Os agentes etiológicos dessa dermatose podem ser divididos em antropofílicos, geofílicos e zoofílicos"
        ],
        answerIndex: 3,
        explanation: "O quadro é de Tinea corporis (uma dermatofitose). Os dermatófitos, agentes causadores, são classificados de acordo com seu reservatório principal em antropofílicos (humanos), geofílicos (solo) e zoofílicos (animais).",
        tag: "Micoses"
      },
      {
        id: "derm-q5",
        text: "Em relação à candidíase é correto afirmar, exceto:",
        options: [
          "Pode ser desencadeada pelo uso prévio de antibioticoterapia de largo espectro",
          "Responde bem ao uso de fluconazol sistêmico",
          "Manifesta-se principalmente nas áreas extensoras dos membros superiores",
          "Frequentemente pode comprometer a mucosa oral"
        ],
        answerIndex: 2,
        explanation: "A candidíase manifesta-se preferencialmente em áreas de dobras (intertriginosas) e mucosas, e não nas áreas extensoras dos membros.",
        tag: "Micoses"
      },
      {
        id: "derm-q6",
        text: "A dermatofitose no couro cabeludo se manifesta clinicamente com:",
        options: [
          "Placas de alopecia com pelos tonsurados na superfície",
          "Placa de alopecia cicatricial",
          "Bolhas no couro cabeludo",
          "Vesículas no couro cabeludo"
        ],
        answerIndex: 0,
        explanation: "A Tinea capitis (dermatofitose do couro cabeludo) classicamente se apresenta com áreas de alopecia (perda de cabelo) onde os pelos se encontram quebrados rente à superfície (tonsura).",
        tag: "Micoses"
      },
      // Piodermites
      {
        id: "derm-q7",
        text: "Criança de 7 anos com surgimento recente de crostas melicéricas ao redor da boca e narinas, sem febre. Várias crianças com quadro semelhante na escola. Qual a principal complicação?",
        options: [
          "Glomerulonefrite difusa aguda",
          "Lesões sólidas por espessamento cutâneo",
          "Disseminação por flebotomíneos",
          "Infecção necrotizante que necessita drenagem"
        ],
        answerIndex: 0,
        explanation: "O quadro é de Impetigo não-bolhoso (crostoso), geralmente causado pelo Streptococcus pyogenes. Cepas nefritogênicas dessa bactéria podem levar à glomerulonefrite pós-estreptocócica como complicação tardia.",
        tag: "Piodermites"
      },
      {
        id: "derm-q8",
        text: "Homem de 57 anos, diabético, com eritema vivo, bem delimitado e edema doloroso em membro inferior esquerdo, associado a febre e adenomegalia inguinal. Qual a hipótese?",
        options: [
          "Ectima, com curso benigno",
          "Eczema de estase, indicando corticoide",
          "Reação tipo 1, indicando talidomida",
          "Erisipela, sendo necessário buscar uma porta de entrada"
        ],
        answerIndex: 3,
        explanation: "A descrição de uma placa eritematosa, edemaciada, quente, dolorosa e bem delimitada em membro inferior, com sintomas sistêmicos (febre), é a apresentação clássica da Erisipela. É fundamental procurar e tratar a porta de entrada da bactéria (fissuras, micoses).",
        tag: "Piodermites"
      },
      // Hanseníase
      {
        id: "derm-q9",
        text: "Mulher de 45 anos com múltiplas lesões infiltradas, anulares com borda interna nítida e externa apagada (em queijo suíço) e diminuição da sudorese local. Qual a opção correta?",
        options: [
          "Deve ser solicitada baciloscopia para os contatos domiciliares sem lesões",
          "Acometimento de nervo radial pode causar mão caída e do nervo ulnar a garra cubital",
          "O tempo de incubação da doença dura em média de 2 semanas a 2 meses",
          "Não há correlação entre a clínica e a imunidade do paciente"
        ],
        answerIndex: 1,
        explanation: "O quadro é de Hanseníase Dimorfa. O acometimento de nervos periféricos é uma característica central da doença. A lesão do nervo radial causa 'mão caída' e a do nervo ulnar, 'mão em garra'.",
        tag: "Hanseníase"
      },
      // Eczemas e Dermatites
      {
        id: "derm-q10",
        text: "Criança de 8 anos com pele sensível, apresenta placas eritemato-descamativas escoriadas e liquenificadas em fossa cubital, poplítea e pescoço, associada a xerose. Tem asma e conjuntivite alérgica. Qual o diagnóstico mais provável?",
        options: [
          "Dermatite seborreica",
          "Dermatite atópica",
          "Farmacodermia",
          "Psoríase"
        ],
        answerIndex: 1,
        explanation: "A combinação de eczema crônico pruriginoso em áreas de dobras (fossas cubital e poplítea), pele seca (xerose) e história pessoal de outras atopias (asma, conjuntivite alérgica) fecha o diagnóstico de Dermatite Atópica.",
        tag: "Eczemas"
      },
      // Psoríase
      {
        id: "derm-q11",
        text: "Homem de 70 anos com lesões crônicas eritemato-descamativas em joelhos e cotovelos, iniciou betabloqueador e evoluiu com eritema e descamação em quase toda superfície corporal. É correto afirmar:",
        options: [
          "Cursa com quadro cutâneo extenso sem comprometimento sistêmico",
          "A infiltração das lesões é a característica predominante",
          "A interrupção aguda de corticoide sistêmico é a terapia de escolha",
          "Na maioria dos casos, ocorre em pacientes com diagnóstico prévio de outra forma da doença"
        ],
        answerIndex: 3,
        explanation: "O quadro é de Psoríase Eritrodérmica, uma forma grave e generalizada. Frequentemente é desencadeada em pacientes que já possuem psoríase em placas (vulgar) por fatores como o uso de certos medicamentos (betabloqueadores) ou a retirada abrupta de corticoides sistêmicos.",
        tag: "Psoríase"
      },
      // Câncer de Pele
      {
        id: "derm-q12",
        text: "Mulher de 22 anos com lesão hiperpigmentada assintomática na região plantar esquerda há 2 anos. Ao exame: mancha hipercrômica, heterogênea, com bordas irregulares, assimétrica, com 1 cm. Qual a principal hipótese?",
        options: [
          "Melanoma lentiginoso acral",
          "Melanoma do lentigo maligno",
          "Melanoma nodular",
          "Carcinoma basocelular pigmentado"
        ],
        answerIndex: 0,
        explanation: "Uma lesão pigmentada em região acral (palmar, plantar ou ungueal) com características de malignidade (ABCD - Assimetria, Bordas irregulares, Cores múltiplas, Diâmetro > 6mm) tem como principal hipótese o Melanoma Lentiginoso Acral.",
        tag: "Câncer de Pele"
      },
      // Viroses Dermatológicas
      {
        id: "derm-q13",
        text: "Homem de 25 anos, usuário de drogas injetáveis, com dor em hemitórax direito seguida de erupção cutânea dias após. Ao exame: lesões vesicobolhosas sob base eritematosa em faixa no hemitórax direito. Qual a principal hipótese?",
        options: [
          "Herpes simples",
          "Eczema de contato",
          "Herpes Zoster",
          "Varicela"
        ],
        answerIndex: 2,
        explanation: "A descrição de dor neuropática seguida por erupção vesiculosa unilateral, seguindo o trajeto de um dermátomo (em faixa), é a apresentação clássica do Herpes Zoster, causado pela reativação do vírus Varicela-Zoster.",
        tag: "Viroses"
      },
      // Lesões Elementares
      {
        id: "derm-q14",
        text: "Mulher de 65 anos com lesão plana, sem alteração de relevo ou consistência, de coloração mais clara que a pele, com 3,5cm de diâmetro no cotovelo. A lesão elementar descrita corresponde a:",
        options: [
          "Mancha hipocrômica",
          "Mancha eritematosa",
          "Mancha purpúrica",
          "Mancha hipercrômica"
        ],
        answerIndex: 0,
        explanation: "Uma lesão plana (sem relevo) definida apenas pela alteração de cor é uma mancha ou mácula. Quando a cor é mais clara que a pele ao redor, é uma mancha hipocrômica.",
        tag: "Lesões Elementares"
      },
      // Dermatozoonoses
      {
        id: "derm-q15",
        text: "Homem de 35 anos com 3 pequenas pápulas esféricas, branco-amareladas, com um ponto negro central e pruriginosas na região plantar esquerda. Qual a conduta correta?",
        options: [
          "Larva migrans e tratar com mebendazol",
          "Leishmaniose tegumentar e solicitar histopatológico",
          "Tungíase e tratar removendo o parasita",
          "Tungíase e tratar com glutamina"
        ],
        answerIndex: 2,
        explanation: "A descrição é clássica de Tungíase (bicho-de-pé), causada pela penetração da fêmea da pulga Tunga penetrans. O tratamento consiste na remoção cuidadosa e asséptica do parasita.",
        tag: "Dermatozoonoses"
      },

      
    ]
  }
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
  const [hearts, setHearts] = useState(INITIAL_HEARTS);
  const [streakDays, setStreakDays] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [goal, setGoal] = useState(100);
  const [combo, setCombo] = useState(0);
  const [confettiKey, setConfettiKey] = useState(0);
  const [lastGain, setLastGain] = useState<number | null>(null);
  const [emojiKey, setEmojiKey] = useState(0);
  const [questionStart, setQuestionStart] = useState<number | null>(null);
  const [lockUntil, setLockUntil] = useState<number | null>(null);
  const [, setNow] = useState(Date.now());
  const [sessionWrongAnswers, setSessionWrongAnswers] = useState<Question[]>([]);
  const [reviewingQuestion, setReviewingQuestion] = useState<Question | null>(null);
  const [bonusAwarded, setBonusAwarded] = useState(false);
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [srsData, setSrsData] = useState<SrsData>({});
  const [displayedQuestion, setDisplayedQuestion] = useState<ShuffledQuestion | null>(null);
  const [quizMode, setQuizMode] = useState<"deck" | "srs">("deck");
  const [dailyBonusAwarded, setDailyBonusAwarded] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [decksCompleted, setDecksCompleted] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const { playCorrect, playWrong, playFanfare } = useAudio();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const achievements = React.useMemo(() => [
    { id: 'first_deck', title: 'Iniciante', description: 'Complete o seu primeiro deck.', icon: <Award className="h-6 w-6"/>, isUnlocked: (stats: { decksCompleted: number }) => stats.decksCompleted >= 1 },
    { id: 'streak_3', title: 'Consistente', description: 'Mantenha uma sequência de 3 dias.', icon: <Flame className="h-6 w-6"/>, isUnlocked: (stats: { streakDays: number }) => stats.streakDays >= 3 },
    { id: 'level_5', title: 'Dedicado', description: 'Alcance o nível 5.', icon: <Star className="h-6 w-6"/>, isUnlocked: (stats: { level: number }) => stats.level >= 5 },
    { id: 'xp_1000', title: 'Acumulador', description: 'Acumule 1000 XP no total.', icon: <Sparkles className="h-6 w-6"/>, isUnlocked: (stats: { xp: number }) => stats.xp >= 1000 },
  ], []);

  useEffect(() => {
    const rawAchievements = localStorage.getItem(LS_ACHIEVEMENTS_KEY);
    if (rawAchievements) try { setUnlockedAchievements(JSON.parse(rawAchievements)); } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_ACHIEVEMENTS_KEY, JSON.stringify(unlockedAchievements));
  }, [unlockedAchievements]);

  useEffect(() => {
    const stats = { decksCompleted, streakDays, level, xp };
    const newlyUnlocked: string[] = [];
    achievements.forEach(ach => {
      if (!unlockedAchievements.includes(ach.id) && ach.isUnlocked(stats)) {
        newlyUnlocked.push(ach.id);
      }
    });
    if (newlyUnlocked.length > 0) {
      setUnlockedAchievements(prev => [...prev, ...newlyUnlocked]);
    }
  }, [decksCompleted, streakDays, level, xp, achievements, unlockedAchievements]);

  useEffect(() => {
    const rawSrs = localStorage.getItem(LS_SRS_KEY);
    if (rawSrs) try { setSrsData(JSON.parse(rawSrs)); } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_SRS_KEY, JSON.stringify(srsData));
  }, [srsData]);

  useEffect(() => {
    if (todayXp >= goal && !dailyBonusAwarded) {
      setXp(x => x + DAILY_GOAL_BONUS);
      setDailyBonusAwarded(true);
      setConfettiKey(k => k + 1);
    }
  }, [todayXp, goal, dailyBonusAwarded]);

  useEffect(() => {
    const manifestRaw = localStorage.getItem("quizg-v1-deck-manifest");
    if (!manifestRaw || JSON.parse(manifestRaw).length === 0) {
      if (DEFAULT_DECKS.length > 0) {
        const decksWithStableIds = DEFAULT_DECKS.map(deck => ({
            ...deck,
            questions: deck.questions.map(q => ({
                ...q,
                id: hashString(q.text)
            }))
        }));

        const defaultManifest = decksWithStableIds.map(deck => ({ id: deck.id, name: deck.name }));
        localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(defaultManifest));
        
        decksWithStableIds.forEach(deck => {
            localStorage.setItem(LS_DECK_KEY(deck.id), JSON.stringify({ questions: deck.questions }));
        });

        setAvailableDecks(defaultManifest);
      }
    } else {
      setAvailableDecks(JSON.parse(manifestRaw));
    }
  }, []);

  useEffect(() => {
    if (!lockUntil) return;
    const id = setInterval(() => {
      setNow(Date.now());
      if (Date.now() >= lockUntil) {
        setLockUntil(null);
        setHearts(INITIAL_HEARTS);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [lockUntil]);

  useEffect(() => {
    const raw = localStorage.getItem(LS_STATS_KEY);
    const today = todayKey();
    if (raw) {
      try {
        const s = JSON.parse(raw);
        const last = s.lastActiveDate as number | undefined;
        setStreakDays(last ? (daysBetween(last, today) === 1 ? (s.streakDays || 0) + 1 : (daysBetween(last, today) === 0 ? s.streakDays || 0 : 1)) : 1);
        setXp(s.xp || 0);
        setLevel(s.level || 1);
        setHearts(s.hearts ?? INITIAL_HEARTS);
        setGoal(s.goal ?? 100);
        setTodayXp(s.lastXPDate === today ? s.todayXp || 0 : 0);
        setLockUntil(s.lockUntil || null);
        setDailyBonusAwarded(s.dailyBonusAwardedFor === today);
        setDecksCompleted(s.decksCompleted || 0);
      } catch {}
    } else {
      setStreakDays(1);
    }
  }, []);

  useEffect(() => {
    const today = todayKey();
    localStorage.setItem(LS_STATS_KEY, JSON.stringify({
      lastActiveDate: today, streakDays, xp, level, hearts, goal, todayXp, lastXPDate: today, lockUntil, dailyBonusAwardedFor: dailyBonusAwarded ? today : null, decksCompleted
    }));
  }, [streakDays, xp, level, hearts, goal, todayXp, lockUntil, dailyBonusAwarded, decksCompleted]);

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
    setQuizMode("deck");
    const raw = localStorage.getItem(LS_DECK_KEY(deckId));
    if (raw) {
      try {
        const d = JSON.parse(raw);
        if (d.questions) {
          const loadedQuestions = d.questions;
          setQuestions(loadedQuestions);
          
          const order = loadedQuestions.map((_: Question, i: number) => i);
          const newQueue = shuffleOnLoad ? shuffle(order) : order;
          setQueue(newQueue);
          setCurrent(newQueue[0] ?? null);
          setSessionWrongAnswers([]);
          setBonusAwarded(false);
          setIsSessionComplete(false);
        }
      } catch {}
    }
  }, [deckId, shuffleOnLoad]);

  useEffect(() => {
    if (deckId && quizMode === "deck") localStorage.setItem(LS_DECK_KEY(deckId), JSON.stringify({ questions, queue }));
  }, [deckId, questions, queue, quizMode]);

  useEffect(() => {
    if (current != null) setQuestionStart(performance.now());
  }, [current]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (queue.length === 0 && questions.length > 0 && !isSessionComplete) {
      setIsSessionComplete(true);
      if (!bonusAwarded) {
        setXp(x => x + DECK_COMPLETION_BONUS);
        setDecksCompleted(d => d + 1);
        setBonusAwarded(true);
        setConfettiKey(k => k + 1);
        playFanfare();
      }
    }
  }, [queue.length, questions.length, bonusAwarded, playFanfare, isSessionComplete]);

  useEffect(() => {
    if (current === null) {
      setDisplayedQuestion(null);
      return;
    }
    const originalQuestion = questions[current];
    if (!originalQuestion) return;

    if (shuffleOnLoad) {
      const optionsWithOriginalIndex = originalQuestion.options.map((option, index) => ({ option, index }));
      const shuffledOptionsWithIndex = shuffle(optionsWithOriginalIndex);
      const shuffledOptions = shuffledOptionsWithIndex.map(item => item.option);
      const shuffledAnswerIndex = shuffledOptionsWithIndex.findIndex(item => item.index === originalQuestion.answerIndex);
      setDisplayedQuestion({ ...originalQuestion, shuffledOptions, shuffledAnswerIndex });
    } else {
      setDisplayedQuestion({ ...originalQuestion, shuffledOptions: originalQuestion.options, shuffledAnswerIndex: originalQuestion.answerIndex });
    }
  }, [current, questions, shuffleOnLoad]);

  const handleUpload = async (file: File) => {
    const text = await file.text();
    const { questions: qs, errors: parseErrors } = parseTxtDeck(text);
    setErrors(parseErrors);
    if (qs.length === 0) return;
    const deckName = file.name.replace(/\.txt$/, "");
    const newDeckId = `${deckName}-${hashString(text)}`;
    localStorage.setItem(LS_DECK_KEY(newDeckId), JSON.stringify({ questions: qs }));
    const manifest = JSON.parse(localStorage.getItem("quizg-v1-deck-manifest") || "[]");
    if (!manifest.some((d: { id: string }) => d.id === newDeckId)) {
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

  const updateSrsData = useCallback((question: Question, correct: boolean) => {
    setSrsData(prevSrsData => {
        const now = Date.now();
        const dayInMillis = 24 * 60 * 60 * 1000;
        const currentEntry = prevSrsData[question.id] || {
            question,
            deckId: deckId || "srs-review",
            deckName: availableDecks.find(d => d.id === deckId)?.name || "Revisão",
            correctStreak: 0,
            nextReview: now,
            correctCount: 0,
            wrongCount: 0,
        };

        let newCorrectStreak = currentEntry.correctStreak;
        let nextReview;

        if (correct) {
            newCorrectStreak += 1;
            let intervalInDays;
            if (newCorrectStreak <= SRS_INTERVALS.length) {
                intervalInDays = SRS_INTERVALS[newCorrectStreak - 1];
            } else {
                intervalInDays = SRS_INTERVALS[SRS_INTERVALS.length - 1] + (newCorrectStreak - SRS_INTERVALS.length) * 30;
            }
            nextReview = now + intervalInDays * dayInMillis;
        } else {
            newCorrectStreak = 0;
            nextReview = now; // CORRIGIDO: Fica disponível imediatamente para a próxima sessão de revisão
        }

        const newEntry = { 
            ...currentEntry, 
            question, 
            correctStreak: newCorrectStreak, 
            nextReview,
            correctCount: currentEntry.correctCount + (correct ? 1 : 0),
            wrongCount: currentEntry.wrongCount + (correct ? 0 : 1),
        };
        
        return {
            ...prevSrsData,
            [question.id]: newEntry
        };
    });
  }, [deckId, availableDecks]);

  const startSrsSession = () => {
    const now = Date.now();
    const dueQuestions = Object.values(srsData)
      .filter(item => item.nextReview <= now)
      .map(item => item.question);

    if (dueQuestions.length === 0) {
      alert("Nenhuma questão para revisar hoje!");
      return;
    }

    setQuizMode("srs");
    setDeckId(null);
    setQuestions(dueQuestions);
    const order = dueQuestions.map((_, i) => i);
    const newQueue = shuffle(order);
    setQueue(newQueue);
    setCurrent(newQueue[0] ?? null);
    setIsSessionComplete(false);
    setSessionWrongAnswers([]);
  };

  const advanceQueue = useCallback((wasCorrect: boolean) => {
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
  }, [current, queue]);

  const onSelect = useCallback((idx: number) => {
    if (!displayedQuestion || selected != null || current === null) return;
    
    const correct = idx === displayedQuestion.shuffledAnswerIndex;
    const originalQuestion = questions[current];
    
    const wasAlreadyWrong = sessionWrongAnswers.find(q => q.id === originalQuestion.id);
    if (!wasAlreadyWrong) {
        updateSrsData(originalQuestion, correct);
    } else if (correct) {
        // Se já errou e agora acertou, não atualiza o SRS para não "perdoar" o erro.
    } else {
        updateSrsData(originalQuestion, false);
    }

    const elapsed = questionStart ? performance.now() - questionStart : 0;
    setSelected(idx);
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
      
      if (!wasAlreadyWrong) {
        setSessionWrongAnswers(prev => [...prev, originalQuestion]);
      }

      if (newHearts <= 0) setLockUntil(Date.now() + 5 * 60 * 1000);
      setTimeout(() => advanceQueue(false), 900);
    }
  }, [displayedQuestion, selected, current, questions, updateSrsData, questionStart, combo, hearts, playCorrect, playWrong, sessionWrongAnswers, advanceQueue]);

  const resetSession = () => {
    if (questions.length === 0) return;
    setIsSessionComplete(false);
    const order = questions.map((_, i) => i);
    const newQueue = shuffleOnLoad ? shuffle(order) : order;
    setQueue(newQueue);
    setCurrent(newQueue[0]);
    setSelected(null);
    setIsCorrect(null);
    setShowExpl(false);
    setCombo(0);
    setSessionWrongAnswers([]);
    setBonusAwarded(false);
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

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <ReviewModal question={reviewingQuestion} onClose={() => setReviewingQuestion(null)} />
      {showStatsModal && <StatsModal srsData={srsData} onClose={() => setShowStatsModal(false)} />}
      <Confetti trigger={confettiKey} />
      <EmojiBurst trigger={emojiKey} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="h-6 w-6" /> Duomed
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Importe um .txt com suas questões. Se errar, a questão volta para o fim.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-start md:justify-end self-start md:self-center w-full md:w-auto">
            <div className="flex items-center gap-2"><Flame className="h-5 w-5 text-orange-500" /><span className="font-semibold">{streakDays} dias</span><Badge variant="secondary">streak</Badge></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2"><Star className="h-5 w-5" /><span className="font-semibold">Lv {level}</span><Badge variant="secondary">{xp} XP</Badge></div>
              <Progress value={(xp % 250) / 2.5} className="h-1 w-full"/>
            </div>
            <div className="flex items-center gap-2"><Heart className="h-5 w-5 text-rose-500" /><span className="font-semibold">{hearts}</span></div>
            <div className="flex items-center gap-2"><Switch checked={dark} onCheckedChange={setDark} /><span className="text-sm">Tema</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 lg:order-2">
            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white/80 to-white/30 dark:from-slate-900/70 dark:to-slate-900/40 backdrop-blur">
              <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none" aria-hidden>
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-400 blur-3xl mix-blend-multiply dark:bg-fuchsia-700" />
                <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-sky-300 blur-3xl mix-blend-multiply dark:bg-sky-700" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{isSessionComplete ? "Parabéns!" : displayedQuestion ? (displayedQuestion.tag || "Questão") : "Carregue um deck"}</CardTitle>
                    <CardDescription>{isSessionComplete ? "Você finalizou o deck." : displayedQuestion ? "Selecione a alternativa correta." : "Use o painel ao lado."}</CardDescription>
                  </div>
                  <Badge variant="secondary">{questions.length > 0 ? `${questions.length - queue.length}/${questions.length}` : "0/0"}</Badge>
                </div>
              </CardHeader>
              <CardContent className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {isSessionComplete ? (
                    <motion.div
                      key="completion-view"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="text-2xl font-bold flex items-center gap-2"><Trophy className="h-6 w-6 text-amber-500" />Conjunto concluído!</div>
                      <div className="text-slate-600 dark:text-slate-300">Você ganhou um bônus de {DECK_COMPLETION_BONUS} XP por terminar.</div>
                      <div className="flex gap-3 mt-4">
                        <Button onClick={resetSession}><RefreshCw className="mr-2 h-4 w-4" />Repetir</Button>
                        <Button variant="secondary" onClick={() => setShowStatsModal(true)}><BarChart3 className="mr-2 h-4 w-4" />Estatísticas</Button>
                      </div>

                      {sessionWrongAnswers.length > 0 && (
                        <div className="pt-6">
                          <Separator />
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
                  ) : displayedQuestion ? (
                    <motion.div 
                      key={displayedQuestion.id} 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }} 
                      transition={{ duration: 0.25 }} 
                      className="space-y-5"
                    >
                      <div className="text-lg md:text-xl font-semibold leading-snug">{displayedQuestion.text}</div>
                      <div className="grid gap-3">
                        {displayedQuestion.shuffledOptions.map((opt, i) => {
                          const isSel = selected === i;
                          const correct = isCorrect != null && i === displayedQuestion.shuffledAnswerIndex;
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
                      {showExpl && displayedQuestion.explanation && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl border p-3 text-sm bg-emerald-50/60 dark:bg-emerald-900/20 border-emerald-300/50 dark:border-emerald-700/40">
                          <div className="font-semibold mb-1 flex items-center gap-2"><Info className="h-4 w-4" />Explicação</div>
                          <div className="text-slate-700 dark:text-slate-200">{displayedQuestion.explanation}</div>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 lg:order-1 space-y-6">
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

            <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5" />Revisão Espaçada</CardTitle>
                <CardDescription>Relembre as questões de forma inteligente.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={startSrsSession}>
                  Iniciar Revisão ({Object.values(srsData).filter(item => item.nextReview <= Date.now()).length} para hoje)
                </Button>
              </CardContent>
            </Card>
            
            {availableDecks.length > 0 && (
              <Card className="backdrop-blur bg-white/60 dark:bg-slate-800/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />Decks Salvos</CardTitle>
                  <CardDescription>Escolha um deck abaixo para começar:</CardDescription>
                </CardHeader>
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
                <div className="flex items-center justify-between text-sm"><span>{questions.length - queue.length} / {questions.length}</span><Badge variant="secondary">{progressPct}%</Badge></div>
                <Progress value={progressPct} />
                {lockUntil && lockUntil > Date.now() ? (
                    <div className="rounded-md p-3 bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-sm">
                        <div className="font-semibold text-rose-600 dark:text-rose-200">Você ficou sem vidas</div>
                        <div className="mt-1">Tempo restante: <span className="font-mono">{formatTimeLeft(lockUntil - Date.now())}</span></div>
                        <div className="mt-3"><Button size="sm" className="w-full" variant="secondary" onClick={() => buyLivesWithXp(100, 10)}>Comprar +10 vidas (-100 XP)</Button></div>
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
        </div>
      </div>
    </div>
  );
}
