import { OkxTonContext } from '@/context/OkxContext';
import { useContext } from 'react';
import { OKX_CONNECT_ERROR_CODES, OKXConnectError, OKXTonConnect } from '@okxconnect/tonsdk';

export function useOkxTon(): IOkxTonContext {
  const { okxTonConnect } = useContext(OkxTonContext);

  const connected: boolean | undefined = okxTonConnect?.connected;

  const onConnect = () => {
    try {
      okxTonConnect?.connect?.({
        tonProof: '',
        redirect: "tg://resolve",
        openUniversalLink: true
      });
    } catch (error) {
      if (error instanceof OKXConnectError) {
        if (error.code === OKX_CONNECT_ERROR_CODES.USER_REJECTS_ERROR) {
          alert('User reject');
        } else if (error.code === OKX_CONNECT_ERROR_CODES.ALREADY_CONNECTED_ERROR) {
          alert('Already connected');
        } else {
          alert('Unknown error happened');
        }
      } else {
        alert('Unknown error happened');
      }
    }
  };

  const onDisconnect = async () => {
    try {
      await okxTonConnect?.disconnect?.();
    } catch (error) {
      if (error instanceof OKXConnectError) {
        switch (error.code) {
          case OKX_CONNECT_ERROR_CODES.NOT_CONNECTED_ERROR:
            alert('Not connected');
            break;
          default:
            alert('Unknown error happened');
            break;
        }
      } else {
        alert('Unknown error happened');
      }
    }
  };

  return {
    okxTonConnect,
    connected,
    onConnect,
    onDisconnect,
  };
}

export interface IOkxTonContext {
  okxTonConnect?: OKXTonConnect;
  connected?: boolean;
  onConnect?(): void;
  onDisconnect?(): Promise<void>;
}
