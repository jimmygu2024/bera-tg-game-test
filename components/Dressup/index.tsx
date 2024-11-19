"use client";
import React, { useState } from "react";

import IconHatLevel1 from "@public/svg/dressup/hats/1.svg";
import IconJacketLevel1Standing from "@public/svg/dressup/jackets/1-standing.svg";
import IconJacketLevel1Squatting from "@public/svg/dressup/jackets/1-squatting.svg";
import IconNecklaceLevel1 from "@public/svg/dressup/necklaces/1.svg";


import Bear from "./Bear";
import Transportation from "./Transportation";

const DressUpGame = () => {
  const [bearColors, setBearColors] = useState({});
  return (
    <>
      <svg
        viewBox="0 0 373 300"
        style={{ width: "23.312rem", height: "19.75rem" }}
      >
        <Bear colors={bearColors} level={1}/>
        <g id="hat" transform="translate(48, 15)">
          <IconHatLevel1 />
        </g>
        <g id="coat" transform="translate(85, 140)">
            <IconJacketLevel1Squatting />
        </g>
        <g id='necklace' transform='translate(90, 140)'>
          <IconNecklaceLevel1 />
        </g>
        {/* <Transportation level={2}/> */}
      </svg>
    </>
  );
};

export default DressUpGame;

// <g id="coat" transform="translate(85, 140)" z={2}> 和 <g id="cars" transform="translate(0, 10)" fill="none" z={1}> 可以这样指定svg 层级吗？