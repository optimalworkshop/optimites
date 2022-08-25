import React, { useContext } from 'react';
import Mite from '../Mite';
import Context from '../Context';
import './preview.scss';
import Background from './Background';

const Preview = () => {
  const { body } = useContext(Context);
  return (
    <div className="preview">
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid meet">
        <Background />
        <g transform="scale(0.75)">
          <Mite body={body} />
        </g>
      </svg>
    </div>
  );
};

export default Preview;
