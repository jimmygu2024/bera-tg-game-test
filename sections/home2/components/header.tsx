import User from '@/sections/home2/components/user';
import ImportEquipments from '@/sections/home2/components/import-equipments';

const Header = () => {

  return (
    <div className="px-[8px] pt-[8px] flex items-center justify-between shrink-0">
      <User />
      <ImportEquipments />
    </div>
  );
};

export default Header;
