import React from 'react';
import PropTypes from 'prop-types';

/* Three dot pattern for the app */
export const DotPattern = ({ text }) => {
  return (
    <span className="relative inline-block">
      <svg
        viewBox="0 0 52 24"
        fill="currentColor"
        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
      >
        <defs>
          <pattern
            id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
            x="0"
            y="0"
            width=".135"
            height=".30"
          >
            <circle cx="1" cy="1" r=".7" />
          </pattern>
        </defs>
        <rect
          fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
          width="52"
          height="24"
        />
      </svg>
      <span className="antialiased relative">{text}</span>
    </span>
  );
};

DotPattern.propTypes = {
  text: PropTypes.string,
};
