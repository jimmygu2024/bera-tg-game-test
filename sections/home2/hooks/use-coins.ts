import { useEffect, useRef, useState } from 'react';
import { useAudio } from '@/hooks/useAudio';
import Big from 'big.js';
import { Equipment, useUserStore } from '@/stores/useUserStore';
import { getRandomNumber } from '@/utils/utils';
import { useRingStore } from '@/stores/useRingStore';

// seconds
const coins_duration = 2;

const createNewCoin = (latestAmount: Big.Big, coinsPerSecond: Big.Big) => {
  return {
    id: Math.random(),
    latestAmount,
    amount: Big(coinsPerSecond).times(coins_duration),
    x: getRandomNumber(15, 295),
    y: 0,
  };
};

const calcLatestCoins = (props: { coins_per_hour: number; creat_timestamp: number; userEquipmentSingleList?: Equipment[]; }) => {
  const { coins_per_hour, creat_timestamp, userEquipmentSingleList } = props;

  const currentTimestamp = new Date().getTime();
  const currentCoinsPerHour = Big(coins_per_hour);

  const calc = (perH: Big.Big, start: Big.Big | number, end: Big.Big | number) => {
    const coinCountPerSecond = Big(perH).div(Big(60).times(60));
    const diffHours = Big(Big(end).minus(start)).div(Big(1000).times(60).times(60)).toFixed(0, Big.roundDown);
    const lastSeconds = Big(Big(end).minus(start)).mod(Big(1000).times(60).times(60)).div(1000).toFixed(0, Big.roundDown);
    const lastCoins = Big(lastSeconds).times(coinCountPerSecond);

    // console.log('-----> diffHours: %o', diffHours);
    // console.log('-----> lastSeconds: %o', lastSeconds);
    // console.log('-----> lastCoins: %o', lastCoins.toString());

    return {
      value: Big(lastCoins).plus(Big(diffHours).times(perH)),
      coinsPerSecond: coinCountPerSecond,
    };
  };

  if (userEquipmentSingleList?.length) {
    const results: any = [];
    let addSpeed = Big(0);
    for (let i = 0; i < userEquipmentSingleList.length; i++) {
      const equipment = userEquipmentSingleList[i];
      addSpeed = Big(addSpeed).plus(Big(equipment.bonus_percentage || 0).div(100));
      if (Big(equipment.obtained_at).lte(currentTimestamp)) {
        continue;
      }
      if (i === 0) {
        results.push(calc(currentCoinsPerHour, creat_timestamp, equipment.obtained_at));
        continue;
      }
      const _currPerHour = Big(coins_per_hour).times(Big(1).plus(addSpeed));
      results.push(calc(_currPerHour, userEquipmentSingleList[i - 1].obtained_at, equipment.obtained_at));
    }
    if (Big(creat_timestamp).gt(userEquipmentSingleList[userEquipmentSingleList.length - 1].obtained_at)) {
      if (Big(currentTimestamp).gt(creat_timestamp)) {
        const _currPerHour = Big(coins_per_hour).times(Big(1).plus(addSpeed));
        results.push(calc(_currPerHour, creat_timestamp, currentTimestamp));
      }
    } else {
      if (Big(currentTimestamp).gt(userEquipmentSingleList[userEquipmentSingleList.length - 1].obtained_at)) {
        const _currPerHour = Big(coins_per_hour).times(Big(1).plus(addSpeed));
        results.push(calc(_currPerHour, userEquipmentSingleList[userEquipmentSingleList.length - 1].obtained_at, currentTimestamp));
      }
    }

    let totalValue = Big(0);
    results.forEach((it: any) => {
      totalValue = Big(totalValue).plus(it.value);
    });

    return {
      value: totalValue,
      coinsPerSecond: results[results.length - 1].coinsPerSecond,
    };
  }

  return calc(currentCoinsPerHour, creat_timestamp, currentTimestamp);
};

export function useCoins() {
  const coinTimer = useRef<any>();
  const {
    addSpeed,
    levels,
    userInfo,
    userEquipmentListLoading,
    userInfoLoading,
    levelsLoading,
    userEquipmentSingleList,
  } = useUserStore();
  const ringStore = useRingStore();

  const [coins, setCoins] = useState<any[]>([]);
  const [collectedCoins, setCollectedCoins] = useState(0);
  const [latestCoins, setLatestCoins] = useState(Big(0));
  const [currentCoins, setCurrentCoins] = useState(Big(0));
  const TARGET_COINS = 10;

  const { play: playSound } = useAudio({
    src: '/audios/coin.mp3',
    volume: 0.5
  });

  const handleCollected = (id: number) => {
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
    setCollectedCoins(prev => prev + 1);
    if (ringStore.open) {
      playSound();
    }
    const curr = coins.find((it: any) => it.id === id);
    curr && setCurrentCoins(() => curr.latestAmount);
  };

  const progress = (collectedCoins / TARGET_COINS) * 100;

  const handleProgressComplete = () => {
    console.log('Progress complete!');
    setCollectedCoins(0);
  };

  useEffect(() => {
    if (!userInfo || !userInfo.creat_timestamp || !userInfo.level || userEquipmentListLoading || userInfoLoading || levelsLoading) return;

    const creatTimestamp = userInfo?.creat_timestamp;
    const coinsPerHour = levels?.find((l) => l.level === userInfo?.level)?.coins_per_hour ?? 0;

    const { value: _latestCoins } = calcLatestCoins({
      coins_per_hour: coinsPerHour,
      creat_timestamp: creatTimestamp,
      userEquipmentSingleList,
    });
    setLatestCoins(_latestCoins);
    setCurrentCoins(_latestCoins);

    const createInterval = () => {
      const { value: _latestCoins, coinsPerSecond } = calcLatestCoins({
        coins_per_hour: coinsPerHour,
        creat_timestamp: creatTimestamp,
        userEquipmentSingleList,
      });
      setLatestCoins(() => _latestCoins);
      setCoins((prevCoins: any) => [
        ...prevCoins,
        createNewCoin(_latestCoins, coinsPerSecond),
      ]);
    };

    coinTimer.current = setInterval(createInterval, coins_duration * 1000);

    const visibilityEvent = () => {
      const isHidden = document.hidden || document.visibilityState === 'hidden';
      clearInterval(coinTimer.current);
      if (!isHidden) {
        coinTimer.current = setInterval(createInterval, coins_duration * 1000);
      }
    };
    document.addEventListener('visibilitychange', visibilityEvent);

    return () => {
      clearInterval(coinTimer.current);
      document.removeEventListener('visibilitychange', visibilityEvent);
    };
  }, [userInfo, userEquipmentListLoading, userInfoLoading, levelsLoading, userEquipmentSingleList]);

  return {
    coins,
    progress,
    handleCollected,
    handleProgressComplete,
    latestCoins,
    currentCoins,
  };
}
