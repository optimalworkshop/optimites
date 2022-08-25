import React, { ReactElement } from 'react';
import { EyebrowShape } from '../types';

export const EyebrowShapes: { [key in EyebrowShape]: ReactElement } = {
  [EyebrowShape.None]: <g></g>,
  [EyebrowShape.Friendly]: (
    <path
      className="eyebrows__outline outline"
      d="M197,-264c84,-24 147,27 172,85M-95,-262c-83,-27 -148,22 -175,79"
    />
  ),
  [EyebrowShape.Lashes]: (
    <path
      className="eyebrows__outline outline"
      d="M-385,-153c-0,0 76,-101 173,-103M214,-319c112,-7 165,115 165,115M-354,-204c-0,0 -75,-5 -112,-69M-312,-227c0,-0 -64,-40 -67,-113"
    />
  ),
  [EyebrowShape.Monobrow]: (
    <path className="eyebrows__outline outline" d="M235,-233c-166,-73 -293,-128 -529,-2" />
  ),
  [EyebrowShape.Arched]: (
    <path
      className="eyebrows__outline outline"
      d="M-397,-289c29,-77 96,-117 145,-60M63,-386c-52,-53 -97,-46 -126,-10"
    />
  ),
  [EyebrowShape.Spock]: (
    <path
      className="eyebrows__outline outline"
      d="M-360,-338c70,-131 145,-150 192,-122M164,-352c51,-40 138,-16 186,60"
    />
  ),
  [EyebrowShape.Left]: (
    <path className="eyebrows__outline outline" d="M182,-302c43,-39 113,-73 186,5" />
  ),
  [EyebrowShape.Right]: (
    <path className="eyebrows__outline outline" d="M-272,-148c0,0 39,-76 119,-64" />
  ),
  [EyebrowShape.Bemused]: (
    <path
      className="eyebrows__outline outline"
      d="M336,-263c-86,-54 -148,-91 -201,-20M-320,-186c63,-79 110,-135 183,-84"
    />
  ),
  [EyebrowShape.Prominent]: (
    <path
      className="eyebrows__outline outline"
      d="M-361,-200c15,-126 101,-186 194,-134M346,-271c-62,-42 -178,-159 -247,-39"
    />
  ),
};

const Eyebrows: React.FC<{ shape: EyebrowShape }> = ({ shape }) => {
  return <g className="eyebrows">{EyebrowShapes[shape]}</g>;
};

export default Eyebrows;
