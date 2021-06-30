import PropTypes from 'prop-types';
import React from 'react';

/* The generic error message alert bar  */

export const ErrorBar = ({ message }) => {
  return (
    <div className="mt-4 alert alert-error">
      <div className="flex-1">
        <label>{message}</label>
      </div>
    </div>
  );
};

ErrorBar.propTypes = {
  message: PropTypes.string,
};
