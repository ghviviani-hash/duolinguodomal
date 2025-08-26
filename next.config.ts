/** @type {import('next').NextConfig} */

// Importa o plugin do PWA
const withPWA = require('next-pwa')({
  dest: 'public', // Onde os ficheiros do PWA serão guardados
  register: true, // Regista o service worker automaticamente
  skipWaiting: true, // Garante que as atualizações sejam aplicadas rapidamente
});

const nextConfig = {
  // As suas outras configurações do Next.js podem estar aqui
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// "Envolve" a sua configuração com o PWA
module.exports = withPWA(nextConfig);
