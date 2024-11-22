import { useEffect, useState } from 'react';
import { get } from '@/utils/http';
import { useTelegram } from '@/hooks/useTelegram';
import type { UserData } from '@/hooks/useLogin';

export function useQuest() {
  const { WebApp, isInitialized } = useTelegram();
  const userData: UserData = WebApp?.initDataUnsafe?.user;

  const [list, setList] = useState();

  const getList = async () => {
    const res = await get('/quest/list', { tg_user_id: userData?.id });
    console.log('userData: %o', userData);
    console.log('res: %o', res);
  };

  useEffect(() => {
    if (!userData) return;
    getList();
  }, [userData]);

  return {
    userData,
    list,
    getList,
  };
}
