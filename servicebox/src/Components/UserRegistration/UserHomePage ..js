import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import './UserHomePage .css';
import mylogo from "../images/logo.png";

const UserHomePage = ({ children }) => {
  return (
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

      <div>
        {children}
      </div>
    </div>
  );
};

export default UserHomePage;
