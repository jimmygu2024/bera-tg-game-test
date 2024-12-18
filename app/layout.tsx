'use client'

import { useEffect } from "react";
import "./globals.css";
import 'swiper/css';
import 'react-loading-skeleton/dist/skeleton.css';
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TabBarWrapper } from '@/components/Layout/TabBarWrapper';
import TelegramProvider from '@/context/TelegramContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import OkxTonProvider from '@/context/OkxContext';

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
        <meta property="og:title" content="Beraciaga - Meme Game" />
        <meta property="og:description" content="Look at this, it is so amazing" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1827080831803752448/olMbZ40f_200x200.jpg" />
        <meta property="og:url" content="https://t.me/BeraDapDap_bot" />
      </head>
      <body>
        <TonConnectUIProvider manifestUrl='/tonconnect-manifest.json'>
          <TelegramProvider>
            <SkeletonTheme baseColor='#96D6FF' highlightColor='#FFF5A9'>
              <OkxTonProvider>
                <TabBarWrapper>
                  {children}
                </TabBarWrapper>
              </OkxTonProvider>
            </SkeletonTheme>
          </TelegramProvider>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}