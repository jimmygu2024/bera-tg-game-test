import { memo } from "react";

export default memo(function BeraciagaFrens() {

  return (
    <div className="h-[100dvh] bg-[#FFD335] rounded-[10px]">
      <div className="px-[8px] pt-[8px] flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative z-10 flex items-center justify-center w-[50px] h-[50px] bg-[url('/images/beraciaga/avator_box.svg')] bg-no-repeat bg-center">
            <div className="w-[22px]">
              <img src="/images/beraciaga/avator.svg" alt="avator" />
            </div>
          </div>
          <div className="relative -left-[10px] bg-[rgba(38, 38, 38, 0.30)] border-2 border-[rgba(51, 50, 48, 0.38)] rounded-[12px] py-[8px] pr-[12px] pl-[18px] text-[#F7F9EA] font-montserrat text-[12px] font-semibold leading-[100%]">
            @Mency123
          </div>
        </div>

        <div className="w-[150px] h-[40px] rounded-[10px] border border-[#709D27] bg-[#7DB425] backdrop-blur-[5px]">
          <div className="flex items-center justify-center gap-[8px] relative -top-[5px] w-full h-full rounded-[10px] border border-[#709D27] bg-[#C7FF6E] backdrop-blur-[5px]">
            <div className="w-[34px]">
              <img src="/images/beraciaga/equipments.svg" alt="equipments" />
            </div>
            <div className="text-[#F7F9EA] font-cherryBomb text-stroke-1 text-[14px] leading-[100%]">Import<br /> Equipments</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[190px] h-[35px] mx-auto bg-[url('/images/beraciaga/luck_box.svg')] bg-no-repeat bg-center font-montserrat text-white text-[18px] font-bold italic uppercase" >
        Lucky Box
      </div>

      <div className="relative -top-[17px] w-[363px] h-[549px] mx-auto bg-[url('/images/beraciaga/luck_box_bg.svg')] bg-no-repeat bg-center">
        <div className="pt-[42px] text-center text-white font-montserrat text-[48px] font-bold tracking-[2.4px]">BERACIAGA</div>
        <div className="relative mt-[72px] mx-auto w-[245px] h-[245px] justify-center">
          <div className="relative w-[245px] h-[245px] bg-[url('/images/beraciaga/yellow_circle.svg')] bg-no-repeat bg-center blur-[50px]" />
          <div className="absolute left-0 top-0 right-0 bottom-0">
            <div className="absolute top-[31px] left-[58px] w-[150px]">
              <img src="/images/beraciaga/big_bear.svg" alt="big_bear" />
            </div>
            <div className="absolute -top-[35px] left-[43px]">
              <div className="absolute -left-[8px] -top-[2px] -translate-y-[100%] text-[#F7F9EA] text-stroke-2 font-cherryBomb text-[26px] leading-[100%]">+100</div>
              <div className="w-[53px] h-[53px]">
                <img src="/images/beraciaga/coin.svg" alt="coin" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[46px] mx-auto flex items-center w-[252px] h-[50px] px-[5px] rounded-[53px] border border-[rgba(255, 255, 255, 0.20)] bg-[linear-gradient(180deg,_rgba(255, 255, 255, 0.20)_0%,_rgba(255, 255, 255, 0.00)_100%)] backdrop-blur-[10px]">
          <div className="w-[42px]">
            <img src="/images/beraciaga/coin.svg" alt="coin" />
          </div>
          <div className="flex-1 px-[7px] text-[#FFF4C2] text-[26px] font-cherryBomb tracking-[1.3px]">1.004,400</div>
          <div className="flex items-center justify-center w-[38px] h-[38px] bg-[url('/images/beraciaga/multiple_bg.svg')] bg-no-repeat bg-center">
            <div className="text-[#6376FF] font-montserrat text-[20px] italic font-bold text-stroke-1-E1FF0A">4x</div>
          </div>
        </div>

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
      </div>


    </div>
  )
});
