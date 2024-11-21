'use client'

import { useEffect } from "react";
import "./globals.css";
import 'swiper/css';
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TabBarWrapper } from '@/components/Layout/TabBarWrapper';
import useLogin from '@/hooks/useLogin';

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

  useLogin();
  
  return (
    <html lang="en">
      <head>
        <title>Beraciaga_Test</title>
      </head>
      <body>
      <TonConnectUIProvider manifestUrl='/tonconnect-manifest.json'>
        <TabBarWrapper>{children}</TabBarWrapper>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}