/* Utiltity method for submitting new profile to database. */
import axios from 'axios';
export const submitProfile = (username, profileURL, expertise, skillsets) => {
  var data = JSON.stringify({
    operation: 'insert',
    schema: 'candidates',
    table: 'profiles',
    records: [
      {
        username,
        profileURL,
        expertise,
        skillsets,
      },
    ],
  });
  var config = {
    method: 'post',
    url: process.env.REACT_APP_DB_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.REACT_APP_AUTH_TOKEN}`,
    },
    data: data,
  };
  return axios(config);
};
