import {create} from 'zustand';
import Tokens from '@/data/token'


interface ITokens {
    tokens: any[];
    isLoading: boolean;
    error: string | null;
    fetchTokens: () => Promise<void>;
}

const useTokenStore = create<ITokens>((set) => ({
  tokens: [],
  isLoading: false,
  error: null,
  fetchTokens: async () => {
    set({ isLoading: true });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ tokens: Tokens, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

export default useTokenStore;