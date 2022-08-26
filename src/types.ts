export enum Shape {
  'Egg' = 'egg',
  'Trapezoid' = 'trapezoid',
  'Triangle' = 'triangle',
  'Circle' = 'circle',
  'Rectangle' = 'rectangle',
  'Square' = 'square',
}

export enum Color {
  'Blue' = 'blue',
  'Yellow' = 'yellow',
  'Teal' = 'teal',
  'Orange' = 'orange',
  'Pink' = 'pink',
  'Indigo' = 'indigo',
  'Green' = 'green',
}

export type Body = {
  shape: Shape;
  color: Color;
  gap: number;
  offset: number;
};

export enum EyeShape {
  'Dots' = 'dots',
  'Oval' = 'oval',
  'Round' = 'round',
  'Smug' = 'smug',
  'Tiny' = 'tiny',
  'Fancy' = 'fancy',
  'Sneaky' = 'sneaky',
  'Mixed' = 'mixed',
  'Downwards' = 'downwards',
  'Upwards' = 'upwards',
}

export type Eyes = {
  shape: EyeShape;
};

export enum NoseShape {
  'Normal' = 'normal',
  'Pointy' = 'pointy',
  'Slope' = 'slope',
  'Button' = 'button',
  'Upturned' = 'upturned',
  'Narrow' = 'narrow',
  'Aquiline' = 'aquiline',
  'Bulbous' = 'bulbous',
  'Long' = 'long',
}

export type Nose = {
  shape: NoseShape;
};

export enum MouthShape {
  'Side' = 'side',
  'Sparky' = 'sparky',
  'Smile' = 'smile',
  'Slight' = 'slight',
  'Gasp' = 'gasp',
  'Prim' = 'prim',
  'Smirk' = 'smirk',
  'Wide' = 'wide',
  'Open' = 'open',
  'Widest' = 'widest',
  'Chatty' = 'chatty',
}

export type Mouth = {
  shape: MouthShape;
};

export enum EyebrowShape {
  'None' = 'none',
  'Friendly' = 'friendly',
  'Lashes' = 'lashes',
  'Monobrow' = 'monobrow',
  'Arched' = 'arched',
  'Spock' = 'spock',
  'Left' = 'left',
  'Right' = 'right',
  'Bemused' = 'bemused',
  'Prominent' = 'prominent',
}

export type Eyebrows = {
  shape: EyebrowShape;
};

export type Face = {
  eyes: Eyes;
  nose: Nose;
  mouth: Mouth;
  eyebrows: Eyebrows;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  flipped: boolean;
};

export enum BackgroundColor {
  'None' = 'none',
  'Yellow' = 'yellow',
  'Lime' = 'lime',
  'Lemon' = 'lemon',
  'Mint' = 'mint',
  'Blue' = 'blue',
}

export type Background = {
  color: BackgroundColor;
  dashed: boolean;
};

export type Spec = {
  body: Body;
  face: Face;
  background: Background;
};
