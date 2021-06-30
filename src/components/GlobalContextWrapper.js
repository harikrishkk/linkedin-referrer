import { HarperDBProvider } from 'use-harperdb';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/auth-context';
import React, { useState, useEffect } from 'react';

let url = process.env.REACT_APP_DB_URL;

/* The Global context wrapper that holds auth state & redirection */
export const GlobalContextWrapper = ({ children }) => {
  const [isSuperUser, setSuperUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('appToken');
    if (isLoggedIn) {
      setSuperUser(true);
    }
  }, []);

  const login = (val, token) => {
    setSuperUser(val);
    if (val) {
      localStorage.setItem('appToken', token);
    }
  };

  const logout = () => {
    setSuperUser(false);
    localStorage.removeItem('appToken');
    history.push('/');
  };

  const authState = {
    isSuperUser,
    loginAsSuperUser: login,
    logout: logout,
  };

  const username = isSuperUser
    ? process.env.REACT_APP_ADMIN
    : process.env.REACT_APP_GUEST;
  const password = isSuperUser
    ? process.env.REACT_APP_ADMIN_PASSWORD
    : process.env.REACT_APP_GUEST_PASSWORD;

  return (
    <AuthContext.Provider value={authState}>
      <HarperDBProvider url={url} user={username} password={password}>
        {children}
      </HarperDBProvider>
    </AuthContext.Provider>
  );
};
