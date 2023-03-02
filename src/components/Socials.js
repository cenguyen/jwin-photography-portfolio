import React from 'react';
// import icons
import { ImTwitter, ImInstagram } from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="http://www.twitter.com">
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com">
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com">
          <ion-icon name="logo-tiktok"></ion-icon>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
