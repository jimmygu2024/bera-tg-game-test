import { useContext, useState } from 'react';
import { OkxTonContext } from '@/context/OkxContext';
import { useTelegram } from '@/hooks/useTelegram';
import { OKXUniversalProvider, SessionTypes, OKXTonProvider } from '@okxconnect/universal-provider';

export function useOkxUniversal(): IOkxUniversalContext {
  const { okxUniversalProvider } = useContext(OkxTonContext);
  const { WebApp } = useTelegram();

  const [connecting, setConnecting] = useState<boolean>(false);
  const [session, setSession] = useState<SessionTypes.Struct | undefined>();

  const connected: boolean | undefined = okxUniversalProvider?.connected?.();

  const onConnect = async () => {
    setConnecting(true);
    const _session = await okxUniversalProvider?.connect?.({
      namespaces: {
        eip155: {
          chains: ['eip155:1', 'eip155:56'],
          defaultChain: '1'
        },
        ton: {
          chains: [
            'ton:-239'
          ],
          defaultChain: 'ton:-239',
          params: {
            'ton_addr': {
              'name': 'ton_addr'
            },
            'ton_proof': {
              'name': 'ton_proof',
              'payload': 'Test'
            }
          }
        },
      },
      optionalNamespaces: {
        eip155: {
          chains: ['eip155:43114']
        }
      },
      sessionConfig: {
        redirect: 'tg://resolve'
      }
    });
    setSession(_session);
    setConnecting(false);
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
