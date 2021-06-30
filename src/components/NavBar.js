import { GiBottomRight3DArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import React, { useState } from 'react';

/* Navigation wrapper component for Desktop / Mobile  */
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="navbar-wrapper">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <GiBottomRight3DArrow size={28} color="#fff" />
            <span className="logo-text">Refurr!</span>
          </Link>
          <NavDesktop />
          <NavMobile openMenu={(v) => setIsMenuOpen(v)} isOpen={isMenuOpen} />
        </div>
      </div>
    </div>
  );
};
