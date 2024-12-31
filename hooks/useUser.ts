import { get } from '@/utils/http';
import { useTelegram } from '@/hooks/useTelegram';
import { Equipment, Level, useUserStore } from '@/stores/useUserStore';
import Big from 'big.js';
import { useEffect } from 'react';
import { orderBy } from 'lodash-es';

export function useUser() {
  const { WebApp } = useTelegram();
  const {
    equipmentList,
    setEquipmentList,
    equipmentListLoading,
    setEquipmentListLoading,
    userEquipmentList,
    userEquipmentSingleList,
    setUserEquipmentList,
    setUserEquipmentSingleList,
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
    addSpeed,
    setAddSpeed,
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
      const _list: Equipment[] = res.data || [];
      const _userEquipmentSingleList: Equipment[] = [];
      _list.forEach((it) => {
        it.obtained_at = it.obtained_at * 1000;
        const idx = _userEquipmentSingleList.findIndex((_it) => _it.category === it.category);
        if (idx < 0) {
          _userEquipmentSingleList.push(it);
          return;
        }
        if (Big(it.bonus_percentage).gt(_userEquipmentSingleList[idx].bonus_percentage)) {
          _userEquipmentSingleList[idx] = it;
        }
      });
      setUserEquipmentList(_list);
      setUserEquipmentSingleList(orderBy(_userEquipmentSingleList, ['obtained_at']));
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
      const _list: Level[] = res.data || [];
      setLevels(_list);
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
        creat_timestamp: res.data.creat_timestamp * 1000,
      });
    } catch (err) {
      console.log(err);
    }
    setUserInfoLoading(false);
  };

  useEffect(() => {
    const add = userEquipmentSingleList?.map?.((it: Equipment) => it.bonus_percentage / 100)?.reduce?.((a: number, b: number) => a + b, 0) ?? 0;
    setAddSpeed(add);
  }, [userEquipmentSingleList]);

  return {
    equipmentList,
    equipmentListLoading,
    getEquipmentList,
    userEquipmentList,
    userEquipmentSingleList,
    userEquipmentListLoading,
    getUserEquipmentList,
    levels,
    levelsLoading,
    getLevels,
    userInfo,
    userInfoLoading,
    getUserInfo,
    addSpeed,
  };
}
