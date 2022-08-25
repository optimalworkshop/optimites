import React, { useContext } from 'react';
import Context from '../../Context';

const FlipButton: React.FC = () => {
  const {
    face: { flipped, setFlipped },
  } = useContext(Context);

  return (
    <button
      className="flip-button"
      aria-label="Flip horizontally"
      aria-pressed={flipped || undefined}
      onClick={() => setFlipped(!flipped)}
    >
      <svg viewBox="-500 -500 1000 1000">
        <path d="M-28,-400c5,125 13,705 10,780c-1,25 -90,17 -190,20c-100,2 -207,-4 -210,-30c-4,-51 82,-201 160,-380c66,-153 226,-482 230,-390Z" />
        <path d="M22,-390c0,40 9,756 10,770c0,13 73,12 160,10c86,-2 224,4 225,-20c0,-24 -149,-282 -205,-430c-56,-147 -150,-318 -160,-340c-9,-21 -30,-32 -30,10Z" />
      </svg>
    </button>
  );
};

export default FlipButton;
