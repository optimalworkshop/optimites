import React, { useContext } from 'react';
import Context from '../../Context';
import { BackgroundColor } from '../../types';
import ColorButton from './ColorButton';
import DashButton from './DashButton';

const Background: React.FC<{ active: boolean }> = ({ active }) => {
  const {
    background: { color, setColor },
  } = useContext(Context);
  return (
    <div
      role="tabpanel"
      id="controls__background"
      aria-labelledby="tab--background"
      aria-hidden={!active || undefined}
    >
      <div className="controls__color">
        {Object.entries(BackgroundColor).map(([key, value]) => (
          <ColorButton key={key} color={value} />
        ))}
      </div>
      <div className="controls__shape">
        <DashButton />
      </div>
    </div>
  );
};

export default Background;
