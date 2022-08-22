import { createContext } from 'react';
import { Body, Color, Shape } from './types';

type ContextShape = {
  body: Body & {
    setShape: (shape: Shape) => void;
    setColor: (color: Color) => void;
  };
};

export default createContext<ContextShape>({
  body: {
    shape: Shape.Egg,
    color: Color.Blue,
    setShape: () => void 0,
    setColor: () => void 0,
  },
});
