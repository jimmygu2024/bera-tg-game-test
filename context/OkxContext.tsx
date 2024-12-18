import { OKXConnectError, OKXTonConnectUI } from '@okxconnect/ui';
import { createContext, useEffect } from 'react';
import { Wallet } from '@okxconnect/tonsdk';
import { IOkxTonContext } from '@/hooks/useOkxTon';

const dappMetaData = {
  name: 'Beraciaga',
  icon: 'https://pbs.twimg.com/profile_images/1827080831803752448/olMbZ40f_200x200.jpg',
};
const buttonRootId = void 0;
const actionsConfiguration = {
  modals: 'all' as 'all',
  returnStrategy: 'tg://resolve' as `${string}://${string}`,
  tmaReturnUrl: 'back' as `back`,
};
const uiPreferences = {
  theme: 'SYSTEM' as 'SYSTEM',
};
const language = 'en_US';
const restoreConnection = true;

export const okxTonConnectUI = new OKXTonConnectUI({
  dappMetaData,
  buttonRootId,
  actionsConfiguration,
  uiPreferences,
  language,
  restoreConnection
});

export const OkxTonContext = createContext<IOkxTonContext>({});

function OkxTonProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  useEffect(() => {
    const unsubscribe = okxTonConnectUI.onStatusChange((walletInfo: Wallet | null) => {
        console.log('Connection status:', walletInfo);
      }, (err: OKXConnectError) => {
        console.log('Connection status:', err);
      }
    )

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <OkxTonContext.Provider value={{ okxTonConnectUI }}>
      {children}
    </OkxTonContext.Provider>
  );
}

export default OkxTonProvider;
