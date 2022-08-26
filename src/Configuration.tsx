import {
  PropsWithChildren,
  useReducer,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { merge, sample } from 'lodash-es';
import Context, { ContextShape } from './Context';
import {
  BackgroundColor,
  Color,
  EyebrowShape,
  EyeShape,
  MouthShape,
  NoseShape,
  Point,
  Shape,
  Spec,
} from './types';

type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object ? Subset<K[attr]> : K[attr];
};

function randomFrom<T>(choices: { [key: string]: T }): T {
  return choices[Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)]];
}

const useConfiguration = (
  initial: Subset<Spec> = {}
): {
  state: ContextShape;
  update: (updates: Subset<Spec>) => void;
  spec: Spec;
} => {
  const [state, dispatch] = useReducer(
    (current: Spec, updates: Subset<Spec>) => merge({}, current, updates),
    merge(
      {},
      {
        background: {
          color: BackgroundColor.Lime,
          dashed: false,
        },
        body: {
          shape: Shape.Egg,
          color: Color.Blue,
          gap: 0,
          offset: 0,
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
        },
        leftArm: {
          control1: { x: -100, y: 300 },
          control2: { x: -200, y: 300 },
          hand: { x: -300, y: 0 },
          rotation: -25,
        },
        rightArm: {
          control1: { x: 100, y: 300 },
          control2: { x: 200, y: 300 },
          hand: { x: 300, y: 0 },
          rotation: 25,
        },
      },
      initial
    )
  );

  const setBackgroundColor = useCallback(
    (color: BackgroundColor) => dispatch({ background: { color } }),
    []
  );
  const setDashed = useCallback((dashed: boolean) => dispatch({ background: { dashed } }), []);
  const setBodyShape = useCallback((shape: Shape) => dispatch({ body: { shape } }), []);
  const setBodyColor = useCallback((color: Color) => dispatch({ body: { color } }), []);
  const setGap = useCallback((gap: number) => dispatch({ body: { gap } }), []);
  const setOffset = useCallback((offset: number) => dispatch({ body: { offset } }), []);
  const setEyebrowShape = useCallback(
    (shape: EyebrowShape) => dispatch({ face: { eyebrows: { shape } } }),
    []
  );
  const setEyeShape = useCallback((shape: EyeShape) => dispatch({ face: { eyes: { shape } } }), []);
  const setNoseShape = useCallback(
    (shape: NoseShape) => dispatch({ face: { nose: { shape } } }),
    []
  );
  const setMouthShape = useCallback(
    (shape: MouthShape) => dispatch({ face: { mouth: { shape } } }),
    []
  );
  const setX = useCallback((x: number) => dispatch({ face: { x } }), []);
  const setY = useCallback((y: number) => dispatch({ face: { y } }), []);
  const setScale = useCallback((scale: number) => dispatch({ face: { scale } }), []);
  const setRotation = useCallback((rotation: number) => dispatch({ face: { rotation } }), []);
  const setFlipped = useCallback((flipped: boolean) => dispatch({ face: { flipped } }), []);
  const setLeftArmControl1 = useCallback(
    (point: Point) => dispatch({ leftArm: { control1: point } }),
    []
  );
  const setLeftArmControl2 = useCallback(
    (point: Point) => dispatch({ leftArm: { control2: point } }),
    []
  );
  const setLeftArmHand = useCallback((point: Point) => dispatch({ leftArm: { hand: point } }), []);
  const setLeftArmRotation = useCallback(
    (rotation: number) => dispatch({ leftArm: { rotation } }),
    []
  );
  const setRightArmControl1 = useCallback(
    (point: Point) => dispatch({ rightArm: { control1: point } }),
    []
  );
  const setRightArmControl2 = useCallback(
    (point: Point) => dispatch({ rightArm: { control2: point } }),
    []
  );
  const setRightArmHand = useCallback(
    (point: Point) => dispatch({ rightArm: { hand: point } }),
    []
  );
  const setRightArmRotation = useCallback(
    (rotation: number) => dispatch({ rightArm: { rotation } }),
    []
  );

  const scramble = useCallback(() => {
    const d = Math.sqrt(Math.random() * 40000);
    const a = Math.sqrt(Math.random() * Math.PI) * (Math.floor(Math.random() * 2) - 1);

    const randomArm = (d: -1 | 1) => {
      const x = Math.random() * 800 - 400;
      const y = Math.random() * 400 - 200;

      return {
        rotation: (Math.random() * 180 - 90) * d,
        control1: { x: x / 3, y },
        control2: { x: (x * 2) / 3, y },
        hand: { x, y: 0 },
      };
    };

    dispatch({
      background: {
        color: randomFrom(BackgroundColor),
        dashed: sample([false, false, true]),
      },
      body: {
        shape: randomFrom(Shape),
        color: randomFrom(Color),
        gap: Math.random() * 20,
        offset: Math.random() * 100,
      },
      face: {
        eyebrows: {
          shape: randomFrom(EyebrowShape),
        },
        eyes: {
          shape: randomFrom(EyeShape),
        },
        nose: {
          shape: randomFrom(NoseShape),
        },
        mouth: {
          shape: randomFrom(MouthShape),
        },
        x: d * Math.cos(a),
        y: d * Math.sin(a),
        scale: Math.random() * 0.4 + 0.4,
        rotation: Math.sqrt((Math.random() * Math.PI) / 4) * (Math.floor(Math.random() * 2) - 1),
      },
      leftArm: randomArm(-1),
      rightArm: randomArm(1),
    });
  }, []);

  const stateWithSetters = useMemo(
    () =>
      merge({}, state, {
        background: {
          setColor: setBackgroundColor,
          setDashed,
        },
        body: {
          setShape: setBodyShape,
          setColor: setBodyColor,
          setGap,
          setOffset,
        },
        face: {
          setEyebrows: setEyebrowShape,
          setEyes: setEyeShape,
          setNose: setNoseShape,
          setMouth: setMouthShape,
          setX,
          setY,
          setScale,
          setRotation,
          setFlipped,
        },
        leftArm: {
          setControl1: setLeftArmControl1,
          setControl2: setLeftArmControl2,
          setHand: setLeftArmHand,
          setRotation: setLeftArmRotation,
        },
        rightArm: {
          setControl1: setRightArmControl1,
          setControl2: setRightArmControl2,
          setHand: setRightArmHand,
          setRotation: setRightArmRotation,
        },
        scramble,
      }),
    [state]
  );

  return { state: stateWithSetters, update: dispatch, spec: state };
};

const Configuration: React.FC<PropsWithChildren> = ({ children }) => {
  const { state, update, spec } = useConfiguration(
    (() => {
      try {
        return window.location.hash
          ? JSON.parse(atob(window.location.hash.replace(/^#?/, '')))
          : {};
      } catch (e) {
        return {};
      }
    })()
  );

  const decodeHash = useCallback(() => {
    try {
      const decoded = JSON.parse(atob(window.location.hash.replace(/^#?/, ''))) as Spec;
      update(decoded);
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    const hashChanged = () => {
      decodeHash();
    };
    window.addEventListener('hashchange', hashChanged);
    return () => window.removeEventListener('hashchange', hashChanged);
  }, []);

  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      return;
    }

    const encoded = btoa(JSON.stringify(spec));
    if (encoded !== window.location.hash.replace(/^#?/, '')) {
      window.location.hash = encoded;
    }
  }, [spec]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default Configuration;
