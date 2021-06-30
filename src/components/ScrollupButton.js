import { BsFileArrowUp } from 'react-icons/bs';
import React from 'react';

/* Scroll to top button to be shown when user scrolls to bottom */
export const ScrollupButton = () => {
  return (
    <span className="flex justify-center">
      <BsFileArrowUp size={28} color="#000" />
    </span>
  );
};
