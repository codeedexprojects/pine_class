import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

// VantaGlobe Component
const VantaGlobe = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Function to load script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Load Three.js and Vanta Globe
    const loadScripts = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.globe.min.js');
        setScriptsLoaded(true);
      } catch (error) {
        console.error('Error loading Vanta scripts:', error);
      }
    };

    loadScripts();
  }, []);

  useEffect(() => {
    if (scriptsLoaded && window.VANTA && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b82f6,        // Primary blue
        color2: 0x1d4ed8,       // Secondary darker blue
        backgroundColor: 0xf8fafc,  // Light background
        size: 1.0
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [scriptsLoaded]);

  return (
    <div ref={vantaRef} className="absolute inset-0 w-full h-full">
      {children}
    </div>
  );
};

// Main Hero Section Component
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      <VantaGlobe>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            Become a job-ready IT Pro in{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              30 days
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 min-w-[180px] justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
              Talk to an advisor
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
            
            <button className="group bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 min-w-[180px] justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
              Start learning
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </VantaGlobe>
    </section>
  );
}