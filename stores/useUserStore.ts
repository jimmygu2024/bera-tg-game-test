import { create } from "zustand";

type UserState = {
  equipmentList: Equipment[];
  equipmentListLoading: boolean;
  setEquipmentList: (list: Equipment[]) => void;
  setEquipmentListLoading: (loading: boolean) => void;

  userEquipmentList: Equipment[];
  userEquipmentListLoading: boolean;
  setUserEquipmentList: (list: Equipment[]) => void;
  setUserEquipmentListLoading: (loading: boolean) => void;

  levels: Level[];
  levelsLoading: boolean;
  setLevels: (list: Level[]) => void;
  setLevelsLoading: (loading: boolean) => void;

  userInfo?: UserInfo;
  userInfoLoading: boolean;
  setUserInfo: (user?: UserInfo) => void;
  setUserInfoLoading: (loading: boolean) => void;
};

export const useUserStore = create<UserState>((set) => ({
  equipmentList: [],
  equipmentListLoading: false,
  setEquipmentList: (list) => set({ equipmentList: list }),
  setEquipmentListLoading: (loading) => set({ equipmentListLoading: loading }),

  userEquipmentList: [],
  userEquipmentListLoading: false,
  setUserEquipmentList: (list) => set({ userEquipmentList: list }),
  setUserEquipmentListLoading: (loading) => set({ userEquipmentListLoading: loading }),

  levels: [],
  levelsLoading: false,
  setLevels: (list) => set({ levels: list }),
  setLevelsLoading: (loading) => set({ levelsLoading: loading }),

  userInfo: void 0,
  userInfoLoading: false,
  setUserInfo: (user) => set({ userInfo: user }),
  setUserInfoLoading: (loading) => set({ userInfoLoading: loading }),
}));

export interface UserInfo {
  creat_timestamp: number;
  address: string;
  bind_source: string | 'okx_invite';
  bind_okx_reward_coins: number,
  bind_okx_reward_coupons: number,
}

export interface Equipment {
  id: number;
  game_id: number;
  name: string;
  description: string;
  price: number;
  invoice_link: string;
  category: string;
  chain_id: number;
  template: string;
  action_type: string;
  sub_type: string;
  trading_volume: string;
  trading_volume_single: string;
  transactions: number;
  token: string;
  amount: string;
  bonus_percentage: number;
  created_at: string;
  level: number;
  tg_item: boolean;
  pc_item: boolean;
}

export interface Level {
  id: number;
  level: number;
  coins_per_hour: number;
  upgrade_reward: number;
  upgrade_coins: number;
}
