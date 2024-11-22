'use client';

import HomeBg from '@/sections/home/components/bg';
import { useRef, useState, useEffect } from 'react';
import DressUpGame from './components/DressUpGame';
import Coin from '@/sections/home/components/Coin';
import ProgressBar from './components/ProgressBar';
import { SceneList } from '@/sections/home/components/types';
import { useRouter } from 'next/navigation'
import { useAudio } from '@/hooks/useAudio';

const Home = () => {

  const bgRef = useRef<any>();
  const [testCount, setTestCount] = useState<any>(0);
  const [coins, setCoins] = useState<any[]>([]);
  const [collectedCoins, setCollectedCoins] = useState(0);
  const [sceneIdx, setSceneIdx] = useState(1);
  const TARGET_COINS = 10;
  const router = useRouter();

  const { play: playSound } = useAudio({
    src: '/audios/coin.mp3',
    volume: 0.5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prevCoins: any) => [
        ...prevCoins,
        {
          id: Math.random(),
          x: Math.random() * 300, 
          y: 0,
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCollected = (id: number) => {
    // console.log(`Coin with ID ${id} collected!`);
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
    setCollectedCoins(prev => prev + 1);
    playSound()

  };

  const progress = (collectedCoins / TARGET_COINS) * 100;

  const handleProgressComplete = () => {
    console.log('Progress complete!');
    setCollectedCoins(0);
  };

  return (
    <HomeBg
      ref={bgRef}
      speed={3}
      onSceneComplete={(params: any) => {
        console.log('onSceneComplete... %o', params);
        setTestCount(testCount + 1);
      }}
    >
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          id={coin.id}
          initialX={coin.x}
          onCollected={handleCollected}
        />
      ))}
      <div className='absolute bottom-[8rem] left-1/2 translate-x-[-50%]'>
        <DressUpGame />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ProgressBar 
          progress={progress} 
          onComplete={handleProgressComplete}
        />
      </div>

      <div className="flex gap-2 items-center">
        <button
          type="button"
          className="h-[32px] border border-[#4B371F] rounded-[10px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center"
          onClick={() => {
            const sceneList = Object.values(SceneList);
            bgRef.current?.handleNextScene(sceneList[sceneIdx]);
            let _sceneIdx = sceneIdx + 1;
            if (_sceneIdx > sceneList.length - 1) {
              _sceneIdx = 0;
            }
            setSceneIdx(_sceneIdx);
          }}
        >
          Next Scene
        </button>
        <button
          onClick={() => router.push('/boost')}
          type="button"
          className="h-[32px] border border-[#4B371F] rounded-[10px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center"
        >
          Shop Scene
        </button>
      </div>
    </HomeBg>
  );
}

export default Home;
