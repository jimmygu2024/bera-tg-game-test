import { useContext, useState } from 'react';
import { OkxTonContext } from '@/context/OkxContext';
import { useTelegram } from '@/hooks/useTelegram';
import { OKXUniversalProvider, SessionTypes, OKXTonProvider } from '@okxconnect/universal-provider';
import useOkxSessionStore from '@/stores/useOkxSession';

export function useOkxUniversal(): IOkxUniversalContext {
  const { okxUniversalProvider } = useContext(OkxTonContext);
  const { WebApp } = useTelegram();
  const setStoreSession = useOkxSessionStore((state) => state.setSession);
  const storeSession = useOkxSessionStore((state) => state.session);

  const [connecting, setConnecting] = useState<boolean>(false);
  const [session, setSession] = useState<SessionTypes.Struct | undefined>();

  const connected: boolean | undefined = okxUniversalProvider?.connected?.();

  const onConnect = async () => {
    setConnecting(true);
    let _session;
    try {
      _session = await okxUniversalProvider?.connect?.({
        namespaces: {
          eip155: {
            chains: ['eip155:1'],
            defaultChain: '1'
          },
        },
        optionalNamespaces: {
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
        },
        sessionConfig: {
          redirect: 'tg://resolve'
        }
      });
    } catch (err) {
      console.log('connect failed: %o', err);
    }
    setSession(_session);
    setConnecting(false);
    if (_session) {
      setStoreSession(_session);
    } else {
      if (storeSession) {
        _session = storeSession;
        setSession(_session);
      }
    }
    return _session;
  };

  const onDisconnect = async () => {
    await okxUniversalProvider?.disconnect?.();
  };

  return {
    okxUniversalProvider,
    session,
    connected,
    connecting,
    onConnect,
    onDisconnect,
  };
}

export interface IOkxUniversalContext {
  okxUniversalProvider?: OKXUniversalProvider;
  okxTonProvider?: OKXTonProvider;
  session?: SessionTypes.Struct;
  connected?: boolean;
  connecting?: boolean;
  onConnect?(): Promise<SessionTypes.Struct | undefined>;
  onDisconnect?(): Promise<void>;
}
