// hooks/useLogin.ts
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTelegram } from '@/hooks/useTelegram';
import { post } from '@/utils/http';

interface UserData {
  id: number;
  username?: string;
  is_premium?: boolean;
  avatar?: string;
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
  
  const searchParams = useSearchParams();
  const inviterId = searchParams.get('inviterId');

  useEffect(() => {
    if (!isInitialized || !WebApp) return;

    const handleLogin = async () => {
      try {
        if (!WebApp.initDataUnsafe?.user) {
          throw new Error('Telegram WebApp user data not available for Web site');
        }

        const tgUser = WebApp.initDataUnsafe.user as UserData;
        setUserData(tgUser);

        console.log(tgUser, 'handleLogin ===== tgUser')

        const loginData = {
          tg_user_id: tgUser.id.toString(),
          tg_username: tgUser.username,
          tg_avatar: tgUser.avatar,
          ...(inviterId && { inviter_tg_user_id: inviterId })
        };

        await post('/api/login', loginData);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error('Login error:', errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    handleLogin();
  }, [WebApp, isInitialized, inviterId]);

  useEffect(() => {
    if (sdkError) {
      setError(sdkError);
      setIsLoading(false);
    }
  }, [sdkError]);

  return { userData, isLoading, error };
};

export default useLogin;