import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaHashtag, FaMusic, FaCompass, FaUsers, FaShare, FaVideo } from 'react-icons/fa';

const Sidebar = ({ avatar, idName, nickName, music, content }) => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sidebar">
      
      <ul className="sidebar-menu">
        <li className={`sidebar-menu-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          <FaHome className="sidebar-menu-item-icon" />
          <span>Home</span>
        </li>
        <li className={`sidebar-menu-item ${activeTab === 'discover' ? 'active' : ''}`} onClick={() => handleTabClick('discover')}>
          <FaHashtag className="sidebar-menu-item-icon" />
          <span>Discover</span>
        </li>
        <li className={`sidebar-menu-item ${activeTab === 'music' ? 'active' : ''}`} onClick={() => handleTabClick('livestream')}>
          <FaVideo className="sidebar-menu-item-icon"/>
          <span>Music</span>
        </li>
        <li className={`sidebar-menu-item ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => handleTabClick('notifications')}>
          <FaCompass className="sidebar-menu-item-icon"/>
          <span>Expore#</span>
        </li>
        <li className={`sidebar-menu-item ${activeTab === 'friends' ? 'active' : ''}`} onClick={() => handleTabClick('friends')}>
          <FaUsers />
          <span>Friends</span>
        </li>
      </ul>
      <ul>
        
      </ul>
      <button className="sidebar-share-button">
        <FaShare />
        <span>Share</span>
      </button>
      
    </div>
  );
};

export default Sidebar;
