import { upperFirst } from 'lodash-es';
import React, { useCallback, useContext } from 'react';
import Context from '../../Context';
import { Shapes } from '../../Mite/Body';
import { Shape } from '../../types';

type FacePosition = {
  x: number;
  y: number;
  scale: number;
};

const FacePositions: { [key in Shape]: FacePosition } = {
  [Shape.Egg]: { x: 0, y: 0, scale: 0.6 },
  [Shape.Trapezoid]: { x: 50, y: -50, scale: 0.6 },
  [Shape.Triangle]: { x: 0, y: 80, scale: 0.6 },
  [Shape.Circle]: { x: 0, y: -50, scale: 0.6 },
  [Shape.Rectangle]: { x: 150, y: -50, scale: 0.6 },
  [Shape.Square]: { x: 0, y: 0, scale: 0.6 },
};

const ShapeButton: React.FC<{ shape: Shape }> = ({ shape }) => {
  const {
    body: { shape: current, setShape },
    face: { setX, setY, setScale },
  } = useContext(Context);

  const clicked = useCallback(() => {
    const { x, y, scale } = FacePositions[shape];
    setShape(shape);
    setX(x);
    setY(y);
    setScale(scale);
  }, [shape]);

  return (
    <button
      aria-label={upperFirst(shape)}
      aria-pressed={current === shape || undefined}
      onClick={clicked}
    >
      <svg viewBox="-500 -500 1000 1000">
        <path d={Shapes[shape]} />
      </svg>
    </button>
  );
};

export default ShapeButton;
