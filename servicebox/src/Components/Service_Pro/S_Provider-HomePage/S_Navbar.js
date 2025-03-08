import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./S_Navbar.css";

const S_Navbar = ({ children }) => {
    console.log("S_Navbar is rendering...");  // Debugging line

    return (
        <div>
            <nav className="service-navbar">
                <div className="service-logo">ServiceProvider</div>
                <ul className="service-nav-links">
                    <li><a href="/update-invoice">Update Invoice</a></li>
                    <li><a href="/my-business">My Business</a></li>
                    <li><a href="/managing-availability">Managing & Availability</a></li>
                    <li><a href="/listing-jobs">Listing Jobs</a></li>
                    <li><a href="/service-requests">Service Requests</a></li>
                    <li className="service-nav-item service-profile-icon">
                        <a href="/s-edit_profile" className="service-nav-link">
                            <FaUserCircle size={24} />
                        </a>
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
