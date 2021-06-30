import PropTypes from 'prop-types';
import React from 'react';

/* Profile selection tab to be shown on Desktop view.  */
export const ProfileTabs = ({ onTabChange }) => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            onClick={() => onTabChange('all')}
            className="btn btn-outline"
          >
            All
          </button>
          <button
            onClick={() => onTabChange('fresher')}
            className="btn btn-outline"
          >
            Fresher
          </button>
          <button
            onClick={() => onTabChange('beginner')}
            className="btn btn-outline"
          >
            Beginner
          </button>
          <button
            onClick={() => onTabChange('intermediate')}
            className="btn btn-outline"
          >
            Intermediate
          </button>
          <button
            onClick={() => onTabChange('senior')}
            className="btn btn-outline"
          >
            Senior
          </button>
        </div>
      </div>
    </div>
  );
};

ProfileTabs.propTypes = {
  onTabChange: PropTypes.func,
};
