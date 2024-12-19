'use client';

import { useOkxTon } from '@/hooks/useOkxTon';
import Drawer from '@components/Drawer';
import { useState } from 'react';

const ConnectWallet = () => {
  const { account, wallet, connected, onConnect, onDisconnect } = useOkxTon();
  const [visible, setVisible] = useState(false);

  const handleConnect = () => {
    if (connected) {
      setVisible(true);
      return;
    }
    onConnect?.();
  };

  return (
    <>
      <button
        type="button"
        className="h-[32px] border border-[#4B371F] rounded-[10px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center whitespace-nowrap"
        onClick={handleConnect}
      >
        {connected ? `${account?.address?.slice(0, 5)}...${account?.address?.slice(-4)}` : 'Connect'}
      </button>
      <Drawer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        size="50dvh"
      >
        <div className="p-[20px_10px] h-full flex flex-col items-stretch">
          <div className="flex items-center gap-[10px]">
            <div className="h-[28px] w-[28px] rounded-full border border-[#1F2229] bg-[conic-gradient(from_180deg_at_50%_50%,_#00D1FF_0deg,_#FF008A_360deg)]"></div>
            <div className="">
              {account?.address}
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-[5px] mt-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">Platform</div>
              <div className="">{wallet?.device?.platform}</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">AppName</div>
              <div className="">{wallet?.device?.appName}</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">Provider</div>
              <div className="">{wallet?.provider}</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">TonProof Name</div>
              <div className="">{wallet?.connectItems?.tonProof?.name}</div>
            </div>
          </div>
          <button
            type="button"
            className="mt-auto w-full h-[60px] rounded-[30px] border-[2px] border-[#4B371F] bg-[#FFF5A9] text-[#4B371F] text-[20px] flex justify-center items-center"
            onClick={() => {
              onDisconnect?.();
              setVisible(false);
            }}
          >
            Disconnect
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default ConnectWallet;
