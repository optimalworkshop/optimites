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
};
