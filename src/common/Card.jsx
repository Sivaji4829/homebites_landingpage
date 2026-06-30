import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hoverEffect = true,
  delay = 0 
}) => {
  const baseStyle = 'rounded-2xl p-6 md:p-8 transition-all duration-300 overflow-hidden relative';
  
  const variants = {
    default: 'bg-white border border-brand-primary/5 shadow-premium',
    offwhite: 'bg-brand-offwhite border border-brand-primary/5 shadow-premium',
    glass: 'glass-card text-white shadow-xl',
    'glass-light': 'glass-card-light text-brand-dark shadow-lg',
    dark: 'bg-brand-primary text-brand-offwhite border border-white/5 shadow-2xl',
  };

  const hoverVariants = hoverEffect ? {
    hover: {
      y: -8,
      boxShadow: variant === 'glass' 
        ? '0 25px 50px -12px rgba(11, 77, 59, 0.4)' 
        : '0 20px 40px -15px rgba(11, 77, 59, 0.15)',
      borderColor: 'rgba(130, 195, 65, 0.3)',
    }
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={hoverEffect ? 'hover' : undefined}
      variants={hoverVariants}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
