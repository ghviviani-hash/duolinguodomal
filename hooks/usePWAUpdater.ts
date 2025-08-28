"use client";

import { useState, useEffect } from 'react';

export function usePWAUpdater() {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    // Esta verificação garante que o código só corre no browser
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const wb = window.workbox;

      // Adiciona um listener que é acionado quando um novo
      // Service Worker está instalado mas à espera para ativar.
      wb.addEventListener('waiting', () => {
        setIsUpdateAvailable(true);
      });

      // Adiciona um listener que é acionado quando o novo
      // Service Worker assume o controlo.
      wb.addEventListener('controlling', () => {
        // Recarrega a página para usar a nova versão da app
        window.location.reload();
      });

      // Regista o Service Worker
      wb.register();
    }
  }, []);

  const updateApp = () => {
    // Diz ao novo Service Worker para saltar a espera e ativar
    if (typeof window !== 'undefined' && window.workbox !== undefined) {
      const wb = window.workbox;
      wb.messageSkipWaiting();
    }
  };

  return { isUpdateAvailable, updateApp };
}