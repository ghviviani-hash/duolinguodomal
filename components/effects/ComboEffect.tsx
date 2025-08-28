"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ComboEffectProps {
  milestone: number; // Recebe o marco atingido (10, 20, 30, etc.)
}

export function ComboEffect({ milestone }: ComboEffectProps) {
  const [key, setKey] = useState(0);

  // Usamos useEffect para detetar quando um novo marco é atingido
  useEffect(() => {
    if (milestone > 0) {
      // Mudamos a 'key' para forçar a AnimatePresence a re-renderizar o efeito
      setKey(milestone); 
    }
  }, [milestone]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {key > 0 && (
          // O número de emojis é igual ao marco atingido
          Array.from({ length: key }).map((_, i) => (
            <motion.div
              key={`${key}-${i}`} // A key única garante que a animação reinicie
              initial={{ opacity: 1, scale: 0.5, y: 0, x: 0 }}
              animate={{
                opacity: 0,
                scale: [1, 1.5, 2],
                y: (Math.random() - 0.5) * window.innerHeight * 1.2,
                x: (Math.random() - 0.5) * window.innerWidth * 1.2,
                rotate: (Math.random() - 0.5) * 540,
              }}
              transition={{
                duration: 1.5 + Math.random() * 1.5,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 text-2xl"
            >
              🔥
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
}