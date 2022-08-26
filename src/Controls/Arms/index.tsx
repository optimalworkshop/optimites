import React, { useCallback, useEffect, useRef } from 'react';
import Arm from './Arm';

const Arms: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      role="tabpanel"
      id="controls__arms"
      aria-labelledby="tab--arms"
      aria-hidden={!active || undefined}
    >
      <Arm side="right" />
      <Arm side="left" />
    </div>
  );
};

export default Arms;
