import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.webp';

const BackgroundEffects = ({ variant = 'hero' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {variant === 'hero' ? (
        <>
          {/* Premium leaf background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          
          {/* Vignette overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#06261E]/40 via-transparent to-[#06261E]/70" />
          
          {/* Subtle slow-pulse green/orange glow spheres */}
          <motion.div 
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.3, 0.45, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-secondary/5 blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.35, 0.2] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-accent/5 blur-[140px]"
          />
        </>
      ) : (
        <>
          {/* Light Background Glows */}
          <div className="absolute top-[20%] left-[-20%] w-[50%] h-[50%] rounded-full bg-brand-secondary/3 blur-[130px] opacity-50" />
          <div className="absolute top-[60%] right-[-20%] w-[50%] h-[50%] rounded-full bg-brand-accent/3 blur-[130px] opacity-50" />
        </>
      )}
    </div>
  );
};

export default BackgroundEffects;
