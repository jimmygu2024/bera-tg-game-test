import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BindStore {
    bindAddress: string;
    hasBound: boolean;
    setBind: (bindAddress: string) => void;
    setHasBound: (hasBound: boolean) => void;
}

const useBindStore = create(persist<BindStore>(
        (set: any) => ({
            bindAddress: '',
            hasBound: false,
            setBind: (bindAddress: string) => set({ bindAddress }),
            setHasBound: (hasBound: boolean) => set({ hasBound }),
        }),
        {
            name: '_useBindStore',
            version: 0.1,
            storage: createJSONStorage(() => localStorage),
          },
    )
);

export default useBindStore;