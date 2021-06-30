import PropTypes from 'prop-types';
import React from 'react';

/* The profile selection select component to be shown in Mobile  */
export const ProfileSelectMobile = ({ value, onSelectChange }) => {
  return (
    <div className="block md:hidden">
      <div className="flex justify-center ">
        <select
          value={value}
          onChange={(e) => onSelectChange(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="all" defaultValue="all">
            All
          </option>
          <option value="fresher">Fresher</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="senior">Senior</option>
        </select>
      </div>
    </div>
  );
};

ProfileSelectMobile.propTypes = {
  value: PropTypes.string,
  onSelectChange: PropTypes.func,
};
