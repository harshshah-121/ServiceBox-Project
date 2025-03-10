import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import './UserHomePage .css';
import mylogo from "../images/logo.png";


const UserHomePage = ({ children }) => {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await axios.get("user/profile-picture/", {
          withCredentials: true,
        });

        if (response.data.profile_pic) {
          setProfilePic(`${response.data.profile_pic}`);
        }
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    fetchProfilePicture();
  }, []);
  return (
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
