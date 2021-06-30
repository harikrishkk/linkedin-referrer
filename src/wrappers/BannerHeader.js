import React from 'react';
import { Link } from 'react-router-dom';
import { FaSuperpowers } from 'react-icons/fa';

/* Design Header for Banner  */
export const BannerHeader = () => {
  return (
    <Link to="/" className="mb-6 sm:mx-auto">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
        <FaSuperpowers size={28} />
      </div>
    </Link>
  );
};
