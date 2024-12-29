import { memo, useEffect, useState } from "react";
import Header from '@/sections/home2/components/header';
import Content from '@/sections/home2/components/content';
import useLogin from "@/hooks/useLogin";
import { useSearchParams } from "next/navigation";



export default memo(function Home() {

  return (
    <div className="h-full flex flex-col items-stretch bg-[#FFD335] rounded-[10px] rounded-b-[0]">
      <Header />
      <Content />
    </div>
  )
});
