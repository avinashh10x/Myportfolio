// // CustomCursor.jsx
// import React, { useEffect, useRef } from 'react';

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const mouse = { x: 0, y: 0 };
//   const previousMouse = { x: 0, y: 0 };
//   const circle = { x: 0, y: 0 };
//   let currentScale = 0;
//   let currentAngle = 0;
//   const speed = 0.08; // Reduced speed factor for a "lazy" effect

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const handleMouseEnter = () => {
//       // Increase cursor size on hover
//       if (cursorRef.current) {
//         cursorRef.current.style.transform += ' scale(1.5)';
//       }
//     };

//     const handleMouseLeave = () => {
//       // Reset cursor size when not hovering
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(1.5)', '');
//       }
//     };

//     // Add event listeners for hover elements
//     const hoverElements = document.querySelectorAll('.hover-effect');
//     hoverElements.forEach((element) => {
//       element.addEventListener('mouseenter', handleMouseEnter);
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });

//     window.addEventListener('mousemove', handleMouseMove);

//     const tick = () => {
//       // MOVE
//       circle.x += (mouse.x - circle.x) * speed;
//       circle.y += (mouse.y - circle.y) * speed;
//       const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

//       // SQUEEZE
//       const deltaMouseX = mouse.x - previousMouse.x;
//       const deltaMouseY = mouse.y - previousMouse.y;
//       previousMouse.x = mouse.x;
//       previousMouse.y = mouse.y;
//       const mouseVelocity = Math.min(
//         Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
//         150
//       );
//       const scaleValue = (mouseVelocity / 150) * 0.5;
//       currentScale += (scaleValue - currentScale) * speed;
//       const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

//       // ROTATE
//       const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
//       if (mouseVelocity > 20) {
//         currentAngle = angle;
//       }
//       const rotateTransform = `rotate(${currentAngle}deg)`;

//       // Apply transformations
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(-50%, -50%) ${translateTransform} ${rotateTransform} ${scaleTransform}`;
//       }

//       window.requestAnimationFrame(tick);
//     };

//     tick(); // Start the animation

//     return () => {
//       // Clean up event listeners
//       window.removeEventListener('mousemove', handleMouseMove);
//       hoverElements.forEach((element) => {
//         element.removeEventListener('mouseenter', handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="custom-cursor"
//       style={{
//         position: 'fixed',
//         height: '40px',
//         width: '40px',
//         border: '1px solid white',
//         borderRadius: '50%',
//         pointerEvents: 'none',
//         // backgroundColor:'white',
//         top: '0',
//         left: '0',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 9999,
//         transition: 'transform 0.1s ease-out', // Smooth transition for scaling
//       }}
//     />
//   );
// };

// export default CustomCursor;
