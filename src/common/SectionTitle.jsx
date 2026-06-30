import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

const SectionTitle = ({
  title,
  subtitle,
  badgeText,
  align = 'center',
  light = false,
  className = ''
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  // Function to highlight parts of the title
  // e.g. "Food for Every *Lifestyle*" or "From *Kitchen* to Your Doorstep"
  const renderTitle = (rawTitle) => {
    const parts = rawTitle.split('*');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span 
            key={index} 
            className={light ? 'text-brand-secondary font-bold' : 'text-brand-primary font-bold'}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignStyles[align]} ${className}`}>
      {badgeText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge variant={light ? 'glass-green' : 'secondary'}>{badgeText}</Badge>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 max-w-3xl ${
          light ? 'text-white' : 'text-brand-primary'
        }`}
      >
        {renderTitle(title)}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-lg max-w-2xl font-sans ${
            light ? 'text-brand-offwhite/80' : 'text-brand-dark/70'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
