import { Question } from '@/types';
import { hashString } from '@/lib/utils';

const OPTION_RE = /^([ABCD])\s*[\)\.\-\:]\s*(.*)$/i;
const STAR_OPTION_RE = /^\*\s*([ABCD])\s*[\)\.\-\:]\s*(.*)$/i;

export function parseTxtDeck(txt: string): { questions: Question[]; errors: string[] } {
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
} // <-- A CHAVE '}' EM FALTA ESTAVA AQUI!