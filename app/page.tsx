'use client'
import Home from '@/sections/home';
import useLogin from '@/hooks/useLogin';

export default function Index() {
  useLogin();

  return (
    <Home />
  );
}
