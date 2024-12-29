import { useMemo, useState } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { get } from '@/utils/http';
import useToast from '@/hooks/use-toast';

export function useInvite() {
  const toast = useToast();
  const { WebApp } = useTelegram();
  const userInfo = WebApp?.initDataUnsafe?.user;

  const [total, setTotal] = useState<any>(0);
  const [loading, setLoading] = useState<any>(false);

  const shareLink = useMemo(() => {
    if (!process.env.NEXT_PUBLIC_APP_LINK) {
      console.error('APP_LINK is not set');
      return '';
    }

    const appLink = new URL(process.env.NEXT_PUBLIC_APP_LINK);
    const shareLink = new URL('https://t.me/share/url');
    appLink.searchParams.set('startapp', `inviterId=${userInfo?.id}`);
    shareLink.searchParams.set('url', appLink.toString());
    shareLink.searchParams.set('text', 'Look at this, it is so amazing');

    return shareLink.toString();
  }, []);

  const getTotal = async () => {
    setLoading(true);
    try {
      const res = await get('/api/user/invite/total', {
        tg_user_id: userInfo?.id,
      });
      if (res.code !== 200) return;
      setTotal(res.data.total);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (!shareLink) return;
    WebApp?.openTelegramLink?.(shareLink);
  };

  const handleCopy = () => {
    toast.dismiss();
    try {
      navigator.clipboard.writeText(shareLink);
      toast.success({ title: 'Copied to clipboard' });
    } catch (err) {
      console.log(err);
      toast.fail({ title: 'Could not copy clipboard' });
    }
  };

  return {
    loading,
    total,
    getTotal,
    shareLink,
    handleShare,
    handleCopy,
  };
}
