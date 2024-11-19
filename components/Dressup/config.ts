import IconCarLevel1 from "@public/svg/dressup/cars/1.svg";
import IconCarLevel2 from "@public/svg/dressup/cars/2.svg";
import IconCarLevel3 from "@public/svg/dressup/cars/3.svg";
import IconCarLevel4 from "@public/svg/dressup/cars/4.svg";
import IconCarLevel5 from "@public/svg/dressup/cars/5.svg";


import BearFace1 from '@public/svg/dressup/bears/face/1.svg';
import BearFace2 from '@public/svg/dressup/bears/face/2.svg';
import BearFace3 from '@public/svg/dressup/bears/face/3.svg';
import BearFace4 from '@public/svg/dressup/bears/face/4.svg';
import BearFace5 from '@public/svg/dressup/bears/face/5.svg';
import BearFace6 from '@public/svg/dressup/bears/face/6.svg';
import BearFace7 from '@public/svg/dressup/bears/face/7.svg';
import BearFace8 from '@public/svg/dressup/bears/face/8.svg';
import BearFace9 from '@public/svg/dressup/bears/face/9.svg';
import BearFace10 from '@public/svg/dressup/bears/face/10.svg';
import BearFace11 from '@public/svg/dressup/bears/face/11.svg';
import BearFace12 from '@public/svg/dressup/bears/face/12.svg';
import BearFace13 from '@public/svg/dressup/bears/face/13.svg';
import BearFace14 from '@public/svg/dressup/bears/face/14.svg';
import BearFace15 from '@public/svg/dressup/bears/face/15.svg';
import BearFace16 from '@public/svg/dressup/bears/face/16.svg';



export const TRANSPORTATION_MAPPING = {
  1: IconCarLevel1, // Skateboard
  2: IconCarLevel2, // Bicycle
  3: IconCarLevel3, // E-Bike
  4: IconCarLevel4, // Motorcycle
  5: IconCarLevel5, // Car
} as const;

export const BEAR_FACES = {
    1: BearFace1,
    2: BearFace2,
    3: BearFace3,
    4: BearFace4,
    5: BearFace5,
    6: BearFace6,
    7: BearFace7,
    8: BearFace8,
    9: BearFace9,
    10: BearFace10,
    11: BearFace11,
    12: BearFace12,
    13: BearFace13,
    14: BearFace14,
    15: BearFace15,
    16: BearFace16
  } as const;


  export interface BearColors {
    primary?: string;  // 身体
    secondary?: string;  // 脸部
    tertiary?: string;  // 耳朵
  }
  
  export interface BearProps {
    colors: BearColors;
    level: number;
    face?: number;
    className?: string;
  }
  
  export const DEFAULT_COLORS = {
    primary: '#E49F63',
    secondary: '#FED2AB',
    tertiary: '#E49F63',
  } as const;