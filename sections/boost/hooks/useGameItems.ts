import { useEffect, useState } from 'react';
import { get } from '@/utils/http';
import { ModuleConfig, ModuleType } from '../components/Module';
import { ModuleConfigs } from '../config';

interface GameItem {
  id: number;
  category: string;
  bonus_percentage: string;
  level: number;
  pc_item: boolean;
  mobile_item: boolean;
}

const categoryToModuleType: Record<string, ModuleType> = {
  cars: 'cars',
  hats: 'hats',
  jackets: 'jackets',
  necklaces: 'necklaces',
};

const generateImageUrls = (category: string, level: number, isActive: boolean) => {
  const basePath = `/images/cave/${category}/${category}-${level}`;
  
  return {
    icon: `${basePath}${isActive ? '-active' : ''}.png`,
    popoverIcon: `${basePath}-m.png`,
  };

};


export const useGameItems = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [moduleConfigs, setModuleConfigs] = useState<Record<ModuleType, ModuleConfig>>(ModuleConfigs);

  useEffect(() => {
    if (!id) return;
    const fetchGameItems = async () => {
      try {
        setLoading(true);
        const response = await get(`/api/game/items?tg_user_id=${id}`);
        if (response.code !== 200 ) return

        const groupedByCategory = response.data.reduce((acc: Record<string, GameItem[]>, item: GameItem) => {
          if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
        }, {});

        const newConfigs: Record<ModuleType, ModuleConfig> = { ...ModuleConfigs };

        Object.entries(groupedByCategory).forEach(([category, items]: any) => {
          const moduleType = categoryToModuleType[category] as ModuleType;
          
          newConfigs[moduleType] = {
            ...ModuleConfigs[moduleType],
            items: items.map((item: any, index: any) => {
              // todo
              const { icon, popoverIcon } = generateImageUrls(
                item.category,
                item.level || 1,
                item.tg_item
              );
              
              return {
                ...ModuleConfigs[moduleType].items[index],
                // icon,
                // popoverIcon,
                data: {
                  ...item,
                }
              };
            }),
          };
        });
        console.log(newConfigs, 'newConfigs')
        setModuleConfigs(newConfigs);
        setError(null);
      } catch (err) {
        setError(new Error('Failed to fetch game items'));
      } finally {
        setLoading(false);
      }
    };

    fetchGameItems();
  }, [id]);

  return {
    moduleConfigs,
    loading,
    error,
  };
};