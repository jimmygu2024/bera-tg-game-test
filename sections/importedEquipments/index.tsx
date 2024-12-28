import IconFlash from "@/public/svg/flash.svg";
const ImportedEquipmentsView = () => {
    return (
        <div className="bg-black min-h-screen w-full flex flex-col items-center">
            <div className="absolute top-0 w-full h-[376px]">
                <div className="bg-[url(/images/imported-bg.png)] bg-contain bg-no-repeat w-full h-full" />
            </div>
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-black/0 to-black" />
            <div className="relative w-full h-[376px] flex flex-col items-center">
                <div className="flex-shrink-0 w-48 h-12 flex items-center justify-center gap-2.5 mt-6 rounded-full p-2 backdrop-blur 
                                bg-gradient-to-b from-white/20 to-transparent border border-white/20">
                    <img src="/images/coin.png" className="w-8 h-8" alt="" />
                    <div className="font-montserrat text-[20px] font-bold">0x97...deFd</div>
                </div>
                <div className="flex-shrink-0 mt-4 font-montserrat italic text-[#6376FF] text-[36px] bg-[url(/images/bg-im.png)] bg-contain bg-no-repeat w-[82px] h-[82px] rounded-full flex items-center justify-center">
                    3X
                </div>

                <div className="flex-shrink-0 mt-6 mb-5 font-montserrat w-full text-center leading-5 px-5 font-[500]">
                    You've imported your equipments
                    (The highest level in the each category) 
                    from BeraCave.
                </div>
                <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full px-5">
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Basic Helmet</div>
                            <img src="/images/cave/hats/hats-2-active.png" className="object-contain aspect-square w-[67px] h-67px" alt="" />
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl  flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Baseball Jacket</div>
                            <img src="/images/cave/hats/hats-2-active.png" className="object-contain aspect-square w-[67px] h-67px" alt="" />
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl  flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Alloy Necklace</div>
                            <img src="/images/cave/hats/hats-2-active.png" className="object-contain aspect-square w-[67px] h-67px" alt="" />
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl  flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Vancle</div>
                            <img src="/images/cave/hats/hats-2-active.png" className="object-contain aspect-square w-[67px] h-67px" alt="" />
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 mt-5">
                    <button className="w-full flex-shrink-0 bg-[#FFD335] rounded-2xl h-[52px] leading-[52px] text-black text-center font-montserrat font-[700]">Beraciaga Now</button>
                </div>
            </div>
        </div>
    )
}

export default ImportedEquipmentsView


// 
/***
 * 
 *将下面的css => tailwindcss 代码
color: #6376FF;
text-align: center;

font-family: Montserrat;
font-size: 36px;
font-style: italic;
===> text-   
 * 
 */