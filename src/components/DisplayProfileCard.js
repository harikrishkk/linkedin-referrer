import { UserProfile } from './UserProfile';
import PropTypes from 'prop-types';
import React from 'react';

/* Shows the profile of the registered candidates */
export const DisplayProfileCard = ({ profiles, filtered, handleShowMore }) => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          {profiles &&
            profiles.length > 0 &&
            profiles.map((user) => (
              <UserProfile key={user.profileId} user={user} />
            ))}
        </div>
      </div>
      {profiles && filtered && profiles.length < filtered.length && (
        <div className="flex justify-center">
          <button onClick={handleShowMore} className="btn btn-block md:w-auto">
            Show More
          </button>
        </div>
      )}
    </>
  );
};

DisplayProfileCard.propTypes = {
  profiles: PropTypes.any,
  filtered: PropTypes.any,
  handleShowMore: PropTypes.func.isRequired,
};
