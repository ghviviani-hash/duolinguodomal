"use client";

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Garante que o código só corre no browser, onde 'window' existe
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Atualiza o estado se o tamanho do ecrã mudar
      const listener = () => {
        setMatches(media.matches);
      };
      
      // Adiciona o listener e define o estado inicial
      media.addEventListener('change', listener);
      setMatches(media.matches);

      // Limpa o listener quando o componente é desmontado
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
}