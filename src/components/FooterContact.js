import React from 'react';

/* Contact section at the footer */
export const FooterContact = () => {
  return (
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-300">
        Contacts
      </p>
      <div className="flex">
        <p className="mr-1 text-gray-300">Phone:</p>
        <a
          href="tel:+14164510500"
          aria-label="Our phone"
          title="Our phone"
          className="footer-link"
        >
          +1 (416) - 123- 4567
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-300">Email:</p>
        <a
          href="mailto:info@simplyjavascript.com"
          aria-label="Our email"
          title="Our email"
          className="footer-link"
        >
          simplyjavascript@gmail.com
        </a>
      </div>
    </div>
  );
};
