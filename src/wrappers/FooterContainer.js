import React from 'react';

/* Wrapper that wraps general utility classes for Footer */
export const FooterContainer = ({ children }) => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {children}
      </div>
    </div>
  );
};
