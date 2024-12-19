'use client';

import { createContext, useEffect, useState } from 'react';
import { OKXUniversalProvider, OKXTonProvider } from "@okxconnect/universal-provider";
import { IOkxUniversalContext } from '@/hooks/useOkxUniversal';

const metaData = {
  name: 'Beraciaga',
  icon: 'https://pbs.twimg.com/profile_images/1827080831803752448/olMbZ40f_200x200.jpg',
};

interface IOkxWalletContext extends IOkxUniversalContext {}

export const OkxTonContext = createContext<IOkxWalletContext>({});

function OkxTonProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [okxTonProvider, setOkxTonProvider] = useState<OKXTonProvider>();
  const [okxUniversalProvider, setOkxUniversalProvider] = useState<OKXUniversalProvider>();

  useEffect(() => {
    if (!window) return;

    OKXUniversalProvider.init({
      dappMetaData: metaData,
    }).then((_okxUniversalProvider) => {
      setOkxUniversalProvider(_okxUniversalProvider);
      const _okxTonProvider = new OKXTonProvider(_okxUniversalProvider);
      setOkxTonProvider(_okxTonProvider);
    });
  }, []);

  return (
    <OkxTonContext.Provider value={{ okxTonProvider, okxUniversalProvider }}>
      {children}
    </OkxTonContext.Provider>
  );
}

export default OkxTonProvider;
