import { OkxTonContext } from '@/context/OkxContext';
import type { OKXTonConnectUI } from '@okxconnect/ui';
import { useContext } from 'react';

export function useOkxTon(): IOkxTonContext {
  const { okxTonConnectUI } = useContext(OkxTonContext);

  return {
    okxTonConnectUI,
  };
}

export interface IOkxTonContext {
  okxTonConnectUI?: OKXTonConnectUI;
}
