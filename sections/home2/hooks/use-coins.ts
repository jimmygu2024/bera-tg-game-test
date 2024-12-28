import { useEffect, useRef, useState } from 'react';
import { useAudio } from '@/hooks/useAudio';

const createNewCoin = () => {
  return {
    id: Math.random(),
    x: Math.random() * 300,
    y: 0,
  };
};

export function useCoins() {
  const coinTimer = useRef<any>();

  const [coins, setCoins] = useState<any[]>([createNewCoin()]);
  const [collectedCoins, setCollectedCoins] = useState(0);
  const TARGET_COINS = 10;

  const { play: playSound } = useAudio({
    src: '/audios/coin.mp3',
    volume: 0.5
  });

  const handleCollected = (id: number) => {
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
    setCollectedCoins(prev => prev + 1);
    playSound()
  };

  const progress = (collectedCoins / TARGET_COINS) * 100;

  const handleProgressComplete = () => {
    console.log('Progress complete!');
    setCollectedCoins(0);
  };

  useEffect(() => {
    const createInterval = () => {
      setCoins((prevCoins: any) => [
        ...prevCoins,
        createNewCoin(),
      ]);
    };

    coinTimer.current = setInterval(createInterval, 3000);

    const visibilityEvent = () => {
      const isHidden = document.hidden || document.visibilityState === 'hidden';
      clearInterval(coinTimer.current);
      if (!isHidden) {
        createInterval();
        coinTimer.current = setInterval(createInterval, 3000);
      }
    };
    document.addEventListener('visibilitychange', visibilityEvent);

    return () => {
      clearInterval(coinTimer.current);
      document.removeEventListener('visibilitychange', visibilityEvent);
    };
  }, []);

  return {
    coins,
    progress,
    handleCollected,
    handleProgressComplete,
  };
}
