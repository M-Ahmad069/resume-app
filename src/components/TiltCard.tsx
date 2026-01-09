'use client';

import { ReactNode, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  options?: {
    reverse?: boolean;
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: 'x' | 'y' | null;
    reset?: boolean;
    easing?: string;
  };
}

export default function TiltCard({ 
  children, 
  className = '',
  options = {}
}: TiltCardProps) {
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null as 'x' | 'y' | null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    ...options,
  };

  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${defaultOptions.max}deg`, `-${defaultOptions.max}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${defaultOptions.max}deg`, `${defaultOptions.max}deg`]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{
        perspective: defaultOptions.perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: defaultOptions.axis === 'y' ? 0 : rotateX,
          rotateY: defaultOptions.axis === 'x' ? 0 : rotateY,
          scale: isHovered ? defaultOptions.scale : 1,
          transformStyle: 'preserve-3d',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

