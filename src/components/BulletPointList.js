import { Feature } from './Feature';
import PropTypes from 'prop-types';
import React from 'react';

/* Bullet points to show the features / messages  */
export const BulletPointList = ({ data }) => {
  return (
    <div className="bullet-list-wrapper">
      <ul className="space-y-3">
        {data.length > 0 &&
          data
            .slice(0, 3)
            .map((m) => <Feature key={m.authorId} message={m.message} />)}
      </ul>
      <ul className="space-y-3">
        {data.length > 0 &&
          data
            .slice(3)
            .map((m) => <Feature key={m.authorId} message={m.message} />)}
      </ul>
    </div>
  );
};

BulletPointList.propTypes = {
  data: PropTypes.any,
};
