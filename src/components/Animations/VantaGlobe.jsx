import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/src/vanta.globe';

const VantaGlobe = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3a83f1,
        backgroundColor: 0xf8fafc
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="w-full h-full">
      {children}
    </div>
  );
};

export default VantaGlobe;