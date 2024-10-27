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


const UserDataItem = ({ label, value }: {
  label: string;
  value: string | number | boolean;
}) => (
  <div className="flex gap-2 text-white">
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

const Button = ({ onClick, variant = 'primary', disabled, children }: {
  onClick: () => void;
  variant?: 'primary' | 'danger';
  disabled?: boolean;
  children: React.ReactNode;
}) => {
  const baseStyles = "font-medium py-2 px-4 rounded transition-colors duration-200";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


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

    console.log(tonConnectUI.connected, 'tonConnectUI.connected');
    
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
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6">
    <h1 className="text-xl font-bold text-white">TON Connect Demo</h1>
    
    <div className="flex flex-col items-center space-y-4">
      {tonWalletAddress ? (
        <>
          <p className="text-white">Connected: {formatAddress(tonWalletAddress)}</p>
          <Button 
            onClick={handleWalletAction} 
            variant="danger" 
            disabled={!isUIReady}
          >
            Disconnect Wallet
          </Button>
        </>
      ) : (
        <Button 
          onClick={handleWalletAction} 
          disabled={!isUIReady}
        >
          Connect TON Wallet
        </Button>
      )}
    </div>

    {userData ? (
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-bold text-white text-center">User Data</h2>
        <div className="space-y-2">
          <UserDataItem label="ID" value={userData.id} />
          <UserDataItem label="Username" value={userData.username || 'N/A'} />
          <UserDataItem label="Is Premium" value={userData.is_premium ? 'Yes' : 'No'} />
        </div>
      </div>
    ) : (
      <p className="text-white font-medium">Please open in Telegram</p>
    )}
  </main>
  );
}