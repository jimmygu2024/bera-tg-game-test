import { useState } from 'react';
import { get, post } from '@/utils/http';
import { useTelegram } from './useTelegram';
import useBindStore from '@/stores/useBindStore';

export const useBind = () => {
  const [loading, setLoading] = useState(false);
  const [bindLoading, setBindLoading] = useState(false);
  const telegram = useTelegram();
  const { setBind } = useBindStore();
  const bindAddress = useBindStore((state) => state.bindAddress);

  const fetchBindStatus = async () => {
    setLoading(true);
    try {
      const res = await get('/api/user/bind', {
        tg_user_id: telegram.WebApp?.initDataUnsafe?.user?.id.toString(),
      });
      console.log(res, '---res---');
      if (res.data.address) {
        setBind(res.data.address);
        return res.data.address;
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  const bind = async () => {
    setBindLoading(true);
    try {
      await post('/api/user/bind', {
        tg_user_id: telegram.WebApp?.initDataUnsafe?.user?.id.toString(),
        address: bindAddress,
      });
      return true;
    } catch (err) {
      return false;
    } finally {
      setBindLoading(false);
    }
  };

  return {
    loading,
    fetchBindStatus,
    bindLoading,
    bind,
  };
};
