import React from 'react';

/* Wrapper that wraps general utility classes for Banner */
export const BannerContainer = ({ children }) => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col sm:text-center sm:mb-0">{children}</div>
      </div>
    </div>
  );
};
