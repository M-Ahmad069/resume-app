'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  intensity?: number;
}

export default function FloatingElement({ 
  children, 
  className = '', 
  duration = 3,
  delay = 0,
  intensity = 10
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}



