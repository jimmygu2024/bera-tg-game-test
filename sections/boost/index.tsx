'use client'
import ResourceItem from "@/components/ResourceItem/ResourceItem";

import Popup from './popup';
import Module, { ModuleItem } from './components/Module';
import { ModuleConfigs } from './config';


import IconFlash from "@/public/svg/flash.svg";
import { useGameItems } from "./hooks/useGameItems";
import { useTelegram } from '@/hooks/useTelegram';

const BoostIndex = () => {
  const { WebApp } = useTelegram();
  const { moduleConfigs, loading} = useGameItems();
  
  const handleItemClick = (item: any) => {
    console.log(WebApp, 'WebApp')
    if (!WebApp || !item?.data?.invoice_link) return;
    WebApp.openInvoice(
      item.data.invoice_link,
      (status: any) => {
        if (status.paid) {
          console.log('Invoice paid successfully');
        } else {
          console.log('Invoice was not paid');
        }
      }
    );
  }

  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#96D6FF]">
      <div className="w-full my-[20px]">
        <ResourceItem title="Boost" level={2} coins={13400} total={23450} />
      </div>
      <div className="h-full relative pb-[80px]">
        <div className="absolute right-0 top-0"> 
          <div className="px-[0.875rem] py-[0.625rem] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[3px]"><IconFlash /><span className="font-[700] text-[18px] text-center leading-[18px] text-black  ">+300%</span></div>
        </div>
        <div
        className=''
        style={{
          backgroundImage: `url('/images/cave/header.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '30.384vw',
          width: '100vw'
        }}
      >
      </div>
      <div className='bg-[#9C948F] h-[190vw] w-full'>
        <div
          className='absolute bottom-0'
          style={{
            backgroundImage: `url('/images/cave/bottom.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '82.05vw',
            width: '100vw'
          }}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center justify-center mt-[10.512vw] relative">
            <img
              src="/images/cave/backStripe.png"
              className="w-[96.417vw] h-[12.37vw]"
              alt=""
            />

            <Module
              config={{
                ...moduleConfigs.hats,
                onItemClick: handleItemClick,
              }}
            />
            
            <Module config={{
              ...moduleConfigs.jackets,
              onItemClick: handleItemClick,
            }} />

            <img
              src="/images/cave/backStripe.png"
              className="w-[96.417vw] h-[12.37vw] absolute top-[57.282vw]"
              alt=""
            />

            {/* Jewelry Modules */}
            <div
              className="absolute top-[73vw] left-2"
              style={{
                backgroundImage: `url('/images/cave/cupboard-1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "46.923vw",
                width: "98.461vw",
              }}
            >
              <Module config={
                {
                  ...moduleConfigs.necklaces,
                  onItemClick: handleItemClick,
                }
                } />
            </div>

            {/* Key Modules */}
            <div
              className="absolute top-[123.43vw] left-2"
              style={{
                backgroundImage: `url('/images/cave/cupboard-2.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "38.974vw",
                width: "98.461vw",
              }}
            >
              <Module config={{
                ...moduleConfigs.cars,
                onItemClick: handleItemClick,
              }} />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Popup />
    </div>
  );
};

export default BoostIndex;
