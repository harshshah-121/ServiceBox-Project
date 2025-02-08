import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    new_password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    if (email) {
      setFormData((prev) => ({ ...prev, user_email: email }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.new_password.trim()) {
      setErrors({ new_password: "Password is required" });
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/user/reset-password/", formData);
      alert("Password reset successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Error resetting password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="reset-form">
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="user_email" value={formData.user_email} disabled />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" name="new_password" value={formData.new_password} onChange={handleChange} placeholder="Enter new password" required />
        </div>
        <button type="submit" className="reset-button" disabled={loading}>{loading ? "Resetting..." : "Reset Password"}</button>
      </form>
    </div>
  );
};

export default ResetPassword;