import React, { useContext, useState } from 'react';
import Context from '../Context';
import { BodyShape } from '../Mite/Body';
import Body from './Body';
import './controls.scss';

const Controls: React.FC = () => {
  const { body, setBody } = useContext(Context);
  const [array, setArray] = useState(1000);
  const [offset, setOffset] = useState(0);
  return (
    <aside className="controls">
      <Body />
      <input
        type="range"
        min={0}
        max={1000}
        value={array}
        onChange={(e) => setArray(+e.target.value)}
      />
      <input
        type="range"
        min={-1000}
        max={1000}
        value={offset}
        onChange={(e) => setOffset(+e.target.value)}
      />
    </aside>
  );
};

export default Controls;
