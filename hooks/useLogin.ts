import WebApp from '@twa-dev/sdk';
import { useState, useEffect } from 'react';
import { post } from '@/utils/http';
import { useSearchParams } from 'next/navigation';

interface UserData {
  id: number;
  username?: string;
  is_premium?: boolean;
  avatar?: string;
}

interface LoginResponse {
  success: boolean;
  data?: {
    token?: string;
    user?: UserData;
  };
  error?: string;
}

interface UseLoginResult {
  userData: UserData | null;
  isLoading: boolean;
  error: string | null;
}

const useLogin = (): UseLoginResult => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const inviterId = searchParams.get('inviterId');

  useEffect(() => {
    const handleLogin = async () => {
      try {
        if (!WebApp.initDataUnsafe?.user) {
          throw new Error('Telegram WebApp user data not available');
        }

        const tgUser = WebApp.initDataUnsafe.user as UserData;

        console.log(tgUser, 'handleLogin ==== tgUser')

        setUserData(tgUser);

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
  }, [inviterId]);

  return {
    userData,
    isLoading,
    error
  };
};

export default useLogin;