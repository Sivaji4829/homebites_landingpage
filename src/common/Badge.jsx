import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-300';
  
  const variants = {
    primary: 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20',
    secondary: 'bg-brand-secondary/15 text-brand-primary border border-brand-secondary/35',
    accent: 'bg-brand-accent/15 text-brand-accent border border-brand-accent/35',
    glass: 'bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-glass',
    'glass-orange': 'bg-brand-accent/20 text-brand-accent backdrop-blur-md border border-brand-accent/30 shadow-sm',
    'glass-green': 'bg-brand-secondary/20 text-brand-secondary backdrop-blur-md border border-brand-secondary/30 shadow-sm',
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
