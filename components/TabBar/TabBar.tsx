'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useCallback, useEffect } from 'react';


export type TabItem = {
    id: string;
    label: string;
    path: string;
  };
  
  export type LayoutConfig = {
    showTabBar: boolean;
  };

const TabItem: React.FC<{
  id: string
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ id, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 py-2 space-y-1
      ${isActive ? 'text-[#4B371F]' : 'text-[#9E8D79]'}`}
  >
    <img src={`/images/tabbar/${isActive ? id + '-active' : id}.png`} alt="" className='w-10 h-9' />
    <span className="font-montserrat text-xs font-semibold text-center leading-13">{label}</span>
  </button>
);

export const tabs: TabItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'earn', label: 'Earn', path: '/earn' },
  { id: 'frens',label: 'Frens', path: '/frens' }
];

const TabBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { activeTab, setActiveTab } = useLayoutStore();

  useEffect(() => {
    const tab = tabs.find(tab => tab.path === pathname);
    if (tab) {
      setActiveTab(tab.id);
    }
  }, [pathname, setActiveTab]);

  const handleTabClick = useCallback((tab: TabItem) => {
    setActiveTab(tab.id);
    router.push(tab.path);
  }, [router, setActiveTab]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary rounded-t-xl">
      <div className="flex items-center justify-around max-w-md mx-auto h-20">
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabBar;