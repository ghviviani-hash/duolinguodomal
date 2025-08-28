// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UpdateBanner } from "@/components/layout/UpdateBanner"; // Importe o banner

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "duomed",
  description: "Estude e teste os seus conhecimentos de forma divertida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <meta name="application-name" content="duomed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="QuizApp" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
      </head>
      <body className={inter.className}>
        {children}
        <UpdateBanner /> {/* Adicione o banner aqui, no final do body */}
      </body>
    </html>
  );
}