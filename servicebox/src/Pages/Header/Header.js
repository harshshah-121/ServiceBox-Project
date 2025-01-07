import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="admin-header">
      {/* Left Section - Logo */}
      <div className="header-left">
        <div className="logo">
          <img
            src="/ServiceBox.jpg"
            alt="Logo"
            className="logo-img"
          />
          <span className="logo-text">Service Box</span>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      <div className="header-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search here..."
        />
      </div>

      {/* Right Section - Icons and Profile */}
      <div className="header-right">
        <img
          src="/UserLogo.png"
          alt="User Profile"
          className="profile-img"
        />
      </div>
    </header>
  );
};

export default Header;
