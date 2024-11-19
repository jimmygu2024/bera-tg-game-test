import {TRANSPORTATION_MAPPING} from './config';

interface TransportationProps {
  level: number;
  className?: string;
}

const Transportation: React.FC<TransportationProps> = ({ level, className }) => {
  
  const VehicleComponent = TRANSPORTATION_MAPPING[level as keyof typeof TRANSPORTATION_MAPPING];
  
  if (!VehicleComponent) return null;

  const getTransformPosition = (level: number) => {
    const positions = {
      1: 'translate(30, 250)',
      2: 'translate(60, 180)',
      3: 'translate(40, 170)',
      4: 'translate(22, 164)',
      5: 'translate(6, 140)', 
    };
    return positions[level as keyof typeof positions] || '';
  };

  return (
    <g id="transportation" transform={getTransformPosition(level)} fill="none" className={className}>
      <VehicleComponent />
    </g>
  );
};

export default Transportation;