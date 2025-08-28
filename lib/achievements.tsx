import { Award, Flame, Star, Sparkles } from "lucide-react";
import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  { 
    id: 'first_deck', 
    title: 'Iniciante', 
    description: 'Complete o seu primeiro deck.', 
    icon: Award, // MUDANÇA: Apenas a referência, sem < >
    isUnlocked: (stats) => stats.decksCompleted >= 1 
  },
  { 
    id: 'streak_3', 
    title: 'Consistente', 
    description: 'Mantenha uma sequência de 3 dias.', 
    icon: Flame, // MUDANÇA: Apenas a referência, sem < >
    isUnlocked: (stats) => stats.streakDays >= 3 
  },
  { 
    id: 'level_5', 
    title: 'Dedicado', 
    description: 'Alcance o nível 5.', 
    icon: Star, // MUDANÇA: Apenas a referência, sem < >
    isUnlocked: (stats) => stats.level >= 5 
  },
  { 
    id: 'xp_1000', 
    title: 'Acumulador', 
    description: 'Acumule 1000 XP no total.', 
    icon: Sparkles, // MUDANÇA: Apenas a referência, sem < >
    isUnlocked: (stats) => stats.xp >= 1000 
  },
];