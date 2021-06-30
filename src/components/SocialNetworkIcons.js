import { SocialIcon } from './SocialIcon';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import React from 'react';

/* All social network icon components  */
export const SocialNetworkIcons = () => {
  return (
    <div className="flex items-center mt-1 space-x-3">
      <SocialIcon link="https://twitter.com/harikrishkk">
        <AiFillTwitterCircle size={28} />
      </SocialIcon>
      <SocialIcon link="https://www.instagram.com/simplyjavascript/">
        <AiFillInstagram size={28} />
      </SocialIcon>
      <SocialIcon link="https://github.com/harikrishkk">
        <AiFillGithub size={28} />
      </SocialIcon>
      <SocialIcon link="https://www.linkedin.com/in/harikrishkk/">
        <AiFillLinkedin size={28} />
      </SocialIcon>
    </div>
  );
};
