import React from 'react';
import './ProfileManagement.css'; // Ensure the CSS file exists

const ProfileManagement = ({children}) => {
  // Function to handle logout
  const handleLogout = () => {
    alert("You have been logged out.");
    // You can also clear user session data here
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
    <h2 className='profile-title'>Profile Management</h2>
    <div className="profile-management-container">  
      <div className="profile-options">
        <a href="/Edit-profile" className="profile-button">Edit Profile</a>
        <a href="/change-password" className="profile-button">Change Password</a>
        <a href="/booking-history" className="profile-button">Booking History</a>
        <a href="/complain" className='profile-button'>Complain</a>
        <a href="/review-rating" className='profile-button'>Reviews & Rating</a>
        <button className="profile-button delete-account" onClick={handleDeleteAccount}>Delete Account</button>
        <button className="profile-button logout" onClick={handleLogout}>Log Out</button>
      </div>
      <div className='profile-content'>
        {children}
      </div>
    </div>
    </>
  );
};

export default ProfileManagement;
