import React from 'react';
import FlipButton from './FlipButton';
import PositionControl from './PositionControl';

const Position: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      role="tabpanel"
      id="controls__position"
      aria-labelledby="tab--position"
      aria-hidden={!active || undefined}
    >
      <PositionControl />
      <div className="controls__shape">
        <FlipButton />
      </div>
    </div>
  );
};

export default Position;
