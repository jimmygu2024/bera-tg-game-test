import { useTelegram } from '@/hooks/useTelegram';
import { Account, useTonConnectModal, useTonAddress, useTonWallet, useTonConnectUI, TonConnectUI, Wallet, WalletInfoWithOpenMethod, WalletsModalCloseReason } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

export function useTonConnect(): ITonConnect {
  const { WebApp } = useTelegram();
  const { open, close } = useTonConnectModal();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const [isReady, setIsReady] = useState(false);

  const connected = tonConnectUI?.connected;
  const account = tonConnectUI?.account

  const onDisconnect = async () => {
    await tonConnectUI.disconnect();
  }

  useEffect(() => {
    let mounted = true;

    const initUI = async () => {
      if (tonConnectUI) {
        try {
          await tonConnectUI.connectionRestored;
          if (mounted) {
            setIsReady(true);
            console.log('TON Connect UI initialized');
          }
        } catch (error) {
          console.error('Error initializing TON Connect UI:', error);
        }
      }
    };

    initUI();

    return () => {
      mounted = false;
    };
  }, [tonConnectUI]);

  return {
    isReady,
    open,
    close,
    userFriendlyAddress,
    rawAddress,
    wallet,
    tonConnectUI,
    onDisconnect,
    connected,
    account,
  };
}

export interface ITonConnect {
  open: () => void;
  close: (reason?: WalletsModalCloseReason) => void;
  userFriendlyAddress?: string;
  rawAddress?: string;
  wallet?: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
  tonConnectUI?: TonConnectUI;
  onDisconnect(): Promise<void>;
  connected?: boolean;
  account?: Account | null;
  isReady: boolean;
}
