import { BannerContainer } from '../wrappers/BannerContainer';
import { BannerDescription } from '../wrappers/BannerDescription';
import { BannerHeader } from '../wrappers/BannerHeader';
import { Link } from 'react-router-dom';
import { SkewText } from '../wrappers/SkewText';
import AuthContext from '../contexts/auth-context';
import React, { useContext } from 'react';

/* The main banner for the Home page of the app */
export const Banner = () => {
  const ctx = useContext(AuthContext);
  return (
    <BannerContainer>
      <BannerHeader />
      <div className="banner-wrapper">
        <h2 className="banner-header">
          <BannerDescription>The </BannerDescription> easiest way to land a job
          is when you
          <SkewText>refurr</SkewText>
        </h2>
        <p className="banner-desc">
          Your resume stands a better chance of reaching a recruiter / hiring
          manager when the resume is referred by your friend. Anyone in my
          network, who are in Canada & is looking for web development jobs, do
          give it a shot!
        </p>
      </div>

      {/* Link displayed for superUser only */}
      <div>
        {ctx.isSuperUser && (
          <Link to="/register" className="register-btn">
            Register
          </Link>
        )}
      </div>
    </BannerContainer>
  );
};
