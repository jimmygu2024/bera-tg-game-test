import { memo, useEffect, useState } from "react";
import Header from '@/sections/home2/components/header';
import Content from '@/sections/home2/components/content';
import useLogin from "@/hooks/useLogin";
import { useSearchParams } from "next/navigation";



export default memo(function Home() {
    const [inviteSource, setInviteSource] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('invite_source') || '';
    setInviteSource(source);
  }, []);

  useLogin({
    invite_source: inviteSource,
  })

  return (
    <div className="h-full flex flex-col items-stretch bg-[#FFD335] rounded-[10px] rounded-b-[0]">
      <Header />
      <Content />
    </div>
  )
});
