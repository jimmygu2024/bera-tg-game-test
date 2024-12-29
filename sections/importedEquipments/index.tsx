import { useTelegram } from "@/hooks/useTelegram";
import IconFlash from "@/public/svg/flash.svg";
import useBindStore from '@/stores/useBindStore';
import { formatLongText } from "@/utils/utils";
import { useState, useEffect } from "react";
import { groupBy, map, filter, maxBy } from 'lodash-es';
import { get } from "@/utils/http";
import { useRouter } from "next/navigation";
import { useLayoutStore } from "@/stores/useLayoutStore";

const ImportedEquipmentsView = () => {

    const router = useRouter();

    const [items, setItems] = useState<any[]>([]);
    const { bindAddress } = useBindStore();

    const { WebApp } = useTelegram();

    const { setCongratsModalVisible }= useLayoutStore()
    
    const tgUser = WebApp?.initDataUnsafe?.user as any;

    const fetchGameData = async () => {
        try {
            const response = await get(`/api/game/items?tg_user_id=${tgUser?.id}`);
            
            const groupedItems = groupBy(response.data, 'category');
            
            const processedItems = map(groupedItems, (items) => {
                const pcItems = filter(items, { pc_item: true });
                return pcItems.length > 0 ? maxBy(pcItems, 'level') : null;
            }).filter(Boolean);

            setItems(processedItems);
        } catch (error) {
            console.error('Failed to fetch game data:', error);
        }
    };

    useEffect(() => {
        if (tgUser?.id) {
            fetchGameData();
        }
    }, [tgUser]);



    console.log(items, '---items---')

    return (
        <div className="bg-black min-h-screen w-full flex flex-col items-center">
            <div className="absolute top-0 w-full h-[376px]">
                <div className="bg-[url(/images/imported-bg.png)] bg-contain bg-no-repeat w-full h-full" />
            </div>
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-black/0 to-black" />
            <div className="relative w-full h-[376px] flex flex-col items-center">
                <div className="flex-shrink-0 w-48 h-12 flex items-center justify-center gap-2.5 mt-6 rounded-full p-2 backdrop-blur 
                                bg-gradient-to-b from-white/20 to-transparent border border-white/20">
                    <img src={tgUser?.photo_url ? tgUser?.photo_url : '/images/beraciaga/avator.svg'} className="w-8 h-8" alt="" />
                    <div className="font-montserrat text-[20px] font-bold text-white">{formatLongText(bindAddress, 4, 4)}</div>
                </div>
                <div className="flex-shrink-0 mt-4 font-montserrat italic text-[#6376FF] text-[36px] bg-[url(/images/bg-im.png)] bg-contain bg-no-repeat w-[82px] h-[82px] rounded-full flex items-center justify-center">
                    3X
                </div>

                <div className="flex-shrink-0 mt-6 mb-5 font-montserrat w-full text-center leading-5 px-5 font-[500] text-white">
                    You've imported your equipments
                    (The highest level in the each category) 
                    from BeraCave.
                </div>
                <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full px-5 text-white">
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Basic Helmet</div>
                            <div className="flex-1 w-full flex items-center justify-center p-2 h-[90px]">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img 
                                    src="/images/cave/hats/hats-2-active.png"
                                    className="max-w-full max-h-full w-auto h-auto object-contain"
                                    />
                                </div>
                            </div>
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl  flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Baseball Jacket</div>
                            <div className="flex-1 w-full flex items-center justify-center p-2 h-[90px]">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img 
                                    src="/images/cave/hats/hats-2-active.png"
                                    className="max-w-full max-h-full w-auto h-auto object-contain"
                                    />
                                </div>
                            </div>
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl  flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Alloy Necklace</div>
                            <div className="flex-1 w-full flex items-center justify-center p-2 h-[90px]">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img 
                                    src="/images/cave/hats/hats-2-active.png"
                                    className="max-w-full max-h-full w-auto h-auto object-contain"
                                    />
                                </div>
                            </div>
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl p-[1px] backdrop-blur-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
                        <div className="relative h-[170px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl  flex flex-col items-center">
                            <div className="font-cherryBomb leading-[20px] mt-[12px] text-stroke-1">Vancle</div>
                            <div className="flex-1 w-full flex items-center justify-center p-2 h-[90px]">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img 
                                    src="/images/cave/hats/hats-2-active.png"
                                    className="max-w-full max-h-full w-auto h-auto object-contain"
                                    />
                                </div>
                            </div>
                            <div className="px-[6px] py-[5px] border-[3px] border-[#709D27] bg-[#C7FF6E] rounded-3xl flex items-center gap-[2px]"><IconFlash /><span className="font-montserrat font-[700] text-[12px] text-center leading-[12px] text-black  ">+300%</span></div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 mt-6">
                    <button className="w-full flex-shrink-0 bg-[#FFD335] rounded-2xl h-[52px] leading-[52px] text-black text-center font-montserrat font-[700]" onClick={() => {
                        setCongratsModalVisible(true);
                        router.push('/');
                    }}>Beraciaga Now</button>
                </div>
            </div>
        </div>
    )
}

export default ImportedEquipmentsView
