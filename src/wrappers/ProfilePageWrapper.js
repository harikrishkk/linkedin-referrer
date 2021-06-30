import React from 'react';
import { DotPattern } from './DotPattern';

/* Wrapper that wraps general utility classes for Profile Page */
export const ProfilePageWrapper = () => {
  return (
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="antialiased inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Recruiters,
        </p>
      </div>
      <h2 className="antialiased max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {' '}
        <DotPattern text="Take" /> a look at the pool for potential matches.
      </h2>
      <p className="antialiased text-base text-gray-700 md:text-lg">
        Get in touch with them directly via their LinkedIn profile.
      </p>
    </div>
  );
};
