import { useGameState } from "./useGameState";
import Bear from "@/components/Dressup/Bear";
import Transportation from "@/components/Dressup/Transportation";

const DressUpGame: React.FC = () => {
  const { userItems, bearState, randomizeBearAppearance } = useGameState();

  const currentVehicle = userItems.find(
    (item) => item.category === "cars" && item.isBuyStatus
  );
  const level = currentVehicle?.level || 0;

  return (
    <div className="relative">
      <svg
        viewBox="0 0 373 300"
        style={{ width: "23.312rem", height: "19.75rem" }}
      >
        <Bear
          colors={bearState.colors}
          level={level}
          face={bearState.currentFace}
        />

        {level > 0 && <Transportation level={level} />}
      </svg>
      <button
          onClick={randomizeBearAppearance}
          className="mt-4 px-4 py-2 bg-[#E49F63] text-white rounded fixed top-[-20dvh] right-0"
          >
          Random Bear
          </button>
    </div>
  );
};

export default DressUpGame;
