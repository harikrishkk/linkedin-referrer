import './App.css';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Loader } from './components/Loader';
import { Nav } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ScrollupButton } from './components/ScrollupButton';

import AuthContext from './contexts/auth-context';
import React, { useContext, Suspense } from 'react';
import ScrollToTop from 'react-scroll-to-top';

// Lazy loading routes
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./components/Login'));
const Profiles = React.lazy(() => import('./pages/Profiles'));
const Uploads = React.lazy(() => import('./pages/Uploads'));

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <ScrollToTop smooth component={<ScrollupButton />} />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {ctx.isSuperUser && (
              <Route path="/register">
                <Register />
              </Route>
            )}
            <Route path="/profiles">
              <Profiles />
            </Route>
            <Route path="/upload">
              <Uploads />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
