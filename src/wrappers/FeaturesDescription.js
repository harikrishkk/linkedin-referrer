import React from 'react';
import { SkewText } from './SkewText';

/* Wrapper that wraps general utility classes for Feature's description */
export const FeaturesDescription = () => {
  return (
    <div className="max-w-xl mb-6">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Just point &nbsp;
        <br className="hidden md:block" />
        to your <SkewText> LinkedIn Profile. </SkewText>
      </h2>

      <p className="antialiased text-base text-gray-700 md:text-lg">
        Add yourself to the list and the same gets posted in my LinkedIn
        profile. Any recruiter can access the profile and who knows, the one
        they were looking for might be you.
      </p>
    </div>
  );
};
