import React from 'react';

/* Wrapper that wraps general utility classes for Banner's description */
export const BannerDescription = ({ children }) => {
  return (
    <span className="relative inline-block">
      <svg
        viewBox="0 0 52 24"
        fill="currentColor"
        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
      >
        <defs>
          <pattern
            id="e77df901-b9d7-4b9b-822e-16b2d410795b"
            x="0"
            y="0"
            width=".135"
            height=".30"
          >
            <circle cx="1" cy="1" r=".7" />
          </pattern>
        </defs>
        <rect
          fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
          width="52"
          height="24"
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
};
