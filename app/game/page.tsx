'use client';

import { useEffect, useRef } from 'react';
import { useTelegram } from '@/hooks/useTelegram';

const Game = () => {
  const { WebApp } = useTelegram();

  const gameRef = useRef<any>(null);

  const handleLoaded = (e?: any) => {
    if (!gameRef.current || !WebApp) return;
    gameRef.current.contentWindow.postMessage({
      type: 'Telegram',
      data: {
        initData: WebApp.initData,
        initDataUnsafe: WebApp.initDataUnsafe,
        version: WebApp.version,
        viewportHeight: WebApp.viewportHeight,
        viewportStableHeight: WebApp.viewportStableHeight,
        isExpanded: WebApp.isExpanded,
        platform: WebApp.platform,

        API: process.env.NEXT_PUBLIC_API,
        APP_LINK: process.env.NEXT_PUBLIC_APP_LINK,
        BERA_IMPORTED_URL: process.env.NEXT_PUBLIC_BERA_IMPORTED_URL,
      },
    }, '*');
  };

  useEffect(() => {
    handleLoaded();
  }, [WebApp]);

  return (
    <div className="h-full">
      <iframe
        className="w-full h-full"
        ref={gameRef}
        src={process.env.NEXT_PUBLIC_GAME_URL || 'https://bera-tg-game-test.vercel.app/'}
        onLoad={handleLoaded}
      />
    </div>
  );
};

export default Game;
