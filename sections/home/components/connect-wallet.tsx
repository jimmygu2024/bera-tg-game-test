'use client';

import Drawer from '@components/Drawer';
import { useState } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { UserData } from '@/hooks/useLogin';
import Skeleton from 'react-loading-skeleton';
import { useOkxUniversal } from '@/hooks/useOkxUniversal';

const ConnectWallet = () => {
  const {
    session,
    connected,
    onConnect,
    onDisconnect,
    connecting
  } = useOkxUniversal();
  const { WebApp } = useTelegram();
  const [visible, setVisible] = useState(false);

  const tgUser = WebApp?.initDataUnsafe?.user as UserData;

  const handleConnect = () => {
    if (connected) {
      setVisible(true);
      return;
    }
    onConnect?.();
  };

  console.log('session: %o', session);

  return (
    <>
      {
        connecting ? (
          <Skeleton width="6.88rem" height="2rem" borderRadius="1rem" />
        ) : (
          <button
            type="button"
            className="h-[32px] border border-[#4B371F] rounded-[16px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center whitespace-nowrap"
            onClick={handleConnect}
          >
            {connected ? `connected` : 'Connect'}
          </button>
        )
      }
      <Drawer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        size="50dvh"
      >
        <div className="p-[20px_10px] h-full flex flex-col items-stretch">
          <div className="flex items-center gap-[10px]">
            {
              tgUser?.photo_url ? (
                <img src={tgUser?.photo_url} alt="" className="shrink-0 h-[28px] w-[28px] rounded-full" />
              ) : (
                <div className="shrink-0 h-[28px] w-[28px] rounded-full border border-[#1F2229] bg-[conic-gradient(from_180deg_at_50%_50%,_#00D1FF_0deg,_#FF008A_360deg)]"></div>
              )
            }
            <div className="break-all">

            </div>
          </div>
          <div className="flex flex-col items-stretch gap-[5px] mt-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">Platform</div>
              <div className=""></div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">AppName</div>
              <div className=""></div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">Provider</div>
              <div className=""></div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">Chain</div>
              <div className=""></div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="font-bold">PublicKey</div>
              <div className=""></div>
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
