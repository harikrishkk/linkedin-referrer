import React from 'react';

/* The Skew Text component that shows the highlights in skew  */
export const SkewText = ({ children }) => {
  return (
    <span className="relative inline-block px-2 ml-3">
      <div className="absolute inset-0 transform -skew-x-12 bg-black" />
      <span className="relative text-white tracking-wider">{children} </span>
    </span>
  );
};
