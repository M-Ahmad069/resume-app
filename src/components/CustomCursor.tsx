'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      if (typeof window === 'undefined') return true;
      return window.matchMedia('(pointer: coarse)').matches || 
             window.innerWidth < 768;
    };

    isMobileRef.current = checkMobile();

    if (isMobileRef.current || !cursorRef.current || !dotRef.current) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let dotX = targetX;
    let dotY = targetY;

    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (dotRef.current) dotRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    const animate = () => {
      // Smooth easing
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      dotX += (targetX - dotX) * 0.6;
      dotY += (targetY - dotY) * 0.6;

      // Direct DOM manipulation for better performance
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isMobileRef.current) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}

