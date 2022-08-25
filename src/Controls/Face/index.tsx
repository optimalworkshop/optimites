import React from 'react';
import { EyebrowShape, EyeShape, MouthShape, NoseShape } from '../../types';
import EyebrowsButton from './EyebrowsButton';
import EyesButton from './EyesButton';
import MouthButton from './MouthButton';
import NoseButton from './NoseButton';

const Face: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      role="tabpanel"
      id="controls__face"
      aria-labelledby="tab--face"
      aria-hidden={!active || undefined}
    >
      <div className="controls__shape">
        {Object.entries(EyebrowShape).map(([key, value]) => (
          <EyebrowsButton key={key} shape={value} />
        ))}
      </div>
      <div className="controls__shape">
        {Object.entries(EyeShape).map(([key, value]) => (
          <EyesButton key={key} shape={value} />
        ))}
      </div>
      <div className="controls__shape">
        {Object.entries(NoseShape).map(([key, value]) => (
          <NoseButton key={key} shape={value} />
        ))}
      </div>
      <div className="controls__shape">
        {Object.entries(MouthShape).map(([key, value]) => (
          <MouthButton key={key} shape={value} />
        ))}
      </div>
    </div>
  );
};

export default Face;
