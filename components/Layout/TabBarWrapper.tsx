'use client'

import { useEffect, type ReactNode } from 'react';
import { useLayoutStore } from '@/stores/useLayoutStore';
import TabBar from '../TabBar/TabBar';
import Invite from '@/sections/home2/components/invite';
import Congrats from '@/sections/home2/components/congrats';

interface TabBarWrapperProps {
  children: ReactNode;
  showTabBar?: boolean;
}

export const TabBarWrapper = ({ 
  children, 
  showTabBar = true 
}: TabBarWrapperProps) => {
  const {
    activeTab,
    setShowTabBar,
    inviteModalVisible,
    congratsModalVisible,
    setInviteModalVisible,
    setCongratsModalVisible,
  } = useLayoutStore();

  const handleTabClick = (tab: any) => {
    if (tab.id === 4) {
      setInviteModalVisible(true);
    }
    console.log('tab: %o', tab, activeTab);
  };

  useEffect(() => {
    setShowTabBar(showTabBar);
    return () => setShowTabBar(true);
  }, [showTabBar, setShowTabBar]);

  return (
    <div className="h-full overflow-hidden">
      <main
        className={`h-full overflow-y-auto overflow-x-hidden`}
        style={{
          paddingBottom: showTabBar ? '5.375rem' : 0,
        }}
      >
        {children}
      </main>
      {showTabBar && <TabBar onTabClick={handleTabClick} />}
      <Congrats
        visible={congratsModalVisible}
        onClose={() => {
          setCongratsModalVisible(false);
        }}
      />
      <Invite
        visible={inviteModalVisible}
        onClose={() => {
          setInviteModalVisible(false);
        }}
      />
    </div>
  );
};