import { FiChevronRight } from 'react-icons/fi';
import React from 'react';

/* Individual feature component with chevron & message  */
export const Feature = ({ message }) => {
  return (
    <li className="flex">
      <span className="mr-1">
        <FiChevronRight />
      </span>
      <span className="antialiased text-sm"> {message} </span>
    </li>
  );
};
