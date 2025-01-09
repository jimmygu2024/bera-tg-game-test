import { useState } from 'react';
import { get, post } from '@/utils/http';
import { useTelegram } from './useTelegram';
import useBindStore from '@/stores/useBindStore';
import useToast from '@/hooks/use-toast';

export const useBind = () => {
  const [loading, setLoading] = useState(false);
  const [bindLoading, setBindLoading] = useState(false);
  const telegram = useTelegram();
  const { setBind, bindAddress } = useBindStore();
  const toast = useToast();

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
    } catch(err) {
      console.log(err, '--fetchBindStatus-err---');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const bind = async (address: string) => {
    toast.dismiss();
    setBindLoading(true);
    try {
      const res = await post('/api/user/bind', {
        tg_user_id: telegram.WebApp?.initDataUnsafe?.user?.id.toString(),
        address,
        source: 'okx_invite',
      });
      if (res.code !== 200) {
        toast.fail({
          title: res?.message,
        });
        return false;
      }
      setBind(address);
      return true;
    } catch (err : any) {
      toast.fail({
        title: err?.message ?? 'Bind failed!',
      });
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
    bindAddress
  };
};
