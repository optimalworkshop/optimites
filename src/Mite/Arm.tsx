import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { Arm as ArmProps } from '../types';

const Arm: React.FC<ArmProps & { x?: number; y?: number }> = ({
  control1,
  control2,
  hand,
  rotation,
  x = 0,
  y = 0,
}) => {
  const shoulder = useRef<SVGGElement>(null);
  const arm = useRef<SVGPathElement>(null);

  return (
    <g ref={shoulder} transform={`translate(${x}, ${y}) rotate(${rotation})`}>
      <path
        ref={arm}
        className="arm outline"
        d={`M0,0 c${control1.x},${control1.y} ${control2.x},${control2.y} ${hand.x},${hand.y}`}
      />
    </g>
  );
};

export default Arm;
