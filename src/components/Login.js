import React, { useState, useContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../contexts/auth-context';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../hooks/use-http';
import { ErrorBar } from './ErrorBar';
import LoginImage from '../assets/images/loginImage.jpeg';
import { CardToggle } from './CardToggle';

/* Login component  */
const Login = () => {
  const [checked, setChecked] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Custom hook for API calls.
  const { token, error, loading } = useHttp(isSending, checked);
  const ctx = useContext(AuthContext);
  const history = useHistory();

  // If login fails, redirect to home in 3 seconds.
  useEffect(() => {
    let timerId;
    if (error) {
      timerId = setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [error, history]);

  // decode token and redirect
  useEffect(() => {
    setIsSending(false);
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.super_user) {
        ctx.loginAsSuperUser(true, token);
        history.push('/');
      } else {
        ctx.loginAsSuperUser(false, null);
        history.push('/');
      }
    }
  }, [token, ctx, history]);

  const login = () => {
    setIsSending(true);
  };

  if (!loading && error) {
    return (
      <ErrorBar message="Login failed! Please try later..Redirecting in 3 seconds." />
    );
  }

  return (
    <section className="login-wrapper">
      <div className="login-banner">
        <img src={LoginImage} alt="login" className="login-image" />
      </div>
      <div className="login-mode-wrapper">
        <div className="w-full py-4 lg:py-6 lg:h-100">
          <h1 className="login-header">Login as</h1>
          <CardToggle>
            <div>
              <input
                type="checkbox"
                onChange={() => setChecked((c) => !c)}
                checked={checked}
                className="toggle"
              />
              <span className="toggle-mark"></span>
            </div>
          </CardToggle>
          <div className="mt-32 md:mt-4 flex justify-center">
            <button onClick={login} className="btn btn-block md:w-auto">
              Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
