'use client';

import { useRouter, usePathname } from 'next/navigation';
import { TabItem, TABS, useLayoutStore } from '@/stores/useLayoutStore';
import { useCallback, useEffect } from 'react';

const TabBar: React.FC<any> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { activeTab, setActiveTab } = useLayoutStore();

  useEffect(() => {
    const tab = TABS.find(tab => tab.path === pathname);
    if (tab) {
      setActiveTab(tab.id);
    }
  }, [pathname, setActiveTab]);

  const handleTabClick = useCallback((tab: TabItem) => {
    if (tab.isLock) return;
    setActiveTab(tab.id);
    router.push(tab.path);
    props?.onTabClick?.(tab);
  }, [router, setActiveTab]);

  return (
    <div className="fixed left-0 bottom-0 w-full bg-[#FFD335] grid grid-cols-5">
      {
        TABS.map((tab) => (
          <div
            key={tab.id}
            className="flex py-[1.4375rem] flex-col items-center justify-center cursor-pointer relative"
            onClick={() => handleTabClick(tab)}
          >
            <div
              className="w-full h-[3rem] bg-contain bg-center bg-no-repeat relative"
              style={{
                backgroundImage: `url("${tab.isLock ? tab.inactiveIcon : tab.icon}")`
              }}
            >
              {
                tab.isLock && (
                  <img className="w-[1.3rem] h-[1.6rem] absolute right-[0.5rem] top-[-0.3rem]" src="/images/tabbar/icon-lock.svg" alt="" />
                )
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TabBar;