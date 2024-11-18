'use client';

import HomeBg, { SceneList } from '@/sections/home/components/bg';
import { useRef, useState, useEffect } from 'react';
import DressUpGame from './components/DressUpGame';
import Coin from '@/components/Coin';
import ProgressBar from './components/ProgressBar';

const Home = () => {

  const bgRef = useRef<any>();
  const [testCount, setTestCount] = useState<any>(0);
  const [coins, setCoins] = useState<any[]>([]);
  const [collectedCoins, setCollectedCoins] = useState(0);
  const TARGET_COINS = 10;

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
    console.log(`Coin with ID ${id} collected!`);
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
    setCollectedCoins(prev => prev + 1);
  };

  const progress = (collectedCoins / TARGET_COINS) * 100;

  const handleProgressComplete = () => {
    console.log('Progress complete!');
    setCollectedCoins(0);
  };

  return (
    <HomeBg
      ref={bgRef}
      speed={1.2}
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
      <div className='absolute bottom-[8rem] left-[1/2] translate-x-[10%]'>
        <DressUpGame />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ProgressBar 
          progress={progress} 
          onComplete={handleProgressComplete}
        />
      </div>

      <div className="">
        <button
          type="button"
          className="h-[32px] border border-[#4B371F] rounded-[10px] text-[16px] px-[20px] text-black bg-[#C7FF6E] flex justify-center items-center"
          onClick={() => {
            bgRef.current?.handleNextScene(SceneList[testCount % 2]);
          }}
        >
          Next Scene
        </button>
      </div>
    </HomeBg>
  );
}

export default Home;
