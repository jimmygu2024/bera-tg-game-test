'use client';

import { useEffect, useRef } from 'react';
import { useTelegram } from '@/hooks/useTelegram';

const Game = () => {
  const { WebApp } = useTelegram();

  const gameRef = useRef<any>(null);

  const handleLoaded = (e?: any) => {
    console.log('handleLoaded... %o', e);
    console.log('gameRef.current: %o', gameRef.current);
    console.log('WebApp: %o', WebApp);

    if (!gameRef.current || !WebApp) return;
    const data = {
      type: 'Beraciaga',
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
    };
    console.log('data will be send: %o', data);
    gameRef.current.contentWindow.postMessage(JSON.stringify(data), '*');
  };

  useEffect(() => {
    handleLoaded();
  }, [WebApp, gameRef.current]);

  return (
    <div className="h-full">
      <iframe
        className="w-full h-full"
        ref={gameRef}
        src={process.env.NEXT_PUBLIC_GAME_URL || 'http://localhost:3001/'}
        onLoad={handleLoaded}
      />
    </div>
  );
};

export default Game;
