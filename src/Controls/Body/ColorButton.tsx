import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { Color } from '../../types';

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
      <svg viewBox="0 0 1000 1000">
        <circle cx={500} cy={500} r={450} style={{ fill: `var(--${color})` }} />
      </svg>
    </button>
  );
};

export default ColorButton;
