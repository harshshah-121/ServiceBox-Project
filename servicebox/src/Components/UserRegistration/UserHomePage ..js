import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import './UserHomePage .css';
import mylogo from "../images/logo.png";
import axios from 'axios';

const UserHomePage = ({ children }) => {
  return (
<<<<<<<<< Temporary merge branch 1
    <div className="user-homepage">
       <nav className="navbar">
      <div className="navbar-logo">
        <img src={mylogo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item profile-icon">
          <Link to="/edit-profile" className="nav-link">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="profile-pic" />
              ) : (
                <FaUserCircle size={24} />
              )}
          </Link>
        </li>
      </ul>
    </nav>
=========
    <div className="userhomepage_classname">
      <nav className="userhomepage_classname-navbar">
        <div className="userhomepage_classname-logo">
          <img src={mylogo} alt="Logo" />
        </div>
        <ul className="userhomepage_classname-nav-links">
          <li className="userhomepage_classname-nav-item">
            <Link to="/user-services" className="userhomepage_classname-nav-link">Services</Link>
          </li>
          <li className="userhomepage_classname-nav-item">
            <Link to="/user-contact-us" className="userhomepage_classname-nav-link">Contact Us</Link>
          </li>
          <li className="userhomepage_classname-nav-item">
            <Link to="/user-about-us" className="userhomepage_classname-nav-link">About Us</Link>
          </li>
          <li className="userhomepage_classname-nav-item userhomepage_classname-profile-icon">
            <Link to="/user-edit-profile" className="userhomepage_classname-nav-link">
              <FaUserCircle size={24} />
            </Link>
          </li>
        </ul>
      </nav>
>>>>>>>>> Temporary merge branch 2

      <div>
        {children}
      </div>
    </div>
  );
};

export default UserHomePage;
