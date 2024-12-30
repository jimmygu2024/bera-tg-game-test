import Modal from "@/components/modal";
import { memo } from 'react';
import Close from '@public/images/beraciaga/icon-close.svg';
import { useTelegram } from '@/hooks/useTelegram';

export default memo(function EquipmentsModal(props: any) {
  const { visible, onClose } = props;

  return (
    <Modal
      open={visible}
      onClose={onClose}
      closeIcon={<Close />}
    >
      <Content {...props} />
    </Modal>
  );
});

function Content(props: any) {
  const { WebApp } = useTelegram();

  const handleClick = () => {
    WebApp?.openLink('https://beratown.dapdap.net/cave');
  };

  return (
    <div className="relative flex flex-col items-center w-[20.75rem] px-[0.5625rem] pt-[4.1875rem] pb-[1.3125rem] rounded-[1.25rem] bg-[#C7FF6E] border border-[rgba(255,_255,_255,_0.20)]">
      <img src="/images/beraciaga/equipments.svg" alt="" className="absolute left-1/2 -translate-x-1/2 w-[5.3125rem] h-[4.375rem] top-[-1rem]" />
      <div className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[2rem] font-[400] leading-[100%] text-center">
        Import Items
      </div>
      <div className="text-[1rem] text-black font-[500] leading-[150%] mt-[0.875rem] text-center">
        Collect items from the Beracave to boost your mining speed by an ooga-booga-worthy amount!
      </div>
      <img src="/images/beraciaga/bera-cave.svg" alt="" className="mt-[0.6875rem] w-[7.8125rem] h-[6rem]" />
      <div className="text-[1rem] font-[500] leading-[150%] text-black mt-[0.75rem] text-center">
        Bind your BeraTown account now!
      </div>
      <button
        type="button"
        className="mt-[1.1875rem] h-[3.25rem] border border-[#000] rounded-[1rem] text-[1rem] font-[700] text-black text-center px-[4.6875rem] bg-[#FFD335]"
        onClick={handleClick}
      >
        Bind and Import
      </button>
    </div>
  );
}
