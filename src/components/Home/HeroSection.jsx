import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VantaGlobe = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          if (src.includes('three.min.js') && window.THREE) {
            resolve();
            return;
          }
          if (src.includes('vanta.globe.min.js') && window.VANTA) {
            resolve();
            return;
          }
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.async = false; 
        script.onload = () => {
          console.log(`Loaded: ${src}`);
          resolve();
        };
        script.onerror = (error) => {
          console.error(`Failed to load: ${src}`, error);
          reject(`Failed to load ${src}`);
        };
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
        
        await new Promise(resolve => setTimeout(resolve, 100));
        
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.globe.min.js');
        
        if (!window.THREE) {
          throw new Error('Three.js not loaded properly');
        }
        if (!window.VANTA) {
          throw new Error('Vanta.js not loaded properly');
        }
        
        console.log('All scripts loaded successfully');
        setScriptsLoaded(true);
      } catch (error) {
        console.error('Error loading Vanta scripts:', error);
        setError(error.toString());
      }
    };

    loadScripts();
  }, []);

  useEffect(() => {
    if (scriptsLoaded && window.VANTA && window.THREE && vantaRef.current && !vantaEffect.current) {
      try {
        console.log('Initializing Vanta Globe...');
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9cf796,       
          color2: 0x6f89f7,       
          backgroundColor: 0xf8fafc,  
          size: 1.0,
          THREE: window.THREE 
        });
        console.log('Vanta Globe initialized successfully');
      } catch (error) {
        console.error('Error initializing Vanta Globe:', error);
        setError('Failed to initialize Vanta Globe');
      }
    }

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
          console.log('Vanta Globe destroyed');
        } catch (error) {
          console.error('Error destroying Vanta Globe:', error);
        }
      }
    };
  }, [scriptsLoaded]);

  const fallbackStyle = {
    background: error ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' : 'transparent'
  };

  return (
    <div ref={vantaRef} className="absolute inset-0 w-full h-full" style={fallbackStyle}>
      {error && (
        <div className="absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm z-20">
          Vanta Globe Error: {error}
        </div>
      )}
      {children}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      <VantaGlobe>
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight"  data-aos="fade-down">
            Become a job-ready IT Pro in{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              30 days
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up"
            data-aos-delay="300">
            <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 min-w-[180px] justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
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