// hooks/useDeckManager.ts

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Deck, Question } from '@/types';
import { LS_DECK_KEY } from '@/lib/constants';
import { DEFAULT_DECKS } from '@/data/defaultDecks';
import { hashString } from '@/lib/utils';
import { parseTxtDeck } from '@/lib/parser';

export function useDeckManager() {
  const [availableDecks, setAvailableDecks] = useState<Deck[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let decksToLoad: Deck[] = []; const manifestRaw = localStorage.getItem("quizg-v1-deck-manifest");
    if (manifestRaw) {
      try {
        const manifest: { id: string, name: string }[] = JSON.parse(manifestRaw);
        manifest.forEach(deckInfo => {
          const deckRaw = localStorage.getItem(LS_DECK_KEY(deckInfo.id));
          if (deckRaw) { const deckData = JSON.parse(deckRaw); decksToLoad.push({ ...deckInfo, questions: deckData.questions || [] }); }
        });
      } catch {}
    }
    if (decksToLoad.length === 0) {
      const decksWithStableIds = DEFAULT_DECKS.map(deck => {
        const safeQuestions = Array.isArray(deck.questions) ? deck.questions : [];
        return { ...deck, questions: safeQuestions.map((q: Question) => ({ ...q, id: hashString(String(q.text || '')) })) };
      });
      const manifestForStorage = decksWithStableIds.map(deck => ({ id: deck.id, name: deck.name }));
      localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(manifestForStorage));
      decksWithStableIds.forEach(deck => { localStorage.setItem(LS_DECK_KEY(deck.id), JSON.stringify({ questions: deck.questions })); });
      decksToLoad = decksWithStableIds;
    }
    setAvailableDecks(decksToLoad);
  }, []);

  const handleUpload = useCallback(async (file: File): Promise<string | null> => {
    const text = await file.text(); const { questions: qs, errors: parseErrors } = parseTxtDeck(text);
    setErrors(parseErrors); if (qs.length === 0) return null;
    const deckName = file.name.replace(/\.txt$/, ""); const newDeckId = `${deckName}-${hashString(text)}`;
    localStorage.setItem(LS_DECK_KEY(newDeckId), JSON.stringify({ questions: qs }));
    const manifest = JSON.parse(localStorage.getItem("quizg-v1-deck-manifest") || "[]");
    if (!manifest.some((d: { id: string }) => d.id === newDeckId)) {
      const newManifest = [...manifest, { id: newDeckId, name: deckName }];
      localStorage.setItem("quizg-v1-deck-manifest", JSON.stringify(newManifest));
      setAvailableDecks(prev => [...prev, { id: newDeckId, name: deckName, questions: qs }]);
    }
    return newDeckId;
  }, []);

  const actions = useMemo(() => ({ handleUpload }), [handleUpload]);

  return { decks: availableDecks, uploadErrors: errors, fileInputRef, actions };
}