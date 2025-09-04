// lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina classes do Tailwind CSS de forma inteligente, evitando conflitos.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retorna o timestamp do início do dia de hoje (00:00:00).
 * Útil para comparações de datas diárias.
 */
export const todayKey = (): number => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/**
 * Calcula a diferença em dias entre dois timestamps.
 * @param a - Timestamp inicial.
 * @param b - Timestamp final.
 * @returns O número de dias entre as datas.
 */
export function daysBetween(a: number, b: number): number {
  const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
  return diff;
}

/**
 * Gera um hash simples a partir de uma string.
 * Usado para criar IDs estáveis para as perguntas.
 * @param s - A string de entrada.
 * @returns Uma string de hash.
 */
export function hashString(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0; // Converte para um inteiro de 32bit
  }
  return Math.abs(h).toString(36);
}

/**
 * Embaralha os elementos de um array de forma aleatória.
 * @param arr - O array a ser embaralhado.
 * @returns Um novo array com os elementos embaralhados.
 */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]; // Troca de elementos
  }
  return a;
}

/**
 * Formata um tempo em milissegundos para o formato "mm:ss".
 * @param ms - O tempo em milissegundos.
 * @returns A string formatada.
 */
export const formatTimeLeft = (ms: number): string => {
    // CORREÇÃO: Garante que 'ms' é um número válido antes de formatar.
    const validMs = typeof ms === 'number' && !isNaN(ms) ? ms : 0;

    const totalSeconds = Math.max(0, Math.floor(validMs / 1000));
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
};