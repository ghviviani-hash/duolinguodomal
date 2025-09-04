// components/quiz/WrongAnswersStatsModal.tsx

import React, { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, History, Clock } from "lucide-react";
import { Question } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

// Interfaces para os dados que esperamos do localStorage
interface WrongAnswer {
  question: Question;
  timestamp: number;
}

interface WrongAnswerLists {
  recent: WrongAnswer[];
  allTime: WrongAnswer[];
}

interface WrongAnswersStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Função auxiliar para calcular os temas mais errados
const calculateTopTags = (answers: WrongAnswer[]) => {
  if (answers.length === 0) return [];

  const tagCounts = answers.reduce((acc, wa) => {
    const tag = wa.question.tag;
    if (tag) {
      acc[tag] = (acc[tag] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5); // Pega os 5 temas mais recorrentes
};

export function WrongAnswersStatsModal({ isOpen, onClose }: WrongAnswersStatsModalProps) {
  const [stats, setStats] = useState<WrongAnswerLists>({ recent: [], allTime: [] });

  // Carrega os dados do localStorage sempre que o modal for aberto
  useEffect(() => {
    if (isOpen) {
      try {
        const savedErrors = localStorage.getItem("wrongAnswerLists");
        if (savedErrors) {
          setStats(JSON.parse(savedErrors));
        }
      } catch (error) {
        console.error("Falha ao carregar estatísticas de erros:", error);
      }
    }
  }, [isOpen]);

  const recentTopics = useMemo(() => calculateTopTags(stats.recent), [stats.recent]);
  const allTimeTopics = useMemo(() => calculateTopTags(stats.allTime), [stats.allTime]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Evita que o clique feche o modal
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Seu Desempenho</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Seção de Erros Recentes */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-slate-800 dark:text-slate-200">
                  <Clock className="h-5 w-5 mr-2 text-sky-500" />
                  Temas a Revisar (Últimas 24h)
                </h3>
                {recentTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {recentTopics.map(([tag, count]) => (
                      <Badge key={tag} variant="secondary">
                        {tag} ({count} {count > 1 ? 'erros' : 'erro'})
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">Nenhum erro registrado nas últimas 24 horas. Ótimo trabalho!</p>
                )}
              </div>

              {/* Seção de Histórico de Erros */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center text-slate-800 dark:text-slate-200">
                  <History className="h-5 w-5 mr-2 text-amber-500" />
                  Histórico de Erros
                </h3>
                {allTimeTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {allTimeTopics.map(([tag, count]) => (
                      <Badge key={tag} variant="destructive">
                        {tag} ({count} {count > 1 ? 'erros' : 'erro'})
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">Você ainda não errou nenhuma questão. Continue assim!</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}