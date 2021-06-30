import { GiBottomRight3DArrow } from 'react-icons/gi';
import React from 'react';

export const FooterInfo = () => {
  return (
    <>
      <a
        href="/"
        aria-label="Go home"
        title="Company"
        className="inline-flex items-center"
      >
        <GiBottomRight3DArrow color="#fff" size={28} />
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-300 uppercase">
          REFURR
        </span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="purpose-info">
          Is created with the sole purpose of helping job seekers in Canada
        </p>
        <p className="tie-ups-info">
          I neither have any tie ups with recruiters, companies, ads or any
          monetary benefits. No personal information is collected or shared with
          any.
        </p>
      </div>
    </>
  );
};
