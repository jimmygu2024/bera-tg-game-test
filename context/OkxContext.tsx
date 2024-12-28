'use client';

import { createContext, useEffect, useState } from 'react';
import { OKXUniversalProvider, OKXTonProvider, OKXConnectError, TONWallet } from "@okxconnect/universal-provider";
import { IOkxUniversalContext } from '@/hooks/useOkxUniversal';
import { OKXUniversalConnectUI, THEME } from '@okxconnect/ui';

const metaData = {
  name: 'Beraciaga',
  icon: '/images/icon-bera-coin.svg',
};

interface IOkxWalletContext extends IOkxUniversalContext {
  okxLoading?: boolean;
  isOkxTelegram?: boolean;
}

export const OkxTonContext = createContext<IOkxWalletContext>({});

function OkxTonProvider(props: { children: React.ReactNode; isTelegram?: boolean; }) {
  const { children, isTelegram } = props;

  const [loading, setLoading] = useState(true);
  const [okxTonProvider, setOkxTonProvider] = useState<OKXTonProvider>();
  const [okxUniversalProvider, setOkxUniversalProvider] = useState<OKXUniversalProvider>();
  const [okxUniversalUIProvider, setOkxUniversalUIProvider] = useState< OKXUniversalConnectUI>();

  useEffect(() => {
    if (!window) return;

    setLoading(true);

    // Telegram Mini Wallet
    if (isTelegram) {
      OKXUniversalConnectUI.init({
        dappMetaData: metaData,
        actionsConfiguration: {
          returnStrategy: 'tg://resolve',
          modals: 'all',
          tmaReturnUrl: 'back'
        },
        language: "en_US",
        uiPreferences: {
          theme: THEME.LIGHT
        },
      }).then((universalUi) => {
        setOkxUniversalUIProvider(universalUi);
        const _okxTonProvider = new OKXTonProvider(universalUi);
        setOkxTonProvider(_okxTonProvider);
        setLoading(false);
      }).catch((err) => {
        console.log('OKXUniversalConnectUI init failed: %o', err);
        setLoading(false);
      })
      return;
    }

    // OKX Native App
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
    <OkxTonContext.Provider
      value={{
        okxTonProvider,
        okxUniversalProvider,
        okxLoading: loading,
        okxUniversalUIProvider,
        isOkxTelegram: isTelegram,
    }}>
      {children}
    </OkxTonContext.Provider>
  );
}

export default OkxTonProvider;
