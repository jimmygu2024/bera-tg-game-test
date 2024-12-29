import { useState } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { get } from '@/utils/http';

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
  const telegram = useTelegram();
  const userInfo = telegram.WebApp?.initDataUnsafe?.user ?? testData;

  const [total, setTotal] = useState<any>(0);
  const [loading, setLoading] = useState<any>(false);

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

  return {
    total,
    getTotal,
  };
}
