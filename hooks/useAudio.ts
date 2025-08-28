import { useRef, useCallback } from 'react';

export function useAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  
  const ensureCtx = useCallback(() => {
    // AudioContext precisa ser criado após uma interação do utilizador, 
    // então garantimos que ele exista apenas quando um som for ser tocado.
    if (typeof window !== "undefined" && !ctxRef.current) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          ctxRef.current = new AudioContext();
        }
      } catch (e) {
        console.error("Web Audio API is not supported in this browser", e);
      }
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

  const playCorrect = useCallback(() => {
    // Toca uma sequência de notas ascendentes para um som de acerto
    [523, 659, 784, 1047].forEach((f, i) => playOsc(f, 0.18, "triangle", 0.03, i * 0.08));
  }, [playOsc]);
  
  const playWrong = useCallback(() => {
    // Toca uma nota grave para um som de erro
    playOsc(160, 0.3, "sawtooth", 0.035);
  }, [playOsc]);
  
  const playFanfare = useCallback(() => {
    // Toca uma fanfarra para celebrar a conclusão de um deck
    [523, 659, 784, 1047, 1319].forEach((f, i) => playOsc(f, 0.22, "square", 0.03, i * 0.12));
  }, [playOsc]);

  return { playCorrect, playWrong, playFanfare };
}