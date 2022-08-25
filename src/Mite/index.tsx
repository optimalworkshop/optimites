import React from 'react';
import { Color, Shape } from '../types';
import Body from './Body';
import { Body as BodyProps } from '../types';

type MiteProps = {
  body: BodyProps;
};

const Mite: React.FC<MiteProps> = ({ body }) => {
  return (
    <>
      <Body {...body} />
    </>
  );
};

export default Mite;
