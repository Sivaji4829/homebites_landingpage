import React from 'react';

const Container = ({ children, className = '', size = 'large' }) => {
  const sizes = {
    small: 'max-w-4xl',
    medium: 'max-w-6xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`w-full mx-auto px-6 md:px-12 lg:px-16 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
