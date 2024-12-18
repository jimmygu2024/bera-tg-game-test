'use client';

import { useOkxTon } from '@/hooks/useOkxTon';

const ConnectWallet = () => {
  const { okxTonConnectUI } = useOkxTon();

  const handleConnect = () => {
    okxTonConnectUI?.openModal();
  };

  const handleDisconnect = () => {
    okxTonConnectUI?.disconnect();
  };

  return (
    <>
      {/*<TonConnectButton className="whitespace-nowrap" />*/}
      <button
        type="button"
        className="h-[32px] border border-[#4B371F] rounded-[10px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center whitespace-nowrap"
        onClick={handleConnect}
      >
        Connect OKX
      </button>
    </>
  );
};

export default ConnectWallet;
