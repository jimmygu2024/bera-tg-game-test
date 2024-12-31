import User from '@/sections/home2/components/user';
import ImportEquipments from '@/sections/home2/components/import-equipments';
import { useContext } from 'react';
import { HomeContext } from '@/sections/home2';

const Header = () => {
  const { userInfo } = useContext(HomeContext);

  return (
    <div className="px-[8px] pt-[8px] flex items-center justify-between shrink-0">
      <User />
      {
        !userInfo?.address && (
          <ImportEquipments />
        )
      }
    </div>
  );
};

export default Header;
