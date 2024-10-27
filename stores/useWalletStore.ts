import {create} from 'zustand';

interface WalletState {
    address: string | null;
    chainId: string | null;
    isConnected: boolean;
    isConnecting: boolean;
    error: string | null;
    setAddress: (address: string | null) => void;
    setChainId: (chainId: string | null) => void;
    setIsConnected: (isConnected: boolean) => void;
    setIsConnecting: (isConnecting: boolean) => void;
    setError: (error: string | null) => void;
}

const useWalletStore = create<WalletState>((set) => ({
    address: null,
    chainId: null,
    isConnected: false,
    isConnecting: false,
    error: null,
    setAddress: (address) => set({ address }),
    setChainId: (chainId) => set({ chainId }),
    setIsConnected: (isConnected) => set({ isConnected }),
    setIsConnecting: (isConnecting) => set({ isConnecting }),
    setError: (error) => set({ error }),
}));

export default useWalletStore;
