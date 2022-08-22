import { useState } from 'react';
import Mite from './Mite';
import './App.scss';
import Context from './Context';
import Controls from './Controls';
import { Color, Shape } from './types';
import Preview from './Preview';

function App() {
  const [bodyShape, setBodyShape] = useState<Shape>(Shape.Egg);
  const [bodyColor, setBodyColor] = useState<Color>(Color.Blue);

  return (
    <Context.Provider
      value={{
        body: {
          shape: bodyShape,
          color: bodyColor,
          setShape: setBodyShape,
          setColor: setBodyColor,
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
