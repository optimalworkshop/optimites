import React, { useContext } from 'react';
import Context from '../../Context';

const DashButton: React.FC = () => {
  const {
    background: { dashed, setDashed },
  } = useContext(Context);

  return (
    <button
      className="dash-button"
      aria-label="Dashed outline"
      aria-pressed={dashed || undefined}
      onClick={() => setDashed(!dashed)}
    >
      <svg viewBox="-500 -500 1000 1000">
        <path
          d="M157,-391C261,-324,365,-111,378,4C391,120,332,250,233,307C134,364,-124,397,-215,346C-307,294,-310,121,-314,-2C-319,-125,-319,-330,-241,-395C-162,-459,54,-457,157,-391C261,-324,365,-111,378,4"
          pathLength={1}
        />
      </svg>
    </button>
  );
};

export default DashButton;
