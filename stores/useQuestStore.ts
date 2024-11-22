import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface QuestStore {
  visited: Record<number, boolean>;
  setVisited(params: { id: number; visited: boolean; }): void;
}

export const useQuestStore = create(
  persist<QuestStore>(
    (set, get: any) => ({
      visited: {},
      setVisited: (params) => {
        const _visited = {
          ...get().visited,
          [params.id]: params.visited,
        };
        set((state) => state.visited = _visited);
      },
    }),
    {
      name: '_quest',
      version: 0.1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
