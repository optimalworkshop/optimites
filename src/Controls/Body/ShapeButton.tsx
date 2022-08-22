import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { Shapes } from '../../Mite/Body';
import { Shape } from '../../types';

const ShapeButton: React.FC<{ shape: Shape }> = ({ shape }) => {
  const {
    body: { shape: current, setShape },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(shape)}
      aria-pressed={current === shape || undefined}
      onClick={() => setShape(shape)}
    >
      <svg viewBox="0 0 1000 1000">
        <path d={Shapes[shape]} />
      </svg>
    </button>
  );
};

export default ShapeButton;
