import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { BackgroundColor, Shape } from '../../types';
import { Shapes } from '../../Mite/Body';

const ColorButton: React.FC<{ color: BackgroundColor }> = ({ color }) => {
  const {
    background: { color: current, setColor },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(color)}
      aria-pressed={current === color || undefined}
      onClick={() => setColor(color)}
    >
      <svg viewBox="-500 -500 1000 1000">
        {color === BackgroundColor.None ? (
          <g fill="none" stroke="var(--controls-foreground)" strokeWidth={50}>
            <path d={`${Shapes[Shape.Circle]}M-250 250l530-530`} />
          </g>
        ) : (
          <path d={Shapes[Shape.Circle]} style={{ fill: `var(--${color})` }} />
        )}
      </svg>
    </button>
  );
};

export default ColorButton;
