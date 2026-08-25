import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the trailing ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach listeners for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Trailing Smooth Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 72 : 46) : 32,
          height: isHovered ? (cursorText ? 72 : 46) : 32,
          backgroundColor: isHovered ? 'rgba(201, 162, 75, 0.12)' : 'rgba(201, 162, 75, 0.04)',
          borderColor: isHovered ? '#DFC07A' : 'rgba(201, 162, 75, 0.45)',
          borderWidth: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] tracking-widest uppercase font-sans font-medium text-gold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Centre Dot / Diamond Sparkle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {isHovered ? (
          /* Diamond Sparkle Glyph on Hover */
          <motion.div
            initial={{ rotate: 0, scale: 0.6 }}
            animate={{ rotate: 45, scale: 1 }}
            className="w-2.5 h-2.5 bg-gold shadow-[0_0_10px_#C9A24B]"
          />
        ) : (
          /* Default Gold Core Dot */
          <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#C9A24B]" />
        )}
      </motion.div>
    </div>
  );
};
