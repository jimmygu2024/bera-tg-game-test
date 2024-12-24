'use client';

import { createContext, useEffect, useState } from 'react';
import { OKXUniversalProvider, OKXTonProvider } from "@okxconnect/universal-provider";
import { IOkxUniversalContext } from '@/hooks/useOkxUniversal';

const metaData = {
  name: 'Beraciaga',
  icon: 'https://pbs.twimg.com/profile_images/1827080831803752448/olMbZ40f_200x200.jpg',
};

interface IOkxWalletContext extends IOkxUniversalContext {
  okxLoading?: boolean;
}

export const OkxTonContext = createContext<IOkxWalletContext>({});

function OkxTonProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const [loading, setLoading] = useState(true);
  const [okxTonProvider, setOkxTonProvider] = useState<OKXTonProvider>();
  const [okxUniversalProvider, setOkxUniversalProvider] = useState<OKXUniversalProvider>();

  useEffect(() => {
    if (!window) return;

    setLoading(true);
    OKXUniversalProvider.init({
      dappMetaData: metaData,
    }).then((_okxUniversalProvider) => {
      setOkxUniversalProvider(_okxUniversalProvider);
      const _okxTonProvider = new OKXTonProvider(_okxUniversalProvider);
      setOkxTonProvider(_okxTonProvider);
      setLoading(false);
    }).catch((err) => {
      console.log('OKXUniversalProvider init failed: %o', err);
      setLoading(false);
    });
  }, []);

  return (
    <OkxTonContext.Provider value={{ okxTonProvider, okxUniversalProvider, okxLoading: loading }}>
      {children}
    </OkxTonContext.Provider>
  );
}

export default OkxTonProvider;
