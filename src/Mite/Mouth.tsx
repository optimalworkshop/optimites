import React, { ReactElement } from 'react';
import { MouthShape } from '../types';

export const MouthShapes: { [key in MouthShape]: ReactElement } = {
  [MouthShape.Side]: (
    <path
      className="mouth__outline outline"
      d="M-340,145c177,216 504,173 582,88c-0,0 27,283 -279,215"
    />
  ),
  [MouthShape.Sparky]: (
    <path
      className="mouth__outline outline"
      d="M-15,197c146,-3 156,-31 169,-2c13,28 39,113 -50,119c-90,6 -113,-53 -113,-53"
    />
  ),
  [MouthShape.Smile]: (
    <path className="mouth__outline outline" d="M-435,127c72,170 293,308 754,126" />
  ),
  [MouthShape.Slight]: (
    <path className="mouth__outline outline" d="M-277,191c-0,-0 363,280 634,51" />
  ),
  [MouthShape.Gasp]: (
    <path
      className="mouth__outline outline"
      d="M-245,226c228,51 493,-3 493,-3c0,-0 -5,214 -220,185"
    />
  ),
  [MouthShape.Prim]: <path className="mouth__outline outline" d="M15,252c96,20 159,-5 181,-56" />,
  [MouthShape.Smirk]: (
    <path className="mouth__outline outline" d="M215,347c-92,27 -336,31 -354,-116" />
  ),
  [MouthShape.Wide]: (
    <path className="mouth__outline outline" d="M290,172c-135,129 -487,146 -583,39" />
  ),
  [MouthShape.Open]: (
    <path
      className="mouth__outline outline"
      d="M-96,221c76,5 206,-3 306,-36c63,-20 27,113 -113,129c-140,15 -142,-87 -142,-87"
    />
  ),
  [MouthShape.Widest]: (
    <path
      className="mouth__outline outline"
      d="M-420,164c0,-0 150,104 523,66c308,-31 336,-151 336,-151"
    />
  ),
  [MouthShape.Chatty]: (
    <path
      className="mouth__outline outline"
      d="M127,241c-175,8 -268,-39 -359,-84c-25,60 3,184 217,205"
    />
  ),
};

const Mouth: React.FC<{ shape: MouthShape }> = ({ shape }) => {
  return <g className="mouth">{MouthShapes[shape]}</g>;
};

export default Mouth;
