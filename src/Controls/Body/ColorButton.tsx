import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { Color, Shape } from '../../types';
import { Shapes } from '../../Mite/Body';

const ColorButton: React.FC<{ color: Color }> = ({ color }) => {
  const {
    body: { color: current, setColor },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(color)}
      aria-pressed={current === color || undefined}
      onClick={() => setColor(color)}
    >
      <svg viewBox="-500 -500 1000 1000">
        <path d={Shapes[Shape.Circle]} style={{ fill: `var(--${color})` }} />
      </svg>
    </button>
  );
};

export default ColorButton;
