'use client'

import Home from '@/sections/home/index';
import useLogin from '@/hooks/useLogin';

export default function Index() {
  const { userData } = useLogin();
  return (
    <Home />
  );
}
