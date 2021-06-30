import { AiOutlineClose } from 'react-icons/ai';
import { GiBottomRight3DArrow, GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth-context';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

/* Navigation component for Mobile  */
export const NavMobile = ({ openMenu, isOpen }) => {
  const ctx = useContext(AuthContext);
  return (
    <div className="lg:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        className="navmobile-hamburger"
        onClick={() => openMenu(true)}
      >
        <GiHamburgerMenu size={28} color="#fff" />
      </button>
      {isOpen && (
        <div className="navmob-wrapper z-50">
          <div className="p-5 bg-gray-900 border rounded shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link
                  to="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <GiBottomRight3DArrow size={28} color="#fff" />
                  <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                    Refurr!
                  </span>
                </Link>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="mob-close-btn"
                  onClick={() => openMenu(false)}
                >
                  <AiOutlineClose size={28} />
                </button>
              </div>
            </div>
            <nav>
              {/* General links available for all */}
              <ul className="space-y-4">
                {!ctx.isSuperUser && (
                  <li>
                    <Link
                      to="/login"
                      aria-label="Login"
                      title="Login"
                      onClick={() => openMenu(false)}
                      className="nav-item"
                    >
                      Login
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to="/profiles"
                    aria-label="Profiles"
                    title="Profiles"
                    onClick={() => openMenu(false)}
                    className="nav-item"
                  >
                    Profiles
                  </Link>
                </li>
                {/* Show these only for superusers */}
                {ctx.isSuperUser && (
                  <>
                    <li>
                      <Link
                        to="/register"
                        aria-label="Register"
                        title="Register"
                        onClick={() => openMenu(false)}
                        className="nav-item"
                      >
                        Register
                      </Link>
                    </li>
                    <li onClick={() => openMenu(false)}>
                      <button onClick={() => ctx.logout()} className="nav-item">
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

NavMobile.propTypes = {
  openMenu: PropTypes.func,
  isOpen: PropTypes.bool,
};
