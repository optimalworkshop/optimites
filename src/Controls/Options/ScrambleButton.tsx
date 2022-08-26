import React, { useContext } from 'react';
import Context from '../../Context';

const ScrambleButton: React.FC = () => {
  const { scramble } = useContext(Context);

  return (
    <button className="scramble-button" aria-label="Scramble" onClick={scramble}>
      <svg viewBox="-500 -500 1000 1000">
        <path d="M-330,-260l60,540l340,140l310,-190l70,-480l-370,-110l-410,100ZM-250,-210l300,100l310,-100M60,330l-10,-370" />
        <path d="M110,-246c-6,21 -18,35 -55,36c-36,0 -48,-22 -47,-35c1,-22 10,-41 53,-43c43,-2 55,21 49,42ZM150,189c-19,5 -27,34 -28,58c-1,23 22,52 43,47c20,-4 30,-36 28,-59c-1,-23 -13,-55 -43,-46ZM238,31c-25,8 -32,33 -32,60c0,27 23,44 40,43c16,-0 32,-20 30,-57c-1,-37 -21,-52 -38,-47ZM331,-102c-27,0 -37,37 -38,57c-0,20 10,47 37,44c26,-3 39,-33 38,-56c-1,-23 -20,-44 -38,-44ZM-220,160c-0,27 6,67 37,75c30,7 38,-27 37,-56c-0,-28 -7,-64 -35,-68c-27,-3 -39,27 -39,49ZM-66,-36c-38,-6 -50,26 -50,62c0,35 16,50 43,55c26,4 41,-23 41,-53c-0,-30 -13,-60 -34,-64Z" />
      </svg>
    </button>
  );
};

export default ScrambleButton;
