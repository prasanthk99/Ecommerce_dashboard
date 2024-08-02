import React from 'react';

import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Profile from "../images/profile.png"

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">
        <FontAwesomeIcon icon={faEnvelope} className='icons'/>
        <FontAwesomeIcon icon={faGear} className='icons'/>
        <FontAwesomeIcon icon={faBell} className='icons'/>
        <img src={Profile} alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
