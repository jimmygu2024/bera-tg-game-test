import { useContext, useState } from 'react';
import { BitgetContext } from '@/context/BitgetContext';
import { useTelegram } from '@/hooks/useTelegram';
import { OmniConnect } from '@bitget-wallet/omni-connect';

export function useBitget(): IBitgetContext {
  const {
    bitgetProvider,
    bitgetLoading,
    bitgetConnected,
    bitgetAddress
  } = useContext(BitgetContext);
  const { WebApp } = useTelegram();

  const [connecting, setConnecting] = useState<boolean>(false);

  const onConnect = async () => {
    setConnecting(true);
    if (!bitgetProvider) {
      setConnecting(false);
      return;
    }
    try {
      const res = await bitgetProvider?.provider?.connect?.({});
      console.log('>>>>> connect succeed: %o', res);
    } catch (err) {
      console.log('>>>>> connect failed: %o', err);
    }
    setConnecting(false);
  };

  const onDisconnect = () => {
    bitgetProvider?.provider?.disconnect?.();
  };

  return {
    bitgetProvider,
    address: bitgetAddress,
    connected: bitgetConnected,
    connecting: connecting || bitgetLoading,
    onConnect,
    onDisconnect,
  };
}

export interface IBitgetContext {
  bitgetProvider?: OmniConnect;
  address?: string;
  connected?: boolean;
  connecting?: boolean;
  onConnect?(): Promise<void>;
  onDisconnect?(): void;
}
