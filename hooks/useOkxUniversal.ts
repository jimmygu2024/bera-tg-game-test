import { useContext, useMemo, useState } from 'react';
import { OkxTonContext } from '@/context/OkxContext';
import { useTelegram } from '@/hooks/useTelegram';
import { OKXUniversalProvider, SessionTypes, OKXTonProvider } from '@okxconnect/universal-provider';
import { OKXUniversalConnectUI } from '@okxconnect/ui';

const namespaces = {
  eip155: {
    chains: ['eip155:1'],
    defaultChain: '1'
  },
};
const optionalNamespaces = {
  eip155: {
    chains: [
      'eip155:8453',
      'eip155:5000',
      'eip155:42161',
      'eip155:43114',
      'eip155:56',
      'eip155:59144',
      'eip155:1088',
      'eip155:10',
      'eip155:137',
      'eip155:1101',
      'eip155:324',
      'eip155:100',
      'eip155:169',
      'eip155:534352',
      'eip155:81457',
      'eip155:34443',
    ]
  },
  // ton: {
  //   chains: [
  //     'ton:-239'
  //   ],
  //   params: {
  //     'ton_addr': {
  //       'name': 'ton_addr'
  //     },
  //     // 'ton_proof': {
  //     //   'name': 'ton_proof',
  //     //   'payload': 'Test'
  //     // }
  //   }
  // },
};
const sessionConfig = {
  redirect: 'tg://resolve'
};

export function useOkxUniversal(): IOkxUniversalContext {
  const {
    isOkxTelegram,
    okxUniversalProvider,
    okxUniversalUIProvider,
    okxLoading,
  } = useContext(OkxTonContext);
  const { WebApp } = useTelegram();

  const [connecting, setConnecting] = useState<boolean>(false);

  const okxUniversalConnected = okxUniversalProvider?.connected?.();
  const okxUniversalUIConnected = okxUniversalUIProvider?.connected?.();
  const okxUniversalSession = okxUniversalProvider?.session;
  const okxUniversalUISession = okxUniversalUIProvider?.session;
  const [okxSession, connected] = useMemo<[SessionTypes.Struct | undefined, boolean | undefined]>(() => {
    if (isOkxTelegram) {
      return [okxUniversalUISession, okxUniversalUIConnected];
    }
    return [okxUniversalSession, okxUniversalConnected];
  }, [okxUniversalConnected, okxUniversalUIConnected, okxUniversalSession, okxUniversalUISession, isOkxTelegram]);

  const onConnect = async () => {
    setConnecting(true);

    // Telegram Mini Wallet
    if (isOkxTelegram) {
      if (!okxUniversalUIProvider) {
        setConnecting(false);
        return;
      }
      let _session;
      try {
        _session = await okxUniversalUIProvider.openModal({
          namespaces: namespaces,
          optionalNamespaces: optionalNamespaces,
          sessionConfig: sessionConfig,
        });
      } catch (err) {
        console.log('>>>>> connect failed: %o', err);
      }
      setConnecting(false);
      return _session;
    }

    // OKX Native App
    if (!okxUniversalProvider) {
      setConnecting(false);
      return;
    }
    let _session;
    try {
      _session = await okxUniversalProvider?.connect?.({
        namespaces: namespaces,
        optionalNamespaces: optionalNamespaces,
        sessionConfig: sessionConfig,
      });
    } catch (err) {
      console.log('>>>>> connect failed: %o', err);
    }
    setConnecting(false);
    return _session;
  };

  const onDisconnect = async () => {
    if (isOkxTelegram) {
      await okxUniversalUIProvider?.disconnect?.();
      return;
    }
    await okxUniversalProvider?.disconnect?.();
  };

  return {
    okxUniversalProvider,
    session: okxSession,
    connected,
    connecting: connecting || okxLoading,
    onConnect,
    onDisconnect,
  };
}

export interface IOkxUniversalContext {
  okxUniversalProvider?: OKXUniversalProvider;
  okxUniversalUIProvider?: OKXUniversalConnectUI;
  okxTonProvider?: OKXTonProvider;
  session?: SessionTypes.Struct;
  connected?: boolean;
  connecting?: boolean;
  onConnect?(): Promise<SessionTypes.Struct | undefined>;
  onDisconnect?(): Promise<void>;
}
