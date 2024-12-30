import { useContext } from 'react';
import { HomeContext } from '@/sections/home2';

const Reward = () => {
  const { userInfo } = useContext(HomeContext);

  return userInfo?.bind_source === 'okx_invite' && (
    <div className="mt-[8px] mx-[auto] w-[200px] h-[25px] rounded-[55px] border border-black bg-[#FF79A4] pl-[4px] pr-[2px] flex items-center  justify-between">
      <div className="flex items-center gap-[2px]">
        <div className="w-[18px]">
          <img src="/images/beraciaga/coin.svg" alt="coin" />
        </div>
        <div className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[14px]">+1,000,000</div>
      </div>
      <div className="flex items-center">
        <div className="w-[14.4px]">
          <img src="/images/beraciaga/ticket.svg" alt="ticket" />
        </div>
        <div className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[14px] pl-[4px] pr-[7px]">$9.99</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <circle cx="10.5" cy="10.5" r="10.5" fill="black" fill-opacity="0.3" />
          <path d="M6 9.84211L9.10345 13L15 7" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Reward;
