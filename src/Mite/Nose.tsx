import React, { ReactElement } from 'react';
import { NoseShape } from '../types';

export const NoseShapes: { [key in NoseShape]: ReactElement } = {
  [NoseShape.Normal]: (
    <path className="nose__outline outline" d="M17,-58c0,-0 68,112 113,167c45,54 -71,53 -71,53" />
  ),
  [NoseShape.Pointy]: (
    <path
      className="nose__outline outline"
      d="M86,-132c21,67 43,134 65,201c2,8 5,17 4,26c-1,15 -15,28 -31,34c-15,6 -32,6 -49,7"
    />
  ),
  [NoseShape.Slope]: (
    <path className="nose__outline outline" d="M0,-60c23,87 104,122 162,146l-74,60" />
  ),
  [NoseShape.Button]: (
    <path className="nose__outline outline" d="M45,32c4,-0 74,45 53,63c-21,17 -106,33 -106,33" />
  ),
  [NoseShape.Upturned]: (
    <path className="nose__outline outline" d="M20,-66c37,80 84,121 149,117c65,-3 -22,87 -22,87" />
  ),
  [NoseShape.Narrow]: (
    <path
      className="nose__outline outline"
      d="M8,-124c14,54 29,108 43,162c1,6 3,13 2,20c-1,12 -12,21 -24,26c-11,4 -24,3 -37,3"
    />
  ),
  [NoseShape.Aquiline]: (
    <path className="nose__outline outline" d="M16,-103c-3,89 137,188 84,197c-53,9 -71,14 -71,14" />
  ),
  [NoseShape.Bulbous]: (
    <path className="nose__outline outline" d="M39,-56c-0,-0 107,156 75,187c-31,31 -78,23 -78,23" />
  ),
  [NoseShape.Long]: (
    <path className="nose__outline outline" d="M25,-130c-0,98 78,276 59,276c-18,-0 -48,1 -48,1" />
  ),
};

const Nose: React.FC<{ shape: NoseShape }> = ({ shape }) => {
  return <g className="nose">{NoseShapes[shape]}</g>;
};

export default Nose;
