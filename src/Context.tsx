import { createContext } from 'react';
import { Body, Color, EyebrowShape, EyeShape, Face, MouthShape, NoseShape, Shape } from './types';

type ContextShape = {
  body: Body & {
    setShape: (shape: Shape) => void;
    setColor: (color: Color) => void;
    setGap: (gap: number) => void;
    setOffset: (offset: number) => void;
  };
  face: Face & {
    setEyes: (shape: EyeShape) => void;
    setNose: (shape: NoseShape) => void;
    setMouth: (shape: MouthShape) => void;
    setEyebrows: (shape: EyebrowShape) => void;
    setX: (x: number) => void;
    setY: (y: number) => void;
    setScale: (scale: number) => void;
    setRotation: (scale: number) => void;
    setFlipped: (flipped: boolean) => void;
  };
};

export default createContext<ContextShape>({
  body: {
    shape: Shape.Egg,
    color: Color.Blue,
    gap: 0,
    offset: 0,
    setShape: () => void 0,
    setColor: () => void 0,
    setGap: () => void 0,
    setOffset: () => void 0,
  },
  face: {
    eyes: {
      shape: EyeShape.Dots,
    },
    nose: {
      shape: NoseShape.Normal,
    },
    mouth: {
      shape: MouthShape.Smile,
    },
    eyebrows: {
      shape: EyebrowShape.None,
    },
    x: 0,
    y: 0,
    scale: 0.6,
    rotation: 0,
    flipped: false,
    setEyes: () => void 0,
    setNose: () => void 0,
    setMouth: () => void 0,
    setEyebrows: () => void 0,
    setX: () => void 0,
    setY: () => void 0,
    setScale: () => void 0,
    setRotation: () => void 0,
    setFlipped: () => void 0,
  },
});
