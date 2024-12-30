import Modal from "@/components/modal";
import { memo, useEffect } from 'react';
import { useInvite } from '@/sections/home2/hooks/use-invite';
import InviteLink from '@/sections/home2/components/invite-link';
import InviteShare from '@/sections/home2/components/invite-share';

export default memo(function Invite(props: any) {
  const { visible, onClose } = props;

  return (
    <Modal
      open={visible}
      onClose={onClose}
    >
      <Content {...props} />
    </Modal>
  );
});

function Content(props: any) {
  const { total, getTotal } = useInvite();

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div className="flex flex-col items-center w-[332px]">
      <div className="flex flex-col items-center w-full h-[292px] rounded-[20px] bg-[#7ABBF7] border border-black/20">
        <div className="-mt-[15px] mb-[7px] w-[78px]">
          <img src="/images/beraciaga/foot.svg" alt="foot" />
        </div>
        <div className="mb-[8px] text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[32px] leading-[100%]">Invite Frens</div>
        <div className="text-black font-montserrat text-[16px] font-medium leading-[150%]">
          Invite more beras won&#39;t hurt, do it now!
        </div>
        <div className="mt-[18px] mb-[24px] flex items-center justify-center w-[292px] h-[50px] rounded-[53px] border border-white bg-[rgba(255, 255, 255, 0.30)] backdrop-blur-[10px]">
          <span className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[20px] leading-[100%]">{total} Invited</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <InviteLink />
          <InviteShare />
        </div>
      </div>
    </div>
  );
}
