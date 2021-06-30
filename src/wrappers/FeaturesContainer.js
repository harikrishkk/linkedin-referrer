import React from 'react';

/* Wrapper that wraps general utility classes for Features */
export const FeaturesContainer = ({ children }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">{children}</div>
    </div>
  );
};
