import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({ user_email: "", new_password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const email = new URLSearchParams(location.search).get("email");
    if (email) {
      setFormData((prev) => ({ ...prev, user_email: email }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.new_password.trim()) {
      setMessage("Password is required");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/user/reset-password/", formData);
      alert("Password reset successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Error resetting password. Please try again.");
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="reset-form">
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={formData.user_email} disabled />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" name="new_password" value={formData.new_password} onChange={handleChange} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
