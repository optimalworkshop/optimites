import { range } from 'lodash-es';
import React, {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import Context from '../../Context';
import { Shapes as BodyShapes } from '../../Mite/Body';

type Position = {
  x: number;
  y: number;
};

const PositionControl: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);

  const {
    body,
    face: { x, setX, y, setY, scale, setScale, rotation, setRotation },
  } = useContext(Context);

  const offset = useRef<Position>({ x: 0, y: 0 });

  const radiusOffset = useRef<number>(0);

  const rotationOffset = useRef<number>(0);

  const eventCoords = useCallback((e: PointerEvent | ReactPointerEvent): Position => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = box.current!.getBoundingClientRect();
    return {
      x: ((clientX - (left + width / 2)) / width) * 1000,
      y: ((clientY - (top + height / 2)) / height) * 1000,
    };
  }, []);

  const drag = useCallback(
    (e: PointerEvent) => {
      const { x, y } = eventCoords(e);
      const m = 500 - 400 * scale - 20;
      setX(Math.max(-m, Math.min(m, x - offset.current.x)));
      setY(Math.max(-m, Math.min(m, y - offset.current.y)));
    },
    [eventCoords, scale]
  );

  const endDrag = useCallback(
    (e: PointerEvent) => {
      window.removeEventListener('pointermove', drag);
    },
    [drag]
  );

  const startDrag = useCallback(
    (e: ReactPointerEvent) => {
      const { x: newX, y: newY } = eventCoords(e);
      offset.current = { x: newX - x, y: newY - y };
      window.addEventListener('pointermove', drag);
      window.addEventListener('pointerup', endDrag, { once: true });
      drag(e.nativeEvent);
    },
    [drag, endDrag, eventCoords, x, y]
  );

  const resize = useCallback(
    (e: PointerEvent) => {
      const { x: rx, y: ry } = eventCoords(e);
      const r = Math.sqrt(Math.pow(rx - x, 2) + Math.pow(ry - y, 2)) - radiusOffset.current;
      setScale(Math.max(0.4, Math.min(0.9, r / 400)));
    },
    [eventCoords, x, y]
  );

  const endResize = useCallback(
    (e: PointerEvent) => {
      window.removeEventListener('pointermove', resize);
    },
    [resize]
  );

  const startResize = useCallback(
    (e: ReactPointerEvent) => {
      const { x: rx, y: ry } = eventCoords(e);
      const r = Math.sqrt(Math.pow(rx - x, 2) + Math.pow(ry - y, 2));
      radiusOffset.current = r - 400 * scale;
      window.addEventListener('pointermove', resize);
      window.addEventListener('pointerup', endResize, { once: true });
      resize(e.nativeEvent);
    },
    [x, y, scale, eventCoords, resize, endResize]
  );

  const rotate = useCallback(
    (e: PointerEvent) => {
      const { x: rx, y: ry } = eventCoords(e);
      const a = Math.atan2(ry - y, rx - x) - rotationOffset.current;
      setRotation(a);
    },
    [eventCoords, x, y]
  );

  const endRotate = useCallback(
    (e: PointerEvent) => {
      window.removeEventListener('pointermove', rotate);
    },
    [rotate]
  );

  const startRotate = useCallback(
    (e: ReactPointerEvent) => {
      const { x: rx, y: ry } = eventCoords(e);
      const a = Math.atan2(ry - y, rx - x);
      rotationOffset.current = a - rotation;
      window.addEventListener('pointermove', rotate);
      window.addEventListener('pointerup', endRotate, { once: true });
      rotate(e.nativeEvent);
    },
    [x, y, rotation, eventCoords, rotate, endRotate]
  );

  return (
    <div className="position-control" ref={box}>
      <svg viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMin slice">
        <path className="position-control__body" d={BodyShapes[body.shape]} />
        <g className="position-control__face" transform={`translate(${x}, ${y}) scale(${scale})`}>
          <g
            transform={`rotate(${(rotation * 180) / Math.PI})`}
            pathLength={1}
            onPointerDown={startDrag}
          >
            <circle cx={0} cy={0} r={400} pathLength={1} onPointerDown={startDrag} />
            <path d="M 0 0v-400" />
          </g>
          <g className="position-control__scale" onPointerDown={startResize} strokeWidth={50}>
            {range(8).map((i) => (
              <path
                key={i}
                d={`M${400 * Math.sin(((i * 2 - 1) * Math.PI) / 8)},${
                  -400 * Math.cos(((i * 2 - 1) * Math.PI) / 8)
                } A400 400 0 0 1 ${400 * Math.sin(((i * 2 + 1) * Math.PI) / 8)},${
                  -400 * Math.cos(((i * 2 + 1) * Math.PI) / 8)
                }`}
              />
            ))}
          </g>
          <g className="position-control__rotate" onPointerDown={startRotate} strokeWidth={100}>
            {range(8).map((i) => (
              <path
                key={i}
                d={`M${475 * Math.sin(((i * 2 - 1) * Math.PI) / 8)},${
                  -475 * Math.cos(((i * 2 - 1) * Math.PI) / 8)
                } A475 475 0 0 1 ${475 * Math.sin(((i * 2 + 1) * Math.PI) / 8)},${
                  -475 * Math.cos(((i * 2 + 1) * Math.PI) / 8)
                }`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PositionControl;
