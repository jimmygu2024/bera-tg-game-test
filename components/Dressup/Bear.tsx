import React from 'react';
import IconSit from '@public/svg/dressup/bears/sit.svg';
import IconStand from '@public/svg/dressup/bears/stand.svg';
import IconHead from '@public/svg/dressup/bears/head.svg';
import { BearProps, BEAR_FACES, DEFAULT_COLORS } from './config';



const Bear: React.FC<BearProps> = ({ 
  colors = DEFAULT_COLORS, 
  level = 0,
  face = 1,
}) => {

  const safeface = face in BEAR_FACES ? face : 1;
  const FaceComponent = BEAR_FACES[safeface as keyof typeof BEAR_FACES];


  const bearColors = {
    primary: colors.primary || DEFAULT_COLORS.primary,
    secondary: colors.secondary || DEFAULT_COLORS.secondary,
    tertiary: colors.tertiary || DEFAULT_COLORS.tertiary,
  };

  return (
    <g id="bear" transform="translate(50, 0)" fill="none">
      <svg 
        width="180" 
        height="283" 
        viewBox="0 0 180 283" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {level <= 1 ? (
          <IconStand 
            style={{ 
              color: bearColors.primary,
            }}
          />
        ) : (
          <g transform="translate(0,138)">
            <IconSit 
              style={{ 
                color: bearColors.primary,
              }}
            />
          </g>
        )}

        <IconHead 
          style={{ 
            color: bearColors.primary,
            '--ear-color': bearColors.tertiary,
          } as React.CSSProperties}
        />

        <g transform="translate(36,55)">
          <FaceComponent 
            style={{ 
              color: bearColors.secondary,
            }}
          />
        </g>
      </svg>
    </g>
  );
};

export default Bear;
