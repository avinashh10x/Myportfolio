import React from 'react';
import classNames from 'classnames'; // Import classnames library

export const Meteors = ({ number = 5, className }) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={classNames(
            "relative animate-meteor-effect w-2 h-2 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:w-4 before:h-1 before:bg-gradient-to-r before:from-slate-500 before:to-transparent before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 before:top-full before:-z-10",
            className
          )}
          style={{
            top: Math.random() * 100 + "vh", // Random starting position above the viewport
            left: Math.random() * 100 + "vw", // Random horizontal position
            animationDelay: Math.random() * (2 - 0.5) + 0.5 + "s", // Control delay between meteors
            animationDuration: Math.random() * (10 - 5) + 5 + "s", // Control speed of meteors
          }}
        ></span>
      ))}
    </>
  );
};
