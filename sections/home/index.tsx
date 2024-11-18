'use client';

import HomeBg, { SceneList } from '@/sections/home/components/bg';
import { useRef, useState } from 'react';
import DressUpGame from './components/DressUpGame';

const Home = () => {

  const bgRef = useRef<any>();
  const [testCount, setTestCount] = useState<any>(0);

  return (
    <HomeBg
      ref={bgRef}
      speed={1.2}
      onSceneComplete={(params: any) => {
        console.log('onSceneComplete... %o', params);
        setTestCount(testCount + 1);
      }}
    >
      <DressUpGame />
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
