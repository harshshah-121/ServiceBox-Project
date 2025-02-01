import React from "react";
import './Navbar.css'; // Assuming you will have the CSS in a separate file

const Navbar = ({ children }) => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">ServiceBox</a>
      </div>
      <ul className="navbar-nav">
        {children}
      </ul>
    </nav></>
  );
};

export default Navbar;
