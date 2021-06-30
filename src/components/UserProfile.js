import { BiUserPin } from 'react-icons/bi';
import { FiChevronRight } from 'react-icons/fi';
import { useHarperDB } from 'use-harperdb';
import PropTypes from 'prop-types';
import React from 'react';

/* Display User's Profile  */
export const UserProfile = ({ user }) => {
  const [experienceData] = useHarperDB({
    query: { operation: 'sql', sql: 'select * from candidates.experience' },
  });

  const getExperienceText = () => {
    const currentUser =
      experienceData &&
      experienceData.find((exp) => exp.experienceValue === user.expertise);
    return currentUser.experience;
  };

  return (
    <div className="user-profile-wrapper">
      <div className="relative p-5 bg-white rounded-sm">
        <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
          <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full lg:mb-0">
            <BiUserPin size={36} />
          </div>
          <h6 className="antialiased font-semibold leading-5">
            {' '}
            {user.username}
          </h6>
        </div>
        <p className="antialiased mb-2 text-sm text-gray-900">
          Experience: {getExperienceText()}
        </p>
        <div className="flex justify-start my-6">
          {user.skillsets.map((skill, i) => (
            <div key={i} className="badge mr-2">
              {skill}
            </div>
          ))}
        </div>

        <a
          href={user.profileURL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-link p-0 text-sm font-semibold cursor-pointer"
        >
          <span className="antialiased mr-2 text-gray-900">Visit Profile</span>{' '}
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    expertise: PropTypes.string,
    profileURL: PropTypes.string,
    skillsets: PropTypes.array,
    username: PropTypes.string,
  }),
};
