import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { EyebrowShape } from '../../types';
import { EyebrowShapes } from '../../Mite/Eyebrows';

const EyebrowsButton: React.FC<{ shape: EyebrowShape }> = ({ shape }) => {
  const {
    face: {
      eyebrows: { shape: current },
      setEyebrows,
    },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(shape)}
      aria-pressed={current === shape || undefined}
      onClick={() => setEyebrows(shape)}
    >
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMin slice">
        {EyebrowShapes[shape]}
      </svg>
    </button>
  );
};

export default EyebrowsButton;
