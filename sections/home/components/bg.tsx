'use client';

import Scene from '@/sections/home/components/scene';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useThrottleFn } from 'ahooks';

const HomeBg = forwardRef<any, any>((props, ref) => {
  const { children, onSceneComplete, speed } = props;

  const [currentScene, setCurrentScene] = useState<any>(SceneList[0]);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<any>(1);
  const [nextScene, setNextScene] = useState<any>('');
  const [nextSceneIndex, setNextSceneIndex] = useState<any>(1);
  const [firstScene, setFirstScene] = useState(true);

  const { run: handleNextScene } = useThrottleFn((name: string) => {
    if (currentScene) {
      setNextScene(name);
      setCurrentSceneIndex(1);
      setNextSceneIndex(2);
      return;
    }
    setCurrentScene(name);
    setCurrentSceneIndex(2);
    setNextSceneIndex(1);
  }, { wait: SwitchSceneDuration * 1000 });

  const refs = {
    firstScene,
    handleNextScene,
    currentScene,
    nextScene,
  };
  useImperativeHandle(ref, () => refs);

  return (
    <div className="h-full w-full relative">
      <div className="h-full w-full relative overflow-x-hidden overflow-y-auto z-[1]">
        {children}
      </div>
      <div className="h-full w-full absolute left-0 top-0 z-[0]">
        {
          currentScene && (
            <Scene
              name={currentScene}
              duration={firstScene ? 0 : SwitchSceneDuration}
              zIndex={currentSceneIndex}
              speed={speed}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => {
                setNextScene('');
                setFirstScene(false);
                onSceneComplete({ scene: currentScene, firstScene });
              }}
            />
          )
        }
        {
          nextScene && (
            <Scene
              name={nextScene}
              duration={SwitchSceneDuration}
              zIndex={nextSceneIndex}
              speed={speed}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => {
                setCurrentScene('');
                onSceneComplete({ scene: nextScene, firstScene });
              }}
            />
          )
        }
      </div>
    </div>
  );
});

export default HomeBg;

export const SwitchSceneDuration = 3;
export const SceneList = [
  'desert',
  'grass',
];
