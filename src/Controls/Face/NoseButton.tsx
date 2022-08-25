import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { NoseShape } from '../../types';
import { NoseShapes } from '../../Mite/Nose';

const NoseButton: React.FC<{ shape: NoseShape }> = ({ shape }) => {
  const {
    face: {
      nose: { shape: current },
      setNose,
    },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(shape)}
      aria-pressed={current === shape || undefined}
      onClick={() => setNose(shape)}
    >
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid slice">
        {NoseShapes[shape]}
      </svg>
    </button>
  );
};

export default NoseButton;
