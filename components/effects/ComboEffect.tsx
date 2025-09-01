import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface ComboEffectProps {
  trigger: number;
}

export function ComboEffect({ trigger }: ComboEffectProps) {
  useEffect(() => {
    if (trigger > 0) {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  }, [trigger]);

  return null;
}