import { useTelegram } from '@/hooks/useTelegram';
import { Account, useTonConnectModal, useTonAddress, useTonWallet, useTonConnectUI, TonConnectUI, Wallet, WalletInfoWithOpenMethod, WalletsModalCloseReason } from '@tonconnect/ui-react';

export function useTonConnect(): ITonConnect {
  const { WebApp } = useTelegram();
  const { open, close } = useTonConnectModal();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  const connected = tonConnectUI?.connected;
  const account = tonConnectUI?.account

  const onDisconnect = async () => {
    await tonConnectUI.disconnect();
  }

  console.log(tonConnectUI, '<<======tonConnectUI')

  return {
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
}
