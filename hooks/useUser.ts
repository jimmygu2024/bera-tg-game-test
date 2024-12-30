import { get } from '@/utils/http';
import { useTelegram } from '@/hooks/useTelegram';
import { useUserStore } from '@/stores/useUserStore';

export function useUser() {
  const { WebApp } = useTelegram();
  const {
    equipmentList,
    setEquipmentList,
    equipmentListLoading,
    setEquipmentListLoading,
    userEquipmentList,
    setUserEquipmentList,
    userEquipmentListLoading,
    setUserEquipmentListLoading,
    levels,
    setLevels,
    levelsLoading,
    setLevelsLoading,
    userInfo,
    setUserInfo,
    userInfoLoading,
    setUserInfoLoading,
  } = useUserStore();

  const tgUserId = WebApp?.initDataUnsafe?.user?.id;

  const getEquipmentList = async () => {
    setEquipmentListLoading(true);
    try {
      const res = await get('/api/game/items', { tg_user_id: tgUserId });
      if (res.code !== 200) {
        setEquipmentListLoading(false);
        return;
      }
      setEquipmentList(res.data || []);
    } catch (err) {
      console.log(err);
    }
    setEquipmentListLoading(false);
  };

  const getUserEquipmentList = async () => {
    setUserEquipmentListLoading(true);
    try {
      const res = await get('/api/game/items/user', { tg_user_id: tgUserId });
      if (res.code !== 200) {
        setUserEquipmentListLoading(false);
        return;
      }
      setUserEquipmentList(res.data || []);
    } catch (err) {
      console.log(err);
    }
    setUserEquipmentListLoading(false);
  };

  const getLevels = async () => {
    setLevelsLoading(true);
    try {
      const res = await get('/api/game/levels');
      if (res.code !== 200) {
        setLevelsLoading(false);
        return;
      }
      setLevels(res.data || []);
    } catch (err) {
      console.log(err);
    }
    setLevelsLoading(false);
  };

  const getUserInfo = async () => {
    setUserInfoLoading(true);
    try {
      const res = await get('/api/user', { tg_user_id: tgUserId });
      if (res.code !== 200) {
        setUserInfoLoading(false);
        return;
      }
      setUserInfo({
        ...res.data,
        bind_okx_reward_coins: 1000000,
        bind_okx_reward_coupons: 9.99,
      });
    } catch (err) {
      console.log(err);
    }
    setUserInfoLoading(false);
  };

  return {
    equipmentList,
    equipmentListLoading,
    getEquipmentList,
    userEquipmentList,
    userEquipmentListLoading,
    getUserEquipmentList,
    levels,
    levelsLoading,
    getLevels,
    userInfo,
    userInfoLoading,
    getUserInfo,
  };
}
