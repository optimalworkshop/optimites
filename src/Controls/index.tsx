import React, { CSSProperties, useState } from 'react';
import Body from './Body';
import { Shapes } from '../Mite/Body';
import './controls.scss';
import { Shape } from '../types';
import Tab from './Tab';
import Face from './Face';
import Position from './Position';
import Background from './Background';
import Options from './Options';
import Arms from './Arms';

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
            style={{ ...outline, strokeDasharray: '0 0' }}
            pathLength={1}
          />
        </Tab>
        <Tab id="arms" label="Arms" selected={tab === 'arms'} onClick={setTab}>
          <></>
        </Tab>
        <Tab id="background" label="Background" selected={tab === 'background'} onClick={setTab}>
          <path
            d="M249,-359C340,-301,394,-167,385,-44C377,79,296,308,200,380C103,452,-85,458,-192,388C-299,318,-448,91,-442,-38C-436,-168,-274,-336,-158,-390C-43,-443,158,-417,249,-359C340,-301,394,-167,385,-44"
            fill="var(--blue)"
            opacity={0.25}
          />
          <path
            d="M157,-391C261,-324,365,-111,378,4C391,120,332,250,233,307C134,364,-124,397,-215,346C-307,294,-310,121,-314,-2C-319,-125,-319,-330,-241,-395C-162,-459,54,-457,157,-391C261,-324,365,-111,378,4"
            fill="var(--blue)"
            opacity={0.75}
          />
        </Tab>
        <Tab id="options" label="Options" selected={tab === 'options'} onClick={setTab}>
          <path
            d="M38,-373c-1,-15 -13,-27 -29,-27c-38,-0 -77,4 -114,14c-14,4 -24,18 -21,33c1,12 3,24 5,36c2,13 -4,25 -16,31c-22,10 -43,24 -62,40c-10,8 -24,9 -35,1c-10,-6 -20,-13 -30,-20c-12,-8 -29,-5 -39,5c-24,29 -44,62 -60,98c-6,14 -0,30 12,37c10,6 21,12 32,18c11,6 17,19 14,32c-5,24 -7,49 -7,74c0,13 -8,25 -20,29c-11,3 -23,7 -35,11c-14,4 -23,19 -20,34c7,37 21,74 39,108c7,13 23,19 37,13c11,-4 22,-9 34,-13c12,-4 26,-1 34,8c15,19 33,37 53,52c10,8 14,21 9,34c-4,11 -8,23 -13,34c-5,14 0,30 14,37c34,17 71,29 109,36c15,2 29,-6 34,-20c3,-11 7,-23 10,-35c3,-12 15,-21 28,-21c25,-0 49,-3 74,-9c12,-3 26,2 32,13c6,10 12,21 19,31c7,13 24,18 38,11c35,-16 67,-37 96,-62c11,-10 13,-27 4,-39c-7,-10 -14,-20 -21,-30c-7,-10 -7,-25 1,-35c15,-19 28,-41 39,-63c5,-11 18,-18 31,-17c12,1 24,3 36,4c15,2 29,-7 33,-22c9,-37 13,-76 11,-114c-0,-15 -12,-27 -28,-28c-12,-0 -24,-1 -37,-2c-13,-0 -24,-10 -27,-23c-5,-24 -14,-47 -25,-70c-5,-11 -3,-26 6,-35c8,-8 17,-17 26,-25c11,-10 12,-27 3,-39c-23,-30 -51,-57 -82,-80c-12,-8 -29,-7 -39,4c-8,9 -16,18 -25,27c-8,9 -23,12 -35,6c-22,-10 -46,-18 -70,-23c-12,-2 -22,-13 -23,-26c-1,-12 -2,-24 -3,-36Zm-54,236c75,-9 143,44 153,119c9,75 -44,143 -119,153c-75,9 -143,-44 -153,-119c-9,-75 44,-143 119,-153Z"
            style={{ ...filled, fill: 'var(--blue)' }}
          />
        </Tab>
      </div>
      <Body active={tab === 'body'} />
      <Face active={tab === 'face'} />
      <Position active={tab === 'position'} />
      <Arms active={tab === 'arms'} />
      <Background active={tab === 'background'} />
      <Options active={tab === 'options'} />
    </aside>
  );
};

export default Controls;
