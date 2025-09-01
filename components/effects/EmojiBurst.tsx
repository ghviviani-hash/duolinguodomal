import { motion, AnimatePresence } from "framer-motion";

interface EmojiBurstProps {
  trigger: number;
  combo: number;
}

export function EmojiBurst({ trigger, combo }: EmojiBurstProps) {
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