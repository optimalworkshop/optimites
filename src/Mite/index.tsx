import React from 'react';
import { Color, Shape } from '../types';
import Body from './Body';

type MiteProps = {
  body: {
    shape: Shape;
    color: Color;
  };
};

const Mite: React.FC<MiteProps> = ({ body }) => {
  return (
    <>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
        <Body {...body} />
      </svg>
    </>
  );
};

export default Mite;
