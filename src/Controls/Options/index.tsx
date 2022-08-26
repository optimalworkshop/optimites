import React, { useCallback, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import ScrambleButton from './ScrambleButton';

const Options: React.FC<{ active: boolean }> = ({ active }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const renderQRCode = useCallback(() => {
    QRCode.toCanvas(canvas.current!, window.location.href);
  }, []);

  useEffect(() => {
    renderQRCode();
    window.addEventListener('hashchange', renderQRCode);
    return () => window.removeEventListener('hashchange', renderQRCode);
  }, [renderQRCode]);

  return (
    <div
      role="tabpanel"
      id="controls__options"
      aria-labelledby="tab--options"
      aria-hidden={!active || undefined}
    >
      <div className="controls__shape">
        <ScrambleButton />
      </div>
      <canvas ref={canvas} width={1000} height={1000} />
    </div>
  );
};

export default Options;
