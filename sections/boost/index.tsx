import ResourceItem from "@/components/ResourceItem/ResourceItem";

const BoostIndex = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full bg-[#96D6FF] h-[6.5rem]">
        <ResourceItem title="Boost" level={2} coins={13400} total={23450} />
      </div>
    </div>
  );
};

export default BoostIndex;
