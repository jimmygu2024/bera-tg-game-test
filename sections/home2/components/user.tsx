import { useTelegram } from '@/hooks/useTelegram';
import { formatLongText } from '@/utils/utils';

const User = () => {
  const { WebApp } = useTelegram();

  const tgUser = WebApp?.initDataUnsafe?.user as any;

  const userName = `${tgUser?.first_name || 'BeraCiaga'} ${tgUser?.last_name || ''}`;

  return (
    <div className="flex items-center">
      <div className="relative z-10 flex items-center justify-center w-[50px] h-[50px] px-[14px] pb-[5px] bg-[url('/images/beraciaga/avator_box.svg')] bg-no-repeat bg-center">
        <div
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${tgUser?.photo_url ? tgUser?.photo_url : '/images/beraciaga/avator.svg'}")` }}
        />
      </div>
      <div className="relative -left-[10px] max-w-[10rem] whitespace-nowrap bg-[rgba(38,_38,_38,_0.30)] border-2 border-[rgba(51,_50,_48,_0.38)] rounded-[12px] py-[8px] pr-[12px] pl-[18px] text-[#F7F9EA] font-montserrat text-[12px] font-semibold leading-[100%]">
        @{formatLongText(userName, 8, 6)}
      </div>
    </div>
  );
};

export default User;
