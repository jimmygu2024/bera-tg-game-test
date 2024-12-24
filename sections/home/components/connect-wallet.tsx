'use client';

import Drawer from '@components/Drawer';
import { useMemo, useState } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import Skeleton from 'react-loading-skeleton';
import { useOkxUniversal } from '@/hooks/useOkxUniversal';
import { useBitget } from '@/hooks/useBitget';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '@/hooks/useTonConnect';

const ConnectWallet = () => {
  const {
    session: okxSession,
    connected: okxConnected,
    onConnect: onOKXConnect,
    onDisconnect: onOKXDisconnect,
    connecting: okxConnecting
  } = useOkxUniversal();
  const {
    onConnect: onBitgetConnect,
    onDisconnect: onBitgetDisconnet,
    connected: bitgetConnected,
    connecting: bitgetConnecting,
    address: bitgetAddress,
  } = useBitget();
  const {
    open: onTonOpen,
    close: onTonClose,
    onDisconnect: onTonDisconnet,
    connected: tonConnected,
    account: tonAccount,
    wallet: tonWallet,
    userFriendlyAddress: tonUserFriendlyAddress,
    rawAddress: tonRawAddress,
  } = useTonConnect();
  const { WebApp } = useTelegram();
  const [visible, setVisible] = useState(false);
  const [walletVisible, setWalletVisible] = useState(false);

  const [connected, connecting] = useMemo(() => {
    const _result = [false, false];
    if (okxConnected || bitgetConnected || tonConnected) {
      _result[0] = true;
    }
    if (okxConnecting || bitgetConnecting) {
      _result[1] = true;
    }
    return _result;
  }, [okxConnecting, okxConnected, bitgetConnecting, bitgetConnected, tonConnected]);

  const tgUser = WebApp?.initDataUnsafe?.user as any;

  const handleConnect = () => {
    if (connected) {
      setVisible(true);
      return;
    }
    setWalletVisible(true);
  };

  const handleDisconnect = () => {
    if (okxConnected) {
      onOKXDisconnect?.();
    }
    if (bitgetConnected) {
      onBitgetDisconnet?.();
    }
    if (tonConnected) {
      onTonDisconnet?.();
    }
    setVisible(false);
  };

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
        size="70dvh"
      >
        <div className="p-[20px_10px] h-full overflow-y-auto flex flex-col items-stretch text-black opacity-100">
          <div className="flex items-center gap-[10px]">
            {
              tgUser?.photo_url ? (
                <img src={tgUser?.photo_url} alt="" className="shrink-0 h-[28px] w-[28px] rounded-full" />
              ) : (
                <div className="shrink-0 h-[28px] w-[28px] rounded-full border border-[#1F2229] bg-[conic-gradient(from_180deg_at_50%_50%,_#00D1FF_0deg,_#FF008A_360deg)]"></div>
              )
            }
            <div className="break-all">
              {tgUser?.first_name} {tgUser?.last_name}
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-[5px] mt-[15px]">
            {
              okxConnected && (
                <OKXConnectedInfo okxSession={okxSession} />
              )
            }
            {
              bitgetConnected && (
                <BitgetConnectedInfo address={bitgetAddress} />
              )
            }
            {
              tonConnected && (
                <TonConnectedInfo
                  account={tonAccount}
                  wallet={tonWallet}
                  userFriendlyAddress={tonUserFriendlyAddress}
                  rawAddress={tonRawAddress}
                />
              )
            }
          </div>
          <button
            type="button"
            className="shrink-0 mt-auto w-full h-[60px] rounded-[30px] border-[2px] border-[#4B371F] bg-[#FFF5A9] text-[#4B371F] text-[20px] flex justify-center items-center"
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
        </div>
      </Drawer>
      <Drawer
        visible={walletVisible}
        onClose={() => {
          setWalletVisible(false);
        }}
        size="30dvh"
      >
        <div className="p-[20px_10px] h-full overflow-y-auto text-black opacity-100">
          <div className="font-bold text-[18px]">
            Wallets
          </div>
          <div className="grid grid-cols-3 mt-[20px]">
            <WalletItem
              name="OKX"
              icon="/images/wallets/okx.svg"
              onClick={() => {
                onOKXConnect?.();
                setWalletVisible(false);
              }}
            />
            <WalletItem
              name="Bitget"
              icon="/images/wallets/bitget.webp"
              onClick={() => {
                onBitgetConnect?.();
                setWalletVisible(false);
              }}
            />
            <WalletItem
              name="Ton Connect"
              icon="/images/wallets/ton.svg"
              onClick={() => {
                onTonOpen?.();
                setWalletVisible(false);
              }}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ConnectWallet;

function WalletItem(props: any) {
  const { icon, name, onClick } = props;

  return (
    <div className="w-full flex flex-col gap-[10px] items-center" onClick={onClick}>
      <div className="w-[40px] h-[40px] rounded-[10px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${icon}")` }} />
      <div className="text-[16px] font-[500]">
        {name}
      </div>
    </div>
  );
}

function OKXConnectedInfo(props: any) {
  const { okxSession } = props;

  return (
    <>
      {
        okxSession?.namespaces?.eip155?.accounts?.map((account: any, idx: number) => (
          <div className="flex items-center gap-[10px]" key={idx}>
            <div className="font-bold">ChainId: {account.split(':')[1]}</div>
            <div className="break-all">
              {`${account.split(':')[2].slice(0, 7)}...${account.split(':')[2].slice(-4)}`}
            </div>
          </div>
        ))
      }
      {
        okxSession?.namespaces?.ton?.accounts?.map((account: any, idx: number) => (
          <div className="flex items-center gap-[10px]" key={idx}>
            <div className="font-bold">ChainId: {account.split(':')[1]}</div>
            <div className="">{}</div>
            <div className="break-all">
              {account.split(':')[2]}:{`${account.split(':')[3].slice(0, 7)}...${account.split(':')[3].slice(-4)}`}
            </div>
          </div>
        ))
      }
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">Platform</div>
        <div className="break-all">{okxSession?.wallet?.platform}</div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">AppName</div>
        <div className="break-all">{okxSession?.wallet?.appName}</div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">App Version</div>
        <div className="break-all">{okxSession?.wallet?.appVersion}</div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">Wallet</div>
        <div className="break-all">{okxSession?.wallet?.walletName}</div>
      </div>
    </>
  );
}

function BitgetConnectedInfo(props: any) {
  const { address } = props;

  return (
    <>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">Address</div>
        <div className="break-all">
          {address}
        </div>
      </div>
    </>
  );
}

function TonConnectedInfo(props: any) {
  const { account, wallet, userFriendlyAddress, rawAddress } = props;

  return (
    <>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">userFriendlyAddress</div>
        <div className="break-all">
          {userFriendlyAddress}
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">rawAddress</div>
        <div className="break-all">
          {rawAddress}
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">wallet</div>
        <div className="break-all">
          {wallet?.name}
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="font-bold">Device</div>
        <div className="break-all">
          {wallet?.device?.appName}
        </div>
      </div>
    </>
  );
}
