import React from 'react';
import { FaUserEdit, FaLock, FaHistory, FaComment, FaStar, FaTrash, FaSignOutAlt } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md';
import './ProfileManagement.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProfileManagement = ({ children }) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("user/user-logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // If you are using cookies for sessions
      });

      if (response.ok) {
        alert("You have been logged out.");
        // Redirect to login page
        navigate("/login");
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Function to handle account deletion
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      alert("Your account has been deleted.");
      // Add API call to delete the account from backend
    }
  };

  return (
    <>
      {/* <h2 className='profile-title'>Profile Management</h2> */}
      <div className="profile-management-container">
        <div className="profile-options">
          <Link to="/Edit-profile" className="profile-button"><MdManageAccounts className="icon" /> Edit Profile</Link>
          <Link to="/change-password" className="profile-button"><FaLock className="icon" /> Change Password</Link>
          <Link to="/booking-history" className="profile-button"><FaHistory className="icon" /> Booking History</Link>
          <Link to="/complain" className='profile-button'><FaComment className="icon" /> Complain</Link>
          <Link to="/review-rating" className='profile-button'><FaStar className="icon" /> Reviews & Rating</Link>
          <button className="profile-button delete-account" onClick={handleDeleteAccount}><FaTrash className="icon" /> Delete Account</button>
          <button className="profile-button logout" onClick={handleLogout}><FaSignOutAlt className="icon" /> Log Out</button>
        </div>
        <div className='profile-content'>
          {children}
        </div>
      </div>
    </>
  );
};

export default ProfileManagement;
