import React from 'react';
import { Link } from 'react-router-dom';
import './UserHomePage .css';

const UserHomePage = ({ children }) => {
  return (
    <div className="user-homepage">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src='./ServiceBox.jpg' alt="Logo" />
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
          <li className="nav-item">
            <Link to="/edit-profile" className="nav-link">Profile Management</Link>
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