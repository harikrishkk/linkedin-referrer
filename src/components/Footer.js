import { FooterContact } from './FooterContact';
import { FooterContainer } from '../wrappers/FooterContainer';
import { FooterInfo } from './FooterInfo';
import { SocialNetworkIcons } from './SocialNetworkIcons';
import React from 'react';

/* Application footer */

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <div className="sm:col-span-2">
          <FooterInfo />
        </div>
        <FooterContact />
        <div>
          <span className="text-base font-bold tracking-wide text-gray-300">
            Social
          </span>
          <SocialNetworkIcons />
          <p className="tracking-wide antialiased mt-4 text-sm text-gray-300">
            Follow insta for javascript tips!
          </p>
        </div>
      </div>
      <div className="copyright-wrapper">
        <p className="copyright-text">Made with ❤️ From Hari</p>
        <ul className="trademark">
          <li>
            <a
              href="/"
              className="tracking-wide antialiased text-sm text-gray-300"
            >
              © Copyright 2021 SimplyJavascript
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};
