import React, { useState } from "react";
import './S_ChangePassword.css';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!currentPassword) {
      formErrors.currentPassword = "Current password is required";
    }

    if (!newPassword) {
      formErrors.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      formErrors.newPassword = "Password must be at least 6 characters";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setErrors({});
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={errors.currentPassword ? "input-error" : ""}
          />
          {errors.currentPassword && (
            <span className="error-text">{errors.currentPassword}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={errors.newPassword ? "input-error" : ""}
          />
          {errors.newPassword && (
            <span className="error-text">{errors.newPassword}</span>
          )}
        </div>

        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
