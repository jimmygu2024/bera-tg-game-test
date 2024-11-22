'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './components/card';
import Button from './components/button';
import LazyImage from '@/components/img';
import Reward from './components/reward';
import Task from './components/task';
import { useQuest } from '@/hooks/useQuest';
import Skeleton from 'react-loading-skeleton';

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

const EarnView = () => {
  const {
    loading,
    socialList,
    viewList,
    dailyList,
    pending,
    handleVerify,
    handleClick,
  } = useQuest();

  return (
    <div>
      <section className="mt-[1.25rem]">
        <div className="text-[1.125rem] text-[#4B371F] font-[700] pl-[1rem]">
          Daily
        </div>
        <div className="mt-[0.625rem] pl-[0.75rem]">
          {
            loading ? (
              <Skeleton width="9rem" height="11.31rem" borderRadius="1rem" />
            ) : (
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
                  dailyList.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Card className="w-full shrink-0 flex flex-col items-center">
                        <LazyImage
                          src=""
                          width="3.625rem"
                          height="3.625rem"
                        />
                        <div className="w-full mt-[0.5rem] text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {item.name}
                        </div>
                        <Reward className="mt-[0.5625rem] justify-center">
                          +{item.coins}
                        </Reward>
                        <Button
                          className="mt-[0.625rem] mx-auto whitespace-nowrap"
                          disabled={pending[item.id] || item.finished}
                          onClick={() => handleClick(item)}
                        >
                          {item.finished ? 'Checked' : 'Start'}
                        </Button>
                      </Card>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            )
          }
        </div>
        <div className="mt-[0.75rem] px-[0.75rem]">
          {
            loading ? (
              <Skeleton width="100%" height="5.13rem" borderRadius="1rem" />
            ) : (
              <Swiper
                spaceBetween={8}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {
                  viewList.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Card className="w-full">
                        <div className="flex items-center gap-[0.687500rem]">
                          <LazyImage
                            src=""
                            width="3.625rem"
                            height="3.625rem"
                            containerClassName="shrink-0"
                          />
                          <div className="flex flex-col flex-1 w-0">
                            <div className="">{item.name}</div>
                            <Reward className="mt-[0.562500rem]">
                              +{item.coins}
                            </Reward>
                          </div>
                          <Button
                            className="mt-[0.625000rem] ml-auto shrink-0 whitespace-nowrap"
                            disabled={pending[item.id]}
                            onClick={() => handleClick(item)}
                          >
                            Start
                          </Button>
                        </div>
                      </Card>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            )
          }
        </div>
      </section>
      <section className="mt-[1.25rem] pb-[2rem]">
        <div className="text-[1.125000rem] text-[#4B371F] font-[700] pl-[1rem]">
          Social
        </div>
        <div className="flex flex-col gap-[0.625000rem] mt-[0.625000rem] px-[0.750000rem]">
          {
            loading ? (
              <>
                <Skeleton width="100%" height="4.88rem" borderRadius="1rem" />
                <Skeleton width="100%" height="4.88rem" borderRadius="1rem" />
                <Skeleton width="100%" height="4.88rem" borderRadius="1rem" />
              </>
            ) : (socialList.map((item) => (
              <Task
                key={item.id}
                {...item}
                disabled={pending[item.id]}
                onClick={() => handleClick(item)}
              />
            )))
          }
        </div>
      </section>
    </div>
  );
};

export default EarnView;
