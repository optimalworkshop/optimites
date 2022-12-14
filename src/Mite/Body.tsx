import React, { CSSProperties, useContext, useEffect, useRef } from 'react';
import anime from 'animejs';
import { Color, Shape } from '../types';
import Face from './Face';
import Legs from './Legs';
import Arm from './Arm';
import Context from '../Context';

type Offset = { x: number; y: number };

export const Shapes: { [key in Shape]: string } = {
  [Shape.Egg]:
    'M330,134C330,176 325,213 315,245C304,287 285,321 261,348C232,380 194,403 152,418C106,433 53,440 -1,439C-46,438 -89,434 -128,425C-175,413 -216,394 -249,365C-274,342 -294,314 -308,278C-322,241 -330,197 -330,143C-331,86 -320,11 -300,-66C-289,-108 -275,-152 -259,-193C-239,-245 -215,-294 -187,-334C-143,-398 -91,-440 -33,-439C19,-438 72,-409 121,-362C152,-332 181,-296 207,-255C239,-205 267,-148 288,-90C315,-13 331,64 330,134',
  [Shape.Trapezoid]:
    'M401,-16C413,32 447,161 455,199C458,211 458,226 450,238C440,252 425,269 394,269C345,269 47,269 -7,269C-52,268 -357,267 -397,266C-414,266 -439,257 -448,240C-463,215 -456,198 -448,185C-427,151 -392,95 -360,43C-330,-4 -253,-127 -213,-192C-208,-201 -202,-208 -189,-214C-183,-217 -175,-219 -166,-221C-89,-230 -17,-236 49,-244C102,-250 250,-265 283,-269C300,-270 313,-266 323,-260C331,-255 342,-249 348,-228C370,-142 382,-90 401,-16Z',
  [Shape.Triangle]:
    'M318,104C344,147 406,242 427,283C432,293 431,308 423,320C413,335 392,341 361,341C312,341 26,339 -28,339C-73,338 -364,339 -404,338C-420,338 -431,334 -441,318C-455,292 -436,269 -429,255C-409,219 -379,172 -345,114C-317,65 -305,46 -265,-18C-259,-27 -205,-109 -187,-135C-144,-196 -77,-305 -72,-313C-57,-334 -20,-396 1,-396C21,-396 54,-333 63,-317C75,-295 101,-244 140,-178C191,-93 245,-9 258,8C287,53 296,68 318,104Z',
  [Shape.Circle]:
    'M354,-15C356,21 350,73 341,105C329,146 298,209 275,237C247,270 190,315 149,333C118,347 56,371 -0,372C-45,372 -89,366 -127,352C-162,339 -227,291 -256,258C-282,229 -306,188 -320,153C-335,116 -353,50 -354,10C-355,-17 -355,-77 -341,-131C-330,-173 -313,-212 -284,-245C-258,-275 -227,-302 -184,-325C-139,-350 -47,-371 -5,-372C46,-373 116,-363 159,-346C201,-329 237,-303 265,-271C291,-241 318,-185 332,-148C348,-108 352,-68 354,-15Z',
  [Shape.Rectangle]:
    'M431,72C432,122 440,185 440,226C440,238 443,237 437,250C434,255 432,255 424,256C375,256 -20,253 -75,252C-120,251 -249,256 -397,258C-413,258 -430,262 -437,256C-444,250 -440,222 -439,207C-439,167 -438,20 -437,-40C-436,-105 -439,-153 -440,-219C-441,-230 -443,-240 -436,-246C-429,-253 -413,-249 -403,-249C-327,-250 -72,-248 51,-249C214,-251 360,-255 393,-259C410,-260 415,-260 425,-253C433,-248 430,-234 430,-224C431,-106 429,-54 431,72Z',
  [Shape.Square]:
    'M383,110C384,184 392,277 392,337C392,354 395,353 390,373C387,380 385,381 378,381C335,381 -16,373 -65,372C-105,370 -220,376 -351,378C-366,379 -381,383 -387,375C-393,367 -389,325 -389,302C-389,243 -390,27 -389,-62C-389,-159 -388,-246 -393,-345C-394,-353 -393,-363 -390,-367C-385,-373 -380,-373 -367,-373C-303,-374 -66,-367 43,-368C188,-370 318,-375 347,-380C362,-382 368,-382 375,-371C380,-365 380,-343 381,-328C382,-153 381,-78 383,110Z',
};

const ArmOffsets: { [key in Shape]: [Offset, Offset] } = {
  [Shape.Egg]: [
    { x: -325, y: 200 },
    { x: 325, y: 200 },
  ],
  [Shape.Trapezoid]: [
    { x: -325, y: 200 },
    { x: 455, y: 200 },
  ],
  [Shape.Triangle]: [
    { x: -325, y: 200 },
    { x: 375, y: 195 },
  ],
  [Shape.Circle]: [
    { x: -250, y: 200 },
    { x: 300, y: 200 },
  ],
  [Shape.Rectangle]: [
    { x: -325, y: 200 },
    { x: 432, y: 100 },
  ],
  [Shape.Square]: [
    { x: -325, y: 200 },
    { x: 386, y: 200 },
  ],
};

const Body: React.FC<{ shape: Shape; color: Color; gap: number; offset: number }> = ({
  shape,
  color,
  gap,
  offset,
}) => {
  const shapeWas = useRef<Shape>(shape);

  const outlineRef = useRef<SVGPathElement>(null);

  const fillRef = useRef<SVGPathElement>(null);

  const { leftArm, rightArm } = useContext(Context);

  useEffect(() => {
    anime({
      targets: [outlineRef.current, fillRef.current],
      d: Shapes[shape],
      easing: 'spring(1, 90, 7, 0)',
    });
  }, [shape]);

  const [rightArmOffset, leftArmOffset] = ArmOffsets[shape];

  return (
    <g className="body">
      <Legs>
        <path
          ref={fillRef}
          className="body__fill"
          d={Shapes[shapeWas.current]}
          pathLength={1}
          style={{ fill: `var(--${color})` }}
        />
        <path
          ref={outlineRef}
          className="body__outline outline"
          d={Shapes[shapeWas.current]}
          pathLength={1}
          style={{
            strokeDasharray: `${1 - gap / 100} ${gap / 100}`,
            strokeDashoffset: offset / 100,
            opacity: gap < 100 ? 1 : 0,
          }}
        />
        <Face />
      </Legs>
      <Arm {...leftArmOffset} {...leftArm} />
      <Arm {...rightArmOffset} {...rightArm} />
    </g>
  );
};

export default Body;
