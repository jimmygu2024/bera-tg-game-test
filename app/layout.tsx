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
import BitgetProvider from '@/context/BitgetContext';

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        <TonConnectUIProvider manifestUrl='/tonconnect-manifest.json'>
          <TelegramProvider>
            <SkeletonTheme baseColor='#96D6FF' highlightColor='#FFF5A9'>
              <OkxTonProvider>
                <BitgetProvider>
                  <TabBarWrapper>
                    {children}
                  </TabBarWrapper>
                </BitgetProvider>
              </OkxTonProvider>
            </SkeletonTheme>
          </TelegramProvider>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}