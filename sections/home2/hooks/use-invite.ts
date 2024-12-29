import { useMemo, useState } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { get } from '@/utils/http';
import useToast from '@/hooks/use-toast';

// FIXME
const testData = {
  allows_write_to_pm: true,
  first_name: 'gu',
  id: 7150006688,
  language_code: 'zh-hans',
  last_name: 'jimmy',
  photo_url: 'https://t.me/i/userpic/320/i2-BRTWcSQoXawvpUSVv78kuH2IMkVBXItH61uWUjHYGATen0Zf2m-qRI1i7HXIr.svg',
  username: 'jimmyguu',
};

export function useInvite() {
  const toast = useToast();
  const { WebApp } = useTelegram();
  const userInfo = WebApp?.initDataUnsafe?.user ?? testData;

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
