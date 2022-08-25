import React, { ReactNode } from 'react';
import './controls.scss';

type TabProps = {
  id: string;
  label: string;
  selected: boolean;
  children: ReactNode;
  onClick: (id: string) => void;
};

const Tab: React.FC<TabProps> = ({ id, label, selected, children, onClick }) => (
  <button
    id={`tab--${id}`}
    role="tab"
    aria-selected={selected || undefined}
    aria-controls={`controls__${id}`}
    aria-label={label}
    onClick={() => onClick(id)}
  >
    <svg viewBox="-500 -500 1000 1000">{children}</svg>
  </button>
);

export default Tab;
