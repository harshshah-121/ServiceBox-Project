import React, { useState } from 'react';
import './ChangePassword.css';
import { Toast } from 'bootstrap';
import axios from 'axios';


const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("user/change-password/", {
        current_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message||"Failed To Update");
      } 
      alert("Password updated successfully!");
    } catch (error) {
      console.log("Error: Unable to connect to the server.",error);
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="change-password-form">
        <label>
          Current Password:
          <input 
            type="password" 
            value={currentPassword} 
            onChange={(e) => setCurrentPassword(e.target.value)} 
            required 
          />
        </label>
        <label>
          New Password:
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required 
          />
        </label>
        <label>
          Confirm Password:
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit" className="submit-button">Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
