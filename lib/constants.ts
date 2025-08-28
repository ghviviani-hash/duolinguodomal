// lib/constants.ts
export const TEMPLATE_TXT = `
# Modelo de perguntas (4 alternativas)
# ... (o resto do texto do modelo)
`
export const INITIAL_HEARTS = 10;
export const DECK_COMPLETION_BONUS = 50;
export const DAILY_GOAL_BONUS = 100;
export const SRS_INTERVALS = [1, 3, 7, 14, 30];

export const LS_STATS_KEY = "quizg-v1-stats";
export const LS_DECK_KEY = (deckId: string) => `quizg-v1-deck-${deckId}`;
export const LS_SRS_KEY = "quizg-v1-srs-data";
export const LS_ACHIEVEMENTS_KEY = "quizg-v1-achievements";