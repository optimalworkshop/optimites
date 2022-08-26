import React, { useContext } from 'react';
import Context from '../../Context';
import { Color, Shape } from '../../types';
import ColorButton from './ColorButton';
import ShapeButton from './ShapeButton';

const Body: React.FC<{ active: boolean }> = ({ active }) => {
  const {
    body: { gap, setGap, offset, setOffset },
  } = useContext(Context);

  return (
    <div
      role="tabpanel"
      id="controls__body"
      aria-labelledby="tab--body"
      aria-hidden={!active || undefined}
    >
      <div className="controls__shape">
        {Object.entries(Shape).map(([key, value]) => (
          <ShapeButton key={key} shape={value} />
        ))}
      </div>
      <div className="controls__color">
        {Object.entries(Color).map(([key, value]) => (
          <ColorButton key={key} color={value} />
        ))}
      </div>
      <div className="controls__gap">
        <svg viewBox="0 0 1000 1000">
          <path d="M315,174C360,149 452,128 494,127C546,126 616,136 659,153C701,170 737,196 765,228C791,258 818,314 832,351C848,391 852,431 854,484C856,521 850,573 841,605C829,646 798,709 775,737C747,770 690,815 649,833C618,847 556,871 499,872C454,872 410,866 372,852C337,839 272,791 243,758C217,729 193,688 179,653C164,616 146,550 145,510M180,187L120,123M134,252L33,215M120,342L26,341" />
        </svg>
        <input
          type="range"
          min={0}
          max={100}
          value={100 - gap}
          onChange={(e) => setGap(100 - +e.target.value)}
        />
      </div>
      <div className="controls__offset">
        <svg viewBox="0 0 1000 1000">
          <path d="M315,174C360,149 452,128 494,127C546,126 616,136 659,153C701,170 737,196 765,228C791,258 818,314 832,351C848,391 852,431 854,484C856,521 850,573 841,605C829,646 798,709 775,737C747,770 690,815 649,833C618,847 556,871 499,872C454,872 410,866 372,852C337,839 272,791 243,758C217,729 193,688 179,653C164,616 146,550 145,510M315,174L352,66M315,174L409,230" />
        </svg>
        <input
          type="range"
          min={-100}
          max={100}
          value={offset}
          onChange={(e) => setOffset(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default Body;
