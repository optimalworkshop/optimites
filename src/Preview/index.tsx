import React, { useContext } from 'react';
import Mite from '../Mite';
import Context from '../Context';
import './preview.scss';

const Preview = () => {
  const { body } = useContext(Context);
  return (
    <div className="preview">
      <Mite body={body} />
    </div>
  );
};

export default Preview;
