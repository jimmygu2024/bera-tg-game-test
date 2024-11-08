'use client';

import LazyImage from '@/components/img';

const Frens = (props: any) => {
  const {} = props;

  return (
    <div className="px-[0.75rem] pt-[3.625rem]">
      <div className="relative p-[1.6875rem_0.625rem_0.625rem] bg-[rgba(247,249,234,0.80)] border border-[#4B371F] backdrop-blur-[0.625rem] rounded-[1rem]">
        <div className="flex justify-center items-end absolute left-0 top-[-2rem]">
          <LazyImage src="/images/bears/brown.svg" width="4.4375rem" height="2.375rem" />
          <LazyImage src="/images/bears/white.svg" width="4.4375rem" height="2.375rem" />
          <LazyImage src="/images/bears/panda.svg" width="4.4375rem" height="2.375rem" />
          <LazyImage src="/images/bears/orange.svg" width="4.4375rem" height="2.375rem" />
          <LazyImage src="/images/bears/gray.svg" width="4.4375rem" height="2.375rem" />
        </div>
        <div className="px-[1.875rem] flex justify-between items-center gap-[1rem]">
          <div className="flex flex-col items-center gap-[0.4375rem]">
            <div className="text-[#4B371F] text-[1.625rem] font-[700]">
              18
            </div>
            <div className="text-[#4B371F] text-[1rem] font-[600]">
              Frens invited
            </div>
          </div>
          <div className="flex flex-col items-center gap-[0.4375rem]">
            <div className="text-[#4B371F] text-[1.625rem] font-[700] flex gap-[4px] items-center">
              <LazyImage src="/images/icon-bera-coin.svg" width="1.25rem" height="1.25rem" />
              <span>1800</span>
            </div>
            <div className="text-[#4B371F] text-[1rem] font-[600]">
              BP earned
            </div>
          </div>
        </div>
        <div className="pt-[1.375rem] pb-[1rem] px-[0.375rem]">
          <div className="w-full h-[1px] bg-[url('/images/dash-line.svg')]"></div>
        </div>
        <div className="flex flex-col px-[1rem] items-stretch gap-[1.25rem] max-h-[calc(100vh_-_24rem)] overflow-y-auto">
          {
            [...new Array(15)].map((_, i: number) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-[0.625rem] text-[#4B371F] text-[1rem] font-[600]">
                  <LazyImage src="/images/icon-bera-coin.svg" width="1.875rem" height="1.875rem" />
                  <div className="max-w-[9.3750rem] whitespace-nowrap overflow-hidden overflow-ellipsis">@Amend {i}</div>
                </div>
                <div className="flex items-center gap-[0.3125rem] text-black text-[0.875rem] font-[600]">
                  <LazyImage src="/images/icon-bera-coin.svg" width="1.25rem" height="1.25rem" />
                  <span>+100</span>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex justify-between items-center gap-[0.5625rem]">
          <button
            type="button"
            className="flex-1 whitespace-nowrap text-[#4B371F] text-[1.25rem] font-[700] h-[3.75rem] rounded-[3.75rem] border-[2px] border-[#4B371F] bg-[#FFF5A9] flex justify-center items-center gap-[0.4375rem]"
          >
            <span>Invite a fren</span>
            <LazyImage src="/images/icon-bera-coin.svg" width="1.25rem" height="1.25rem" />
            <span>+100</span>
          </button>
          <button
            type="button"
            className="shrink-0 w-[4.0625rem] h-[3.75rem] rounded-[3.75rem] border-[2px] border-[#4B371F] bg-[#FFF5A9] flex justify-center items-center gap-[0.4375rem]"
          >
            <LazyImage src="/images/icon-copy.svg" width="1.125rem" height="1.125rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frens;
