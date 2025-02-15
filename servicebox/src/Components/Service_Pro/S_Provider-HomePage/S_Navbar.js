import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./S_Navbar.css";

const S_Navbar = ({ children }) => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">ServiceProvider</div>
                <ul className="nav-links">
                    <li><Link to="/update-invoice">Update Invoice</Link></li>
                    <li><Link to="/my-business">My Business</Link></li>
                    <li><Link to="/managing-availability">Managing & Availability</Link></li>
                    <li><Link to="/listing-jobs">Listing Jobs</Link></li>
                    <li><Link to="/service-requests">Service Requests</Link></li>
                    <li className="nav-item profile-icon">
                        <Link to="/edit-profile" className="nav-link">
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

export default S_Navbar;
