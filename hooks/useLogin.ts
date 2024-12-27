import { useState, useEffect } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { post } from '@/utils/http';

export interface UserData {
  id: number;
  username?: string;
  is_premium?: boolean;
  photo_url?: string;
}

interface UseLoginResult {
  userData: UserData | null;
  isLoading: boolean;
  error: string | null;
}

const useLogin = (): UseLoginResult => {
  const { WebApp, isInitialized, error: sdkError } = useTelegram();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!isInitialized || !WebApp) return;

    const handleLogin = async () => {
      try {
        if (!WebApp.initDataUnsafe?.user) {
          throw new Error('Telegram WebApp user data not available for Web site');
        }

        const tgUser = WebApp.initDataUnsafe.user as UserData;
        setUserData(tgUser);

        console.log(WebApp.initDataUnsafe, 'handleLogin ===== WebApp.initDataUnsafe')

        const inviterId = WebApp.initDataUnsafe.start_param && WebApp.initDataUnsafe.start_param.split('inviterId=')?.[1];

        const loginData = {
          tg_user_id: tgUser.id.toString(),
          tg_username: tgUser.username,
          tg_avatar: tgUser.photo_url,
          ...(inviterId && { inviter_tg_user_id: inviterId })
        };

        await post('/api/login', loginData);
        console.log('/api/login ---- Login successful');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error('Login error:', errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    handleLogin();
  }, [WebApp, isInitialized]);

  useEffect(() => {
    if (sdkError) {
      setError(sdkError);
      setIsLoading(false);
    }
  }, [sdkError]);

  return { userData, isLoading, error };
};

export default useLogin;