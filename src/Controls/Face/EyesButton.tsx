import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { EyeShape } from '../../types';
import { EyeShapes } from '../../Mite/Eyes';

const EyesButton: React.FC<{ shape: EyeShape }> = ({ shape }) => {
  const {
    face: {
      eyes: { shape: current },
      setEyes,
    },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(shape)}
      aria-pressed={current === shape || undefined}
      onClick={() => setEyes(shape)}
    >
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid slice">
        {EyeShapes[shape]}
      </svg>
    </button>
  );
};

export default EyesButton;
