import Coin from '@/sections/home/components/Coin';
import { useCoins } from '@/sections/home2/hooks/use-coins';

const DropCoins = () => {
  const { coins, handleCollected } = useCoins();

  return (
    <div className="w-full h-full absolute left-0 top-0 z-[0]">
      {coins.map((coin) => (
        <Coin
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
