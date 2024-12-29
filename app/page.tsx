'use client'

import Home from '@/sections/home2/index';
import useLogin from '@/hooks/useLogin';

export default function Index() {
  useLogin();
  return (
    <Home />
  );
}
