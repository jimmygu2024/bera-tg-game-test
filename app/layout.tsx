'use client'

import { useEffect } from "react";
import "./globals.css";
import 'swiper/css';
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TabBarWrapper } from '@/components/Layout/TabBarWrapper';
import TelegramProvider from '@/context/TelegramContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    async function loadPlugin() {
      if (typeof window !== 'undefined') {
        const VConsole = await import('vconsole');
        new VConsole.default();
      }
    }
    loadPlugin();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Beraciaga_Test</title>
      </head>
      <body>
      <TonConnectUIProvider manifestUrl='/tonconnect-manifest.json'>
          <TelegramProvider>
          <TabBarWrapper>{children}</TabBarWrapper>
          </TelegramProvider>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}