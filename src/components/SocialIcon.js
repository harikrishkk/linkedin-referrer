import PropTypes from 'prop-types';
import React from 'react';

/* Individual social icon link */
export const SocialIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 transition-colors duration-300 hover:text-gray-300"
    >
      {children}
    </a>
  );
};
SocialIcon.propTypes = {
  link: PropTypes.string,
};
