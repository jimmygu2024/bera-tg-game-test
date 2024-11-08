'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@/app/earn/components/card';
import Button from '@/app/earn/components/button';
import LazyImage from '@/components/img';
import Reward from '@/app/earn/components/reward';
import Task from '@/app/earn/components/task';

const DailyList = [
  { key: 1, title: 'Daily Check-in', icon: '', reward: 100 },
  { key: 2, title: 'GM in TG', icon: '', reward: 100 },
  { key: 3, title: 'Share', icon: '', reward: 100 },
  { key: 4, title: 'Like, comment, retweet', icon: '', reward: 100 },
  { key: 5, title: 'Join Telegram group', icon: '', reward: 100 },
];

const TaskList = [
  { key: 1, title: 'Follow Beraciaga', icon: '', reward: 100, finished: true },
  { key: 2, title: 'Like, comment, retweet', icon: '', reward: 100 },
  { key: 3, title: 'Join Telegram group', icon: '', reward: 100 },
  { key: 4, title: 'Join Discord channel', icon: '', reward: 100 },
];

const Earn = () => {

  return (
    <div>
      <section className="mt-[1.25rem]">
        <div className="text-[1.125rem] text-[#4B371F] font-[700] pl-[1rem]">
          Daily
        </div>
        <div className="mt-[0.625rem] pl-[0.75rem]">
          <Swiper
            spaceBetween={8}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{
              paddingRight: '4.5rem',
            }}
          >
            {
              DailyList.map((item) => (
                <SwiperSlide key={item.key}>
                  <Card className="w-full shrink-0 flex flex-col items-center">
                    <LazyImage
                      src={item.icon}
                      width="3.625rem"
                      height="3.625rem"
                    />
                    <div className="w-full mt-[0.5rem] text-center whitespace-nowrap overflow-hidden overflow-ellipsis">{item.title}</div>
                    <Reward className="mt-[0.5625rem] justify-center">
                      +{item.reward}
                    </Reward>
                    <Button className="mt-[0.625rem] mx-auto">
                      GM
                    </Button>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="mt-[0.75rem] px-[0.75rem]">
          <Card className="w-full">
            <div className="flex items-center gap-[0.687500rem]">
              <LazyImage
                src=""
                width="3.625rem"
                height="3.625rem"
              />
              <div className="flex flex-col">
                <div className="">Watching Ads</div>
                <Reward className="mt-[0.562500rem]">
                  +100
                </Reward>
              </div>
              <Button className="mt-[0.625000rem] ml-auto">
                Start
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <section className="mt-[1.25rem]">
        <div className="text-[1.125000rem] text-[#4B371F] font-[700] pl-[1rem]">
          Social
        </div>
        <div className="flex flex-col gap-[0.625000rem] mt-[0.625000rem] px-[0.750000rem]">
          {
            TaskList.map((item) => (
              <Task key={item.key} title={item.title} reward={item.reward} icon={item.icon} finished={item.finished} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Earn;
