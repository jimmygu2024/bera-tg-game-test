'use client'

import Home from '@/sections/home2/index';
import useLogin from '@/hooks/useLogin';

export default function Index() {
  const { userData } = useLogin();

  return (
    <Home />
  );
}
