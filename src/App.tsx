import { useState } from 'react';
import Mite from './Mite';
import './App.scss';
import Context from './Context';
import Controls from './Controls';
import { Color, EyebrowShape, EyeShape, MouthShape, NoseShape, Shape } from './types';
import Preview from './Preview';

function App() {
  const [bodyShape, setBodyShape] = useState<Shape>(Shape.Egg);
  const [bodyColor, setBodyColor] = useState<Color>(Color.Blue);
  const [gap, setGap] = useState(0);
  const [offset, setOffset] = useState(0);
  const [eyeShape, setEyeShape] = useState<EyeShape>(EyeShape.Dots);
  const [noseShape, setNoseShape] = useState<NoseShape>(NoseShape.Normal);
  const [mouthShape, setMouthShape] = useState<MouthShape>(MouthShape.Smile);
  const [eyebrowShape, setEyebrowShape] = useState<EyebrowShape>(EyebrowShape.None);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [scale, setScale] = useState<number>(0.6);
  const [rotation, setRotation] = useState<number>(0);
  const [flipped, setFlipped] = useState(false);

  return (
    <Context.Provider
      value={{
        body: {
          shape: bodyShape,
          color: bodyColor,
          gap,
          offset,
          setShape: setBodyShape,
          setColor: setBodyColor,
          setGap,
          setOffset,
        },
        face: {
          eyes: {
            shape: eyeShape,
          },
          nose: {
            shape: noseShape,
          },
          mouth: {
            shape: mouthShape,
          },
          eyebrows: {
            shape: eyebrowShape,
          },
          x,
          y,
          scale,
          rotation,
          flipped,
          setEyes: setEyeShape,
          setNose: setNoseShape,
          setMouth: setMouthShape,
          setEyebrows: setEyebrowShape,
          setX,
          setY,
          setScale,
          setRotation,
          setFlipped,
        },
      }}
    >
      <div className="app">
        <Preview />
        <Controls />
      </div>
    </Context.Provider>
  );
}

export default App;
