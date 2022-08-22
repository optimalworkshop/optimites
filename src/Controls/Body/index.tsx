import React from 'react';
import { Color, Shape } from '../../types';
import ColorButton from './ColorButton';
import ShapeButton from './ShapeButton';

const Body: React.FC = () => (
  <>
    <div className="controls__body">
      {Object.entries(Shape).map(([key, value]) => (
        <ShapeButton key={key} shape={value} />
      ))}
    </div>
    <div className="controls__color">
      {Object.entries(Color).map(([key, value]) => (
        <ColorButton key={key} color={value} />
      ))}
    </div>
  </>
);

export default Body;
