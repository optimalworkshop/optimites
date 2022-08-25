import React, { ComponentPropsWithoutRef, useCallback, useEffect, useMemo, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

type Coordinates = {
  x: number;
  y: number;
};

type Point = {
  current: Coordinates;
  origin: Coordinates;
  noiseOffset: Coordinates;
};

type Range = [number, number];

const scale = (n: number, from: Range, to: Range): number =>
  ((n - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0];

const createPoints = (n: number = 6, radius: number = 400): Point[] =>
  new Array(n - 1).fill(0).map((_, i) => {
    const theta = (i * (Math.PI * 2)) / n + Math.PI;
    const x = Math.cos(theta) * radius;
    const y = Math.sin(theta) * radius;

    return {
      current: { x, y },
      origin: { x, y },
      noiseOffset: { x: Math.random() * 1000, y: Math.random() * 1000 },
    };
  });

const opposedLine = (a: Coordinates, b: Coordinates): { length: number; angle: number } => {
  const lengthX = b.x - a.x;
  const lengthY = b.y - a.y;

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const controlPoint = (
  current: Coordinates,
  previous: Coordinates,
  next: Coordinates,
  reverse?: boolean
): Coordinates => {
  const smoothing = 0.2;
  const o = opposedLine(previous, next);
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  return {
    x: current.x + Math.cos(angle) * length,
    y: current.y + Math.sin(angle) * length,
  };
};

const smooth = (points: Coordinates[]): string => {
  const n = points.length;
  const curves = points.map((point, i) => {
    const cp1 = controlPoint(points[(i + n - 1) % n], points[(i + n - 2) % n], point);
    const cp2 = controlPoint(point, points[(i + n - 1) % n], points[(i + 1) % n], true);
    return `C${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${point.x},${point.y}`;
  });
  return `M${points[n - 1].x},${points[n - 1].y} ${curves.join('')}`;
};

interface BlobProps extends ComponentPropsWithoutRef<'path'> {
  radius?: number;
}

const Blob: React.FC<ComponentPropsWithoutRef<'path'>> = ({ radius = 400, ...props }) => {
  const blob = useRef<SVGPathElement>(null);

  const points = useRef(createPoints(6, +radius));

  const simplex = useMemo(() => createNoise2D(), []);

  const noiseStep = useRef(0.0005);

  const noise = useCallback(
    (x: number, y: number): number => {
      return simplex(x, y);
    },
    [simplex]
  );

  useEffect(() => {
    let frame: ReturnType<typeof requestAnimationFrame>;

    const animate = () => {
      points.current.forEach((point) => {
        const { noiseOffset, origin } = point;
        const nX = noise(noiseOffset.x, noiseOffset.x);
        const nY = noise(noiseOffset.y, noiseOffset.y);
        const x = scale(nX, [-1, 1], [point.origin.x - 100, point.origin.x + 100]);
        const y = scale(nY, [-1, 1], [point.origin.y - 100, point.origin.y + 100]);

        point.current = { x, y };

        point.noiseOffset.x += noiseStep.current;
        point.noiseOffset.y += noiseStep.current;
      });

      blob.current!.setAttribute('d', smooth(points.current.map((point) => point.current)));

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  return <path ref={blob} pathLength={1} {...props} />;
};

export default Blob;
