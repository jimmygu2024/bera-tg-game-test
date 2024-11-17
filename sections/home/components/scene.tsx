import { motion } from 'framer-motion';
import ImgAnimate from '@/sections/home/components/img-animate';
import { useMemo } from 'react';
import Big from 'big.js';

const Scene = (props: any) => {
  const { name, initial, animate, onAnimationComplete, duration, zIndex, speed } = props;

  let _speed = useMemo(() => {
    if (typeof speed !== 'number') return 1;
    if (Big(speed).lte(0)) return 1;
    return Big(1).div(speed).toNumber();
  }, [speed]);

  return (
    <motion.div
      className="h-full w-full overflow-x-hidden absolute left-0 top-0 z-[1]"
      style={{ zIndex }}
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        ease: 'linear',
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <ImgAnimate
        height="60vh"
        bgSrc={`/svg/bg/${name}/top-bg.svg`}
        src={`/svg/bg/${name}/top.svg`}
        duration={60 * _speed}
      />
      <div className="absolute left-0 bottom-0 z-[2]">
        <ImgAnimate
          height={400}
          src={`/svg/bg/${name}/mid.svg`}
          duration={40 * _speed}
          className="absolute left-0 top-[-300px] z-[1]"
        />
        <ImgAnimate
          height={250}
          src={`/svg/bg/${name}/bot-bg.svg`}
          duration={20 * _speed}
          className=""
        />
        <ImgAnimate
          height={120}
          src={`/svg/bg/${name}/bot.svg`}
          duration={10 * _speed}
          className="absolute left-0 bottom-0 z-[2]"
        />
      </div>
    </motion.div>
  );
};

export default Scene;
