import React from 'react';

/* The wrapper that hold the toggle checkbox between Recruiter mode & Candidate mode. */
export const CardToggle = ({ children }) => {
  return (
    <div className="p-6 card bordered bg-gray-100">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="text-base label-text mr-2 uppercase">Recruiter</span>
          {children}
          <span className="text-base label-text ml-2 uppercase">Candidate</span>
        </label>
      </div>
    </div>
  );
};
