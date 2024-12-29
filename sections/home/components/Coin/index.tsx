import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useCollisionDetection } from "@/sections/home/hooks/useCollisionDetection";

const Coin = ({id, initialX, onCollected, amount }: {id: any; initialX: number; onCollected: (id: number) => void; amount?: string }) => {
  const [opacity, setOpacity] = useState(1);
  const coinRef = useRef<HTMLDivElement>(null);
  // const isColliding = useCollisionDetection(coinRef);
  
  // useEffect(() => {
  //   if (isColliding) {
  //     onCollected(id);
  //   }
  // }, [isColliding, id, onCollected]);

  return (
    <motion.div
      ref={coinRef}
      initial={{ x: initialX, y: 0, opacity: 1 }}
      animate={{ y: '50dvh' }} 
      transition={{
        duration: 3,
        ease: "linear",
      }}
      onUpdate={(latest) => {
        if (typeof latest.y === 'string' && latest.y.endsWith('dvh')) {
          const currentDvh = parseFloat(latest.y);
          if (currentDvh > 45) {
            setOpacity(0.3);
          }
        }
      }}
      onAnimationComplete={() => {
        console.log('Coin animation completed!');
        onCollected(id);
      }}
      className="flex flex-col items-center justify-center"
      style={{
        position: "absolute",
        width: "53px",
        textAlign: "center",
      }}
    >
      <motion.div
        className="font-cherryBomb text-[26px] font-[400] leading-[26px] text-left underline-[from-font] text-decoration-skip-ink-[none] text-stroke-2"
        style={{
          color: "#F7F9EA",
          marginBottom: "5px",
          opacity,
        }}
      >
        +{amount || '0'}
      </motion.div>
      <motion.div
        style={{
          width: "53px",
          height: "53px",
          background: "url('/svg/coin.svg') no-repeat center",
          backgroundSize: "contain",
          opacity,
        }}
      />
    </motion.div>
  );
};

export default Coin;