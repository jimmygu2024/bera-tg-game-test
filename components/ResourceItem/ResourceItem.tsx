import React from 'react';

interface ResourceItemProps {
  title: string;
  level: number;
  coins: number;
  total: number;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ title, level, coins, total }) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      {/* Title */}
      <div className="text-xl font-cherryBomb text-[#F7F9EA]">
        {title}
      </div>

      {/* Level */}
      <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
        <span className="text-sm font-medium">Lv.{level}</span>
      </div>

      {/* Coins */}
      <div className="flex items-center gap-2">
        <img src="/images/coin.svg" alt="coin" className="w-6 h-6" />
        <span className="font-medium">{formatNumber(coins)}</span>
      </div>

      {/* Total */}
      <div className="flex items-center gap-2">
        <img src="/images/coin.svg" alt="total" className="w-6 h-6" />
        <span className="font-medium">{formatNumber(total)}</span>
      </div>
    </div>
  );
};

// Example usage component
// const GameResources = () => {
//   const items = [
//     { title: 'Boost', level: 2, coins: 13400, total: 23450 },
//     { title: 'Frens', level: 2, coins: 13400, total: 23450 }
//   ];

//   return (
//     <div className="space-y-2">
//       {items.map((item, index) => (
//         <ResourceItem
//           key={index}
//           title={item.title}
//           level={item.level}
//           coins={item.coins}
//           total={item.total}
//         />
//       ))}
//     </div>
//   );
// };

export default ResourceItem;