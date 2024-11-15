'use client'
// DressUpGame.tsx
import React, { useState } from 'react';
import {
  Box,
  Card
} from '@mui/material';


import IconBearLevel1 from '@public/svg/dressup/bears/1.svg';
import IconHatLevel1 from '@public/svg/dressup/hats/1.svg';
import IconJacketLevel1 from '@public/svg/dressup/jackets/1.svg';
import IconNecklaceLevel1 from '@public/svg/dressup/necklaces/1.svg';
import IconCarLevel1 from '@public/svg/dressup/cars/1.svg';
import Bear from './dressup/Bear';



const DressUpGame = () => {

  const [bearColors, setBearColors] = useState({
    primary: '#0f0',   // 熊的主体颜色
    secondary: '#A0522D', // 熊的次要部分颜色
    accent: '#D2691E'     // 熊的强调部分颜色
  });

  return (
    <Box sx={{ margin: '0 auto', p: 2 }}>
          <Card 
            sx={{ 
              p: 2, 
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 500
            }}
          >
            <svg viewBox="0 0 373 300" style={{ width: '100%', height: '100%', maxWidth: 373 }}>
              <g id="bear" transform="translate(50, 0)" fill="none">
                <Bear colors={bearColors} />
              </g>
              <g id='hat' transform="translate(50, 20)">
                <IconHatLevel1 />
              </g>
              <g id='coat' transform='translate(60, 140)'>
               <IconJacketLevel1 />
              </g>
              <g id='necklace' transform='translate(90, 150)'>
                <IconNecklaceLevel1 />
              </g>
              <g id="cars" transform="translate(0, 160)" fill="none">
                <IconCarLevel1 />
              </g>
            </svg>
          </Card>
    </Box>
  );
};

export default DressUpGame;