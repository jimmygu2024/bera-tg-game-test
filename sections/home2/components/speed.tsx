import { useContext } from 'react';
import { HomeContext } from '@/sections/home2';
import { numberFormatter } from '@/utils/number-formatter';

const Speed = () => {

  const speed = 0;
  const {
    currentCoins,
  } = useContext(HomeContext);

  return (
    <div className="mt-[46px] mx-auto flex items-center w-[252px] h-[50px] px-[5px] rounded-[53px] border border-[rgba(255,_255,_255,_0.20)] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.00)_100%)] backdrop-blur-[10px]">
      <div className="w-[42px]">
        <img src="/images/beraciaga/coin.svg" alt="coin" />
      </div>
      <div className="flex-1 px-[7px] text-[#FFF4C2] text-[26px] font-cherryBomb tracking-[1.3px] text-stroke-1">
        {numberFormatter(currentCoins, 3, true)}
      </div>
      <div className="flex items-center justify-center rounded-full w-[38px] h-[38px] bg-[url('/images/beraciaga/multiple_bg.svg')] bg-no-repeat bg-center bg-contain">
        <div
          className="text-[#6376FF] font-montserrat text-[20px] italic font-bold"
          style={{ textShadow: '#E1FF0A 1px 1px' }}
        >
          {speed}x
        </div>
      </div>
    </div>
  );
};

export default Speed;
