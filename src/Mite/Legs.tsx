import React, { ReactNode, useContext } from 'react';
import Context from '../Context';
import { Shape as BodyShape } from '../types';

type LegPosition = {
  x: number;
  y: number;
};

const LegPositions: { [key in BodyShape]?: [LegPosition, LegPosition] } = {
  [BodyShape.Egg]: [
    { x: 150, y: 350 },
    { x: -150, y: 350 },
  ],
};

const Legs: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const {
    body: { shape },
  } = useContext(Context);

  const [{ x: lx, y: ly }, { x: rx, y: ry }] = LegPositions[shape] || [
    { x: 100, y: 300 },
    { x: -100, y: 300 },
  ];

  return (
    <g>
      <path className="leg outline" d={`M${lx} ${ly}v500`} />
      {children}
      <path className="leg outline" d={`M${rx} ${ry}v500`} />
    </g>
  );
};

export default Legs;
