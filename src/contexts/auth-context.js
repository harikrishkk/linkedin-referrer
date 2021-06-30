import React from 'react';

/* Context that holds the authentication piece of the app  */
const AuthContext = React.createContext({
  isSuperUser: Boolean,
  loginAsSuperUser: () => {},
  logout: () => {},
});

export default AuthContext;
