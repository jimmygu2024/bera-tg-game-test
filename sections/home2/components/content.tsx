import DropCoins from '@/sections/home2/components/drop-coins';
import Reward from '@/sections/home2/components/reward';
import Speed from '@/sections/home2/components/speed';

const Content = () => {

  return (
    <div className="overflow-y-auto h-0 flex-1">
      <div className="flex items-center justify-center w-[190px] h-[35px] mx-auto bg-[url('/images/beraciaga/luck_box.svg')] bg-no-repeat bg-center font-montserrat text-white text-[18px] font-bold italic uppercase">
        Lucky Box
      </div>
      <div className="relative -top-[17px] w-full px-[0.75rem] h-[34.3125rem] mx-auto bg-[url('/images/beraciaga/luck_box_bg.svg')] bg-no-repeat bg-center bg-[length:22.6875rem_34.3125rem]">
        <DropCoins />
        <div className="relative z-[1]">
          <div className="pt-[42px] text-center text-white font-montserrat text-[48px] font-bold tracking-[2.4px]">BERACIAGA</div>
          <div className="relative mt-[72px] mx-auto w-[245px] h-[245px] justify-center">
            <div className="relative w-[245px] h-[245px] bg-[url('/images/beraciaga/yellow_circle.svg')] bg-no-repeat bg-center blur-[50px]" />
            <div className="absolute left-0 top-0 right-0 bottom-0">
              <div className="absolute top-[31px] left-[58px] w-[150px]">
                <img src="/images/beraciaga/big_bear.svg" alt="big_bear" />
              </div>
            </div>
          </div>
          <Speed />
          <Reward />
        </div>
      </div>
    </div>
  );
};

export default Content;
