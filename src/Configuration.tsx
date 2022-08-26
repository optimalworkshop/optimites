import {
  PropsWithChildren,
  useReducer,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { merge } from 'lodash-es';
import Context, { ContextShape } from './Context';
import {
  BackgroundColor,
  Color,
  EyebrowShape,
  EyeShape,
  MouthShape,
  NoseShape,
  Shape,
  Spec,
} from './types';

type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object ? Subset<K[attr]> : K[attr];
};

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
      }),
    [state]
  );

  return { state: stateWithSetters, update: dispatch, spec: state };
};

const Configuration: React.FC<PropsWithChildren> = ({ children }) => {
  const { state, update, spec } = useConfiguration(
    window.location.hash ? JSON.parse(atob(window.location.hash.replace(/^#?/, ''))) : {}
  );

  const decodeHash = useCallback(() => {
    const decoded = JSON.parse(atob(window.location.hash.replace(/^#?/, ''))) as Spec;
    update(decoded);
  }, []);

  useEffect(() => {
    const hashChanged = () => {
      decodeHash();
    };
    decodeHash();
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
