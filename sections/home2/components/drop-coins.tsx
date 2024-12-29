import Coin from '@/sections/home/components/Coin';
import { useContext } from 'react';
import { HomeContext } from '@/sections/home2';
import Big from 'big.js';
import { numberFormatter } from '@/utils/number-formatter';

const DropCoins = () => {
  const {
    coins,
    handleCollected,
    latestCoins,
    currentCoins,
  } = useContext(HomeContext);

  const amount = numberFormatter(Big(latestCoins).minus(currentCoins).abs(), 3, true, { round: Big.roundDown });

  return (
    <div className="w-full h-full absolute left-0 top-0 z-[0]">
      {coins.map((coin: any) => (
        <Coin
          amount={amount}
          key={coin.id}
          id={coin.id}
          initialX={coin.x}
          onCollected={handleCollected}
        />
      ))}
    </div>
  );
};

export default DropCoins;
