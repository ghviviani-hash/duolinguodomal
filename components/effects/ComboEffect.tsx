"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ComboEffectProps {
  milestone: number;
}

export function ComboEffect({ milestone }: ComboEffectProps) {
  const [activeMilestones, setActiveMilestones] = useState<number[]>([]);

  useEffect(() => {
    if (milestone > 0 && !activeMilestones.includes(milestone)) {
      setActiveMilestones(prev => [...prev, milestone]);
      const timer = setTimeout(() => {
        setActiveMilestones(prev => prev.filter(m => m !== milestone));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [milestone, activeMilestones]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {activeMilestones.map((m) =>
          Array.from({ length: Math.min(m, 100) }).map((_, i) => ( // Limite de 100 emojis para performance
            <motion.div
              key={`${m}-${i}`}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 0,
                x: (Math.random() - 0.5) * window.innerWidth * 0.5,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.8],
                y: window.innerHeight + 50,
                rotate: (Math.random() - 0.5) * 720,
              }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{
                duration: 2 + Math.random() * 1,
                delay: Math.random() * 0.5,
                ease: "easeIn",
              }}
              className="absolute left-1/2 top-[-50px] text-3xl md:text-4xl"
            >
              🔥
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
}