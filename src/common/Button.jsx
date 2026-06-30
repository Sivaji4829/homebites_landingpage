import React from 'react';
import { motion } from 'framer-motion';
import googlestore from '../assets/googlestore.webp';
import appstore from '../assets/appstore.webp';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  disabled = false,
  href
}) => {
  const baseStyle = 'relative flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-xl overflow-hidden focus:outline-none';
  
  const sizeStyles = {
    normal: 'px-6 py-3.5 text-sm md:text-base',
    store: 'px-5 py-2.5 text-left border border-white/10 w-[180px] h-[58px]',
  };

  const variants = {
    primary: 'bg-brand-primary text-brand-offwhite hover:bg-brand-primary/95 shadow-premium hover:shadow-premium-hover border border-transparent',
    secondary: 'bg-brand-secondary text-brand-primary hover:bg-brand-secondary/95 shadow-premium hover:shadow-premium-hover border border-transparent',
    accent: 'bg-brand-accent text-brand-light hover:bg-brand-accent/90 shadow-premium hover:shadow-premium-hover border border-transparent',
    outline: 'border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5',
    'outline-light': 'border border-white/30 text-white hover:bg-white/10',
    glass: 'glass-card text-white hover:bg-white/15',
    disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300',
  };

  if (variant === 'playstore' || variant === 'appstore') {
    return (
      <div 
        className={`relative inline-block w-[240px] md:w-[280px] rounded-2xl overflow-hidden select-none opacity-95 cursor-not-allowed transition-all duration-300 hover:scale-105 ${className}`}
      >
        <img 
          src={variant === 'playstore' ? googlestore : appstore} 
          alt={variant === 'playstore' ? 'Google Play Coming Soon' : 'App Store Coming Soon'}
          className="w-full object-contain pointer-events-none"
        />
      </div>
    );
  }

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { onClick, disabled };

  return (
    <motion.div
      whileHover={disabled ? {} : { y: -2, scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className="inline-block"
    >
      <Tag
        className={`${baseStyle} ${sizeStyles.normal} ${disabled ? variants.disabled : variants[variant]} ${className}`}
        {...tagProps}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default Button;
