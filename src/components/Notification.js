import React from 'react';

/* Profile Registration notification component  */
export const Notification = (props) => {
  const { notification } = props;
  const classes = notification
    ? 'mt-4 alert alert-success'
    : 'mt-4 alert alert-error';
  return (
    <div className={classes}>
      <div className="flex-1">
        <label>
          {notification
            ? 'Registration Success!'
            : 'Oops, somthing went wrong! Try again..'}
          ..
        </label>
      </div>
    </div>
  );
};
