'use client';

import { OKXConnectError, OKXTonConnect } from '@okxconnect/tonsdk';
import { createContext, useEffect, useState } from 'react';
import { Wallet } from '@okxconnect/tonsdk';
import { IOkxTonContext } from '@/hooks/useOkxTon';

const metaData = {
  name: 'Beraciaga',
  icon: 'https://pbs.twimg.com/profile_images/1827080831803752448/olMbZ40f_200x200.jpg',
};

export const OkxTonContext = createContext<IOkxTonContext>({});

function OkxTonProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [okxTonConnect, setOkxTonConnect] = useState<OKXTonConnect>();

  useEffect(() => {
    if (!window) return;

    const _okxTonConnect = new OKXTonConnect({
      metaData,
    });

    setOkxTonConnect(_okxTonConnect);

    const unsubscribe = _okxTonConnect.onStatusChange((walletInfo: Wallet | null) => {
        console.log('Connection status:', walletInfo);
      }, (err: OKXConnectError) => {
        console.log('Connection status:', err);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <OkxTonContext.Provider value={{ okxTonConnect }}>
      {children}
    </OkxTonContext.Provider>
  );
}

export default OkxTonProvider;
