import React, { useContext } from 'react';
import Mite from '../Mite';
import Context from '../Context';
import './preview.scss';

const Preview = () => {
  const { body } = useContext(Context);
  return (
    <div className="preview">
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid meet">
        <Mite body={body} />
      </svg>
    </div>
  );
};

export default Preview;
