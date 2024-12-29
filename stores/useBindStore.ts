import { create } from 'zustand';

interface BindStore {
    bindAddress: string;
    setBind: (bindAddress: string) => void;
}

const useBindStore = create<BindStore>((set) => ({
    bindAddress: '',
    setBind: (bindAddress: string) => set({ bindAddress }),
}));

export default useBindStore;