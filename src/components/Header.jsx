import React from 'react';
import './Header.css';
import { FaSearch, FaUpload, FaUserCircle, FaSearchMinus, FaFacebookMessenger, FaBell } from 'react-icons/fa';


const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1920px-TikTok_logo.svg.png?20200415104610" alt="" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button><FaSearchMinus /></button>
      </div>
      <div className="actions">
        <button className="upload"> + UP LOAD
        </button>
        <button className="message">
          <FaFacebookMessenger />
        </button>
        <button className="noti">
          <FaBell />
        </button>
        <button className="profile">
          <FaUserCircle className="user-circle"></FaUserCircle>
        </button>
      </div>
    </header>
  );
};

export default Header;
