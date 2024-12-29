import { useInvite } from '@/sections/home2/hooks/use-invite';

const InviteLink = (props: any) => {
  const {} = props;

  const { handleCopy } = useInvite();

  return (
    <button
      type="button"
      className="w-[142px] h-[42px] rounded-[10px] border border-[#FFCF23] bg-black/30 flex items-center justify-center gap-[8px]"
      onClick={handleCopy}
    >
      <div className="w-[15px]">
        <img src="/images/beraciaga/copy.svg" alt="copy" />
      </div>
      <span className="text-[#FFCF23] font-montserrat text-[16px] font-semibold">Copy link</span>
    </button>
  );
};

export default InviteLink;
