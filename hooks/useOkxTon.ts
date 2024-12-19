import { OkxTonContext } from '@/context/OkxContext';
import { useContext, useState } from 'react';
import { OKX_CONNECT_ERROR_CODES, OKXConnectError, OKXTonConnect, Account, Wallet } from '@okxconnect/tonsdk';
import { useTelegram } from '@/hooks/useTelegram';

export function useOkxTon(): IOkxTonContext {
  const { okxTonConnect } = useContext(OkxTonContext);
  const { WebApp } = useTelegram();

  const [connecting, setConnecting] = useState<boolean>(false);

  const connected: boolean | undefined = okxTonConnect?.connected;
  const account = okxTonConnect?.account;
  const wallet = okxTonConnect?.wallet;

  const onConnect = async () => {
    setConnecting(true);
    try {
      await okxTonConnect?.connect?.({
        tonProof: '',
        redirect: "tg://resolve",
        openUniversalLink: true
      });
    } catch (error) {
      if (error instanceof OKXConnectError) {
        if (error.code === OKX_CONNECT_ERROR_CODES.USER_REJECTS_ERROR) {
          WebApp?.showAlert?.('User reject');
        } else if (error.code === OKX_CONNECT_ERROR_CODES.ALREADY_CONNECTED_ERROR) {
          WebApp?.showAlert?.('Already connected');
        } else {
          WebApp?.showAlert?.('Unknown error happened');
        }
      } else {
        WebApp?.showAlert?.('Unknown error happened');
      }
    }
    setConnecting(false);
  };

  const onDisconnect = async () => {
    try {
      await okxTonConnect?.disconnect?.();
    } catch (error) {
      if (error instanceof OKXConnectError) {
        switch (error.code) {
          case OKX_CONNECT_ERROR_CODES.NOT_CONNECTED_ERROR:
            WebApp?.showAlert?.('Not connected');
            break;
          default:
            WebApp?.showAlert?.('Unknown error happened');
            break;
        }
      } else {
        WebApp?.showAlert?.('Unknown error happened');
      }
    }
  };

  return {
    okxTonConnect,
    connected,
    connecting,
    onConnect,
    onDisconnect,
    account,
    wallet,
  };
}

export interface IOkxTonContext {
  okxTonConnect?: OKXTonConnect;
  connected?: boolean;
  connecting?: boolean;
  wallet?: Wallet | null | undefined;
  account?: Account | null | undefined;
  onConnect?(): void;
  onDisconnect?(): Promise<void>;
}
