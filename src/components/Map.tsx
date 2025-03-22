
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MapComponent = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!globeRef.current || loading) return;
    
    // Initialize globe visualization (in a real app, this would use Mapbox, Three.js, or another mapping library)
    const initGlobe = () => {
      const globe = globeRef.current;
      if (!globe) return;
      
      // Add rotation animation to the globe
      let angle = 0;
      const rotate = () => {
        angle += 0.1;
        if (globe) {
          globe.style.transform = `rotateY(${angle}deg)`;
        }
        requestAnimationFrame(rotate);
      };
      
      rotate();
    };
    
    initGlobe();
  }, [loading]);

  return (
    <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden glass-card">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div 
            ref={globeRef} 
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-blue-500 transition-all duration-[2000ms] shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            style={{
              background: 'radial-gradient(circle at center, #2563eb 0%, #1e40af 60%, #1e3a8a 100%)',
            }}
          >
            {/* Simulated continents */}
            <div className="absolute w-[60%] h-[35%] top-[15%] left-[20%] bg-green-700/50 rounded-full"></div>
            <div className="absolute w-[40%] h-[25%] top-[60%] left-[30%] bg-green-700/50 rounded-full"></div>
            <div className="absolute w-[20%] h-[15%] top-[35%] left-[10%] bg-green-700/50 rounded-full"></div>
            <div className="absolute w-[30%] h-[30%] top-[25%] left-[60%] bg-green-700/50 rounded-full"></div>
            
            {/* Active locations */}
            <motion.div 
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{ top: '30%', left: '40%' }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            
            <motion.div 
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{ top: '45%', left: '70%' }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
            
            <motion.div 
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{ top: '65%', left: '50%' }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      )}
      
      <div className="absolute bottom-4 left-4 z-10">
        <div className="glass px-4 py-2 rounded-lg">
          <p className="text-sm font-medium">Placeholder for interactive map</p>
          <p className="text-xs text-muted-foreground">
            In production, this would use Mapbox GL or Google Maps
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
