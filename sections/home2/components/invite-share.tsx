import { useInvite } from '@/sections/home2/hooks/use-invite';

const InviteShare = (props: any) => {
  const {} = props;

  const { handleShare } = useInvite();

  return (
    <button
      type="button"
      className="w-[142px] h-[42px] rounded-[10px] border border-[#000] bg-[#FFD335] flex items-center justify-center gap-[6px]"
      onClick={handleShare}
    >
      <div className="w-[15px]">
        <img src="/images/beraciaga/invite.svg" alt="invite" />
      </div>
      <span className="text-black font-montserrat text-[16px] font-semibold">Invite</span>
    </button>
  );
};

export default InviteShare;
