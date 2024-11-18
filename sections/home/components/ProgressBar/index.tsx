import { useEffect } from 'react';

interface ProgressBarProps {
  progress: number;
  onComplete?: () => void;
}

const ProgressBar = ({ progress, onComplete }: ProgressBarProps) => {
  useEffect(() => {
    if (progress >= 100 && onComplete) {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div 
      className="relative w-[287px] h-[32px] rounded-[30px] bg-[#FFF5A9] border-2 border-[#4B371F] overflow-hidden"
    >
      <div 
        className="h-full rounded-[30px] bg-[#C7FF6E] border-r-2 border-[#4B371F] transition-all duration-300 ease-out"
        style={{ 
          width: `${Math.min(progress, 100)}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;