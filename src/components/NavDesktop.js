import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth-context';
import React, { useContext } from 'react';

/* Navigation component for Desktop */
export const NavDesktop = () => {
  const ctx = useContext(AuthContext);
  return (
    <ul className="navdesktop-wrapper">
      <li>
        <Link
          to="/profiles"
          aria-label="Profiles"
          title="Profiles"
          className="nav-item"
        >
          Profiles
        </Link>
      </li>
      {!ctx.isSuperUser && (
        <li>
          <Link
            to="/login"
            aria-label="Login"
            title="Login"
            className="nav-item"
          >
            Login
          </Link>
        </li>
      )}

      {ctx.isSuperUser && (
        <>
          <li>
            <Link
              to="/register"
              aria-label="Register"
              title="Register"
              className="nav-item"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              aria-label="Upload"
              title="Upload"
              className="nav-item"
            >
              Upload
            </Link>
          </li>
          <li>
            <button onClick={() => ctx.logout()} className="nav-item">
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
};
