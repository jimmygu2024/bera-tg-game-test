import Modal from "@/components/modal";
import { memo, useContext } from 'react';
import InviteLink from '@/sections/home2/components/invite-link';
import InviteShare from '@/sections/home2/components/invite-share';
import { numberFormatter } from '@/utils/number-formatter';
import { useUserStore } from '@/stores/useUserStore';

export default memo(function Congrats(props: any) {
  const { visible, onClose } = props;

  const { userInfo } = useUserStore();

  return (
    <Modal
      open={visible}
      onClose={onClose}
    >
      <div className="flex flex-col gap-[6px] items-center w-[332px]">

        <div className="flex flex-col items-center w-full h-[360px] rounded-[20px] bg-[#FF79A4] bg-[url('/images/beraciaga/congrats_bg.svg')] bg-center bg-no-repeat border border-black">
          <div className="mt-[26px] text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[32px] leading-[100%]">Congrats!</div>
          <div className="mt-[16px] mb-[14px] text-black font-montserrat text-[16px] font-medium leading-[150%]">
            You&#39;ve got a gift from OKX wallet!
          </div>
          <div className="flex items-center justify-center w-[292px] h-[50px] rounded-[53px] border border-white bg-[rgba(255, 255, 255, 0.30)] backdrop-blur-[10px]">
            <span className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[20px] leading-[100%]"></span>
            <div className="w-[32px] mx-[10px]">
              <img src="/images/beraciaga/coin.svg" alt="coin" />
            </div>
            <span className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[20px] leading-[100%] text-center">
              +{numberFormatter(userInfo?.bind_okx_reward_coins, 0, true)}
            </span>
          </div>
          <div className="mt-[18px] flex items-center justify-center w-[292px] h-[50px] rounded-[53px] border border-white bg-[rgba(255, 255, 255, 0.30)] backdrop-blur-[10px]">
            <span className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[20px] leading-[100%]">Coupon</span>
            <div className="w-[36px] mx-[10px]">
              <img src="/images/beraciaga/ticket.svg" alt="ticket" />
            </div>
            <span className="text-[#F7F9EA] text-stroke-1 font-cherryBomb text-[20px] leading-[100%] text-center">
              {numberFormatter(userInfo?.bind_okx_reward_coupons, 2, true, { prefix: '$', round: 0 })}
            </span>
          </div>
          <div className="mt-[8px] mb-[20px] text-black font-montserrat text-[16px] font-medium leading-[150%]">* Can be used when Shop goes live</div>
          <button
            type="button"
            className="flex items-center justify-center w-[292px] h-[52px] rounded-[16px] border border-black bg-[#FFD335] text-black font-montserrat text-[16px] font-bold"
            onClick={onClose}
          >
            Beraciaga Now
          </button>
        </div>

        <div className="flex flex-col gap-[12px] pt-[9px] items-center w-full h-[102px] rounded-[20px] bg-[#7ABBF7] border border-black/20">
          <div className="text-black font-montserrat text-[16px] font-medium leading-[150%]">Invite friends to get more prize!</div>
          <div className="flex items-center gap-[8px]">
            <InviteLink />
            <InviteShare />
          </div>
        </div>
      </div>
    </Modal>
  )
})
