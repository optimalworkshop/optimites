import anime from 'animejs';
import React, { useContext, useEffect, useRef } from 'react';
import Context from '../Context';
import Eyebrows from './Eyebrows';
import Eyes from './Eyes';
import Mouth from './Mouth';
import Nose from './Nose';

const Face: React.FC = () => {
  const faceRef = useRef<SVGGElement>(null);
  const { face } = useContext(Context);
  const { eyebrows, eyes, nose, mouth, x, y, scale, rotation, flipped } = face;

  const debounce = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    debounce.current = setTimeout(() => {
      anime({
        targets: [faceRef.current],
        transform: `translate(${x}, ${y}) scale(${scale})`,
        strokeWidth: 20 / scale,
        easing: 'spring(1, 90, 7, 0)',
      });
    }, 100);
    return () => {
      clearTimeout(debounce.current);
    };
  }, [x, y, scale]);

  return (
    <g
      ref={faceRef}
      className="face"
      transform={`translate(${0}, ${0}) scale(${0.7})`}
      style={{ strokeWidth: 20 }}
    >
      <g transform={`rotate(${(rotation * 180) / Math.PI})`}>
        <g transform={`scale(${flipped ? -1 : 1}, 1)`}>
          <Eyebrows {...eyebrows} />
          <Eyes {...eyes} />
          <Nose {...nose} />
          <Mouth {...mouth} />
        </g>
      </g>
    </g>
  );
};

export default Face;
