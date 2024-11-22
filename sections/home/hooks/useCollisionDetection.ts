import { useEffect, useState } from "react";
export const useCollisionDetection = (
  coinRef: React.RefObject<HTMLElement>
) => {
  const [isColliding, setIsColliding] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      const coin = coinRef.current;
      const bear = document.querySelector("#bear") as SVGGElement;

      if (!coin || !bear) return;

      const coinBounds = coin.getBoundingClientRect();
      const bearBounds = bear.getBoundingClientRect();

      const collision = !(
        coinBounds.right < bearBounds.left ||
        coinBounds.left > bearBounds.right ||
        coinBounds.bottom < bearBounds.top ||
        coinBounds.top > bearBounds.bottom
      );

      setIsColliding(collision);

      if (collision) {
        console.log("碰撞到熊了!");
      }
    };

    let animationFrameId: number;
    const animate = () => {
      checkCollision();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [coinRef]);

  return isColliding;
};
