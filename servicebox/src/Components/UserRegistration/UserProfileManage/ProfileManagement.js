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
        credentials: "include", // If using cookies for authentication
      });

      if (response.ok) {
        alert("You have been logged out.");
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
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");

    if (confirmDelete) {
      try {
        const response = await fetch("user/delete-account/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // If authentication is required
          body: JSON.stringify({ confirm: true }),
        });

        const result = await response.json();

        if (response.ok) {
          alert("Your account has been successfully deleted.");
          navigate("/"); // Redirecting to register page after deletion
        } else {
          alert(result.message || "Failed to delete account. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="profile-management-container">
        <div className="profile-options">
          <Link to="/edit-profile" className="profile-button"><MdManageAccounts className="icon" /> Edit Profile</Link>
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
