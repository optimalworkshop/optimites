import React, { useContext } from 'react';
import Context from '../Context';
import { BackgroundColor } from '../types';
import Blob from './Blob';

type Palette = {
  base: string;
  blob: string;
};

const Palettes: { [key in BackgroundColor]: Palette } = {
  [BackgroundColor.None]: {
    base: 'transparent',
    blob: 'transparent',
  },
  [BackgroundColor.Yellow]: {
    base: 'hsl(50, 100%, 50%)',
    blob: 'hsl(47, 92%, 95%)',
  },
  [BackgroundColor.Lemon]: {
    base: 'hsl(49, 100%, 76%)',
    blob: 'hsl(49, 100%, 90%)',
  },
  [BackgroundColor.Lime]: {
    base: 'hsl(77, 71%, 79%)',
    blob: 'hsl(71, 76%, 90%)',
  },
  [BackgroundColor.Mint]: {
    base: 'hsl(131, 40%, 87%)',
    blob: 'hsl(116, 46%, 76%)',
  },
  [BackgroundColor.Blue]: {
    base: 'hsl(190, 59%, 84%)',
    blob: 'hsl(188, 48%, 90%)',
  },
};

const Background: React.FC = () => {
  const {
    background: { color, dashed },
  } = useContext(Context);

  if (color === BackgroundColor.None) return null;

  const { base, blob } = Palettes[color];

  return (
    <g className="background">
      <defs>
        <filter id="noiseFilter">
          <feImage xlinkHref="#noisyBlob" result="blob" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="6"
            stitchTiles="stitch"
            result="noise"
          />
          <feComposite in2="noise" in="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect x={-1000} y={-1000} width={2000} height={2000} fill={base} />
      <Blob fill={blob} filter="url(#noiseFilter)" />
      {dashed ? (
        <Blob
          fill="none"
          stroke="var(--white)"
          strokeWidth={10}
          strokeLinecap="round"
          pathLength={2}
          strokeDasharray="0.02 0.03"
        />
      ) : (
        <Blob fill={blob} opacity={0.7} />
      )}
    </g>
  );
};

export default Background;
