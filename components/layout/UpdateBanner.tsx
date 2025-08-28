"use client";

import { usePWAUpdater } from "@/hooks/usePWAUpdater";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function UpdateBanner() {
  const { isUpdateAvailable, updateApp } = usePWAUpdater();

  return (
    <AnimatePresence>
      {isUpdateAvailable && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="p-4 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg shadow-xl flex items-center gap-4">
            <DownloadCloud className="h-6 w-6" />
            <div>
              <p className="font-semibold">Nova versão disponível!</p>
              <p className="text-sm">Recarregue para obter as últimas novidades.</p>
            </div>
            <Button 
              onClick={updateApp} 
              className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-600 text-white dark:text-white"
            >
              Atualizar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}