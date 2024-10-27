// Cursor.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust width as per your requirements
    };

    // Add event listeners for resize and initial check
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', mouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [isMobile]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: 'spring', stiffness: 900, damping: 100 },
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  // If on mobile, don't render the cursor
  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={cursorVariant}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 40,
        width: 40,
        borderRadius: '50%',
        backgroundColor: 'black',
        pointerEvents: 'none',
        zIndex: 2,
        opacity:.5,
      }}
    />
  );
}

export default Cursor;
