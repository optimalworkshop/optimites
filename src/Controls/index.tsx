import React, { CSSProperties, useState } from 'react';
import Body from './Body';
import { Shapes } from '../Mite/Body';
import './controls.scss';
import { Shape } from '../types';
import Tab from './Tab';
import Face from './Face';
import Position from './Position';

const outline: CSSProperties = {
  stroke: 'var(--controls-foreground)',
  strokeWidth: 50,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
};

const filled: CSSProperties = {
  fill: 'var(--controls-foreground)',
};

const Controls: React.FC = () => {
  const [tab, setTab] = useState('body');

  return (
    <aside className="controls">
      <div role="tablist">
        <Tab id="body" label="Body" selected={tab === 'body'} onClick={setTab}>
          <path d={Shapes[Shape.Egg]} fill="var(--blue)" transform="translate(-100 -25)" />
          <path d={Shapes[Shape.Egg]} style={outline} />
        </Tab>
        <Tab id="face" label="Face" selected={tab === 'face'} onClick={setTab}>
          <path
            d="M57,2c37,80 84,121 149,118c65,-3 -22,88 -22,88M348,284c-230,65 -440,73 -656,-73M-37,-12c-0,0 -74,95 -167,95c-92,-0 -167,-95 -167,-95c-0,0 74,-95 167,-95c92,-0 167,95 167,95ZM392,-77c-0,0 -64,81 -143,81c-79,0 -143,-81 -143,-81c-0,0 64,-81 143,-81c79,0 143,81 143,81ZM-459,-310c70,-132 146,-150 192,-122M166,-324c52,-40 139,-16 187,60"
            style={outline}
          />
          <path
            d="M-206,-30c-0,23 -18,42 -42,42c-23,0 -42,-18 -42,-42c-0,-23 18,-42 42,-42c23,0 42,18 42,42M240,-79c-0,20 -16,36 -36,36c-20,-0 -36,-16 -36,-36c0,-20 16,-36 36,-36c20,0 36,16 36,36"
            style={filled}
          />
        </Tab>
        <Tab id="position" label="Position" selected={tab === 'position'} onClick={setTab}>
          <path d={Shapes[Shape.Egg]} fill="var(--blue)" />
          <circle
            cx={100}
            cy={-100}
            r={250}
            style={{ ...outline, strokeDasharray: '0.01 0.04' }}
            pathLength={1}
          />
        </Tab>
      </div>
      <Body active={tab === 'body'} />
      <Face active={tab === 'face'} />
      <Position active={tab === 'position'} />
    </aside>
  );
};

export default Controls;
