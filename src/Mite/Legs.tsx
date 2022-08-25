import anime from 'animejs';
import React, { ReactNode, useContext, useEffect, useRef } from 'react';
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
  [BodyShape.Trapezoid]: [
    { x: 200, y: 200 },
    { x: -200, y: 200 },
  ],
  [BodyShape.Triangle]: [
    { x: 200, y: 300 },
    { x: -200, y: 300 },
  ],
  [BodyShape.Rectangle]: [
    { x: 250, y: 200 },
    { x: -250, y: 200 },
  ],
  [BodyShape.Square]: [
    { x: 200, y: 300 },
    { x: -200, y: 300 },
  ],
};

const Legs: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const leftLeg = useRef<SVGGElement>(null);
  const rightLeg = useRef<SVGGElement>(null);

  const {
    body: { shape },
  } = useContext(Context);

  const [{ x: lx, y: ly }, { x: rx, y: ry }] = LegPositions[shape] || [
    { x: 100, y: 300 },
    { x: -100, y: 300 },
  ];

  useEffect(() => {
    anime({
      targets: [leftLeg.current],
      transform: `translate(${lx},${ly})`,
      easing: 'spring(1, 90, 7, 0)',
    });
    anime({
      targets: [rightLeg.current],
      transform: `translate(${rx},${ry})`,
      easing: 'spring(1, 90, 7, 0)',
    });
  }, [lx, ly, rx, ry]);

  return (
    <g>
      <g ref={leftLeg}>
        <path className="leg outline" d={`M0 0c50 100 50 200 0 400h50`} />
      </g>
      {children}
      <g ref={rightLeg}>
        <path className="leg outline" d={`M0 0c50 100 50 200 0 400h50`} />
      </g>
    </g>
  );
};

export default Legs;
