import { motion, AnimatePresence } from "framer-motion";

export function Confetti({ trigger }: { trigger: number }) {
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