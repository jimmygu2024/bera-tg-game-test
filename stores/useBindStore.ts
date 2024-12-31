import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BindStore {
    bindAddress: string;
    hasBound: boolean;
    setBind: (bindAddress: string) => void;
    setHasBound: (hasBound: boolean) => void;
}

const useBindStore = create<BindStore>()(
    persist(
        (set: any) => ({
            bindAddress: '',
            hasBound: false,
            setBind: (bindAddress: string) => set({ bindAddress }),
            setHasBound: (hasBound: boolean) => set({ hasBound }),
        }),
        {
            name: 'bind-storage',
        }
    )
);

export default useBindStore;