import { createContext, memo } from 'react';
import Header from '@/sections/home2/components/header';
import Content from '@/sections/home2/components/content';
import { useCoins } from '@/sections/home2/hooks/use-coins';

export const HomeContext = createContext<any>({});

export default memo(function Home() {
  const coins = useCoins();

  return (
    <HomeContext.Provider value={{ ...coins }}>
      <div className="h-full flex flex-col items-stretch bg-[#FFD335] rounded-[10px] rounded-b-[0]">
        <Header />
        <Content />
      </div>
    </HomeContext.Provider>
  )
});
