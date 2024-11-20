import { useGameState } from "./useGameState";
import Bear from "@/sections/home/components/DressUpGame/Bear";
import Hat from "@/sections/home/components/DressUpGame/Hat";
import Jacket from "@/sections/home/components/DressUpGame/Jacket";

import Transportation from "@/sections/home/components/DressUpGame/Transportation";


const DressUpGame: React.FC = () => {
  const { userItems, bearState, randomizeBearAppearance } = useGameState();

  const currentVehicle = userItems.find(
    (item) => item.category === "cars" && item.isBuyStatus
  );
  const level = currentVehicle?.level || 0;

  return (
    <div className="relative">
      <svg
        viewBox="0 0 360 340"
        style={{ width: "22.5rem", height: "21.25rem" }}
      >
        <Bear
          colors={bearState.colors}
          level={level}
          face={bearState.currentFace}
        />

        <Hat level={level} />

        <Jacket userItems={userItems} />

        {level > 0 && <Transportation level={level} />}
      </svg>
      <button
          onClick={randomizeBearAppearance}
          className="mt-4 px-4 py-2 bg-[#E49F63] text-white rounded fixed top-[-10dvh] right-0"
          >
          Random Bear
          </button>
    </div>
  );
};

export default DressUpGame;
