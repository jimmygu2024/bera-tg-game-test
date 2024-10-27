'use client'

import { useState, useEffect, useCallback } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { Address } from "@ton/core";

import WebApp from '@twa-dev/sdk'

interface UserData {
  id: number;
  username?: string;
  is_premium?: boolean;
}


export default function Home() {
  const [tonConnectUI] = useTonConnectUI();
  const [tonWalletAddress, setTonWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUIReady, setIsUIReady] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null)
  
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  
  const handleWalletConnection = useCallback((address: string) => {
    setTonWalletAddress(address);
    console.log("Wallet connected successfully!");
    setIsLoading(false);
  }, []);

  const handleWalletDisconnection = useCallback(() => {
    setTonWalletAddress(null);
    console.log("Wallet disconnected!");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let mounted = true;

    const initUI = async () => {
      if (tonConnectUI) {
        try {
          // 等待连接恢复
          await tonConnectUI.connectionRestored;
          if (mounted) {
            setIsUIReady(true);
            setIsLoading(false);
            console.log('TON Connect UI initialized');
          }
        } catch (error) {
          console.error('Error initializing TON Connect UI:', error);
          if (mounted) {
            setIsLoading(false);
          }
        }
      }
    };

    initUI();

    return () => {
      mounted = false;
    };
  }, [tonConnectUI]);

  useEffect(() => {
    if (!isUIReady) return;

    const checkWalletConnection = async () => {
      if (tonConnectUI.account?.address) {
        handleWalletConnection(tonConnectUI.account.address);
      } else {
        handleWalletDisconnection();
      }
    };

    checkWalletConnection();

    const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        handleWalletConnection(wallet.account.address);
      } else {
        handleWalletDisconnection();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [tonConnectUI, handleWalletConnection, handleWalletDisconnection, isUIReady]);

  const handleWalletAction = async () => {
    if (!isUIReady) {
      console.log("TON Connect UI is not ready yet");
      return;
    }

    try {
      if (tonConnectUI.connected) {
        setIsLoading(true);
        await tonConnectUI.disconnect();
      } else {
        await tonConnectUI.openModal();
      }
    } catch (error) {
      console.error("Error handling wallet action:", error);
      setIsLoading(false);
    }
  };

  const formatAddress = (address: string) => {
    const tempAddress = Address.parse(address).toString();
    return `${tempAddress.slice(0, 4)}...${tempAddress.slice(-4)}`;
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <div className="text-white font-medium">
            {!isUIReady ? 'Initializing TON Connect...' : 'Loading...'}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-8 text-white">TON Connect Demo</h1>
      {tonWalletAddress ? (
        <div className="flex flex-col items-center">
          <p className="mb-4 text-white">Connected: {formatAddress(tonWalletAddress)}</p>
          <button
            onClick={handleWalletAction}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            disabled={!isUIReady}
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={handleWalletAction}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          disabled={!isUIReady}
        >
          Connect TON Wallet
        </button>
      )}

      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-white">User Data</h1>
          <ul>
            <li className='text-xl font-bold mb-4 text-white'>ID: {userData.id}</li>
            <li className='text-xl font-bold mb-4 text-white'>Username: {userData.username || 'N/A'}</li>
            <li className='text-xl font-bold mb-4 text-white'>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div className='font-bold mt-4 mb-4 text-white'>Plz open in Telegram</div>
      )}

    </main>
  );
}