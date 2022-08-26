import React, { useContext, useCallback } from 'react';
import Context from '../../Context';

const Arm: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  const direction = side === 'left' ? -1 : 1;

  const {
    [`${side}Arm` as 'leftArm' | 'rightArm']: {
      control1,
      control2,
      hand,
      rotation,
      setRotation,
      setControl1,
      setControl2,
      setHand,
    },
  } = useContext(Context);

  const x = hand.x * direction;
  const y = control1.y;

  const xChanged = useCallback(
    (e) => {
      const d = parseInt(e.target.value) * direction;
      setHand({ x: d, y: 0 });
      setControl1({ x: d / 3, y });
      setControl2({ x: (d * 2) / 3, y });
    },
    [y]
  );

  const yChanged = useCallback(
    (e) => {
      const d = parseInt(e.target.value);
      setControl1({ x: x / 3, y: d });
      setControl2({ x: (x * 2) / 3, y: d });
    },
    [x]
  );

  return (
    <fieldset>
      <legend>{side.slice(0, 1).toUpperCase()}</legend>
      <input
        type="range"
        min={-180}
        max={180}
        value={rotation}
        onChange={(e) => setRotation(parseInt(e.target.value, 10))}
      />
      <input type="range" min={-400} max={400} value={x} onChange={xChanged} />
      <input type="range" min={-200} max={200} value={y} onChange={yChanged} />
    </fieldset>
  );
};

export default Arm;
