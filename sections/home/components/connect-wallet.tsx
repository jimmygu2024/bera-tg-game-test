'use client';

import { useOkxTon } from '@/hooks/useOkxTon';

const ConnectWallet = () => {
  const { onConnect, onDisconnect } = useOkxTon();

  return (
    <>
      {/*<TonConnectButton className="whitespace-nowrap" />*/}
      <button
        type="button"
        className="h-[32px] border border-[#4B371F] rounded-[10px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center whitespace-nowrap"
        onClick={onConnect}
      >
        Connect OKX
      </button>
    </>
  );
};

export default ConnectWallet;
