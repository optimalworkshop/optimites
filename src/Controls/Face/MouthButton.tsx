import { upperFirst } from 'lodash-es';
import React, { useContext } from 'react';
import Context from '../../Context';
import { MouthShape } from '../../types';
import { MouthShapes } from '../../Mite/Mouth';

const MouthButton: React.FC<{ shape: MouthShape }> = ({ shape }) => {
  const {
    face: {
      mouth: { shape: current },
      setMouth,
    },
  } = useContext(Context);

  return (
    <button
      aria-label={upperFirst(shape)}
      aria-pressed={current === shape || undefined}
      onClick={() => setMouth(shape)}
    >
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMax slice">
        {MouthShapes[shape]}
      </svg>
    </button>
  );
};

export default MouthButton;
