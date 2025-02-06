import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!formData.user_password.trim()) {
      newErrors.user_password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await axios.post("user/user-login/", formData);
      navigate("/home-page"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Error during login:", error);

      // Check if the error message indicates email is not verified
      if (error.response?.data?.errors?.non_field_errors?.[0] === "Email is not verified.") {
        console.log("Email is not verified, redirecting to OTP verification page...");
        navigate("/otp-request?type=register"); // Redirect to OTP verification for registration
      }

      setMessage(
        error.response?.data?.errors?.user_email ||
        error.response?.data?.errors?.non_field_errors?.[0] ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-container">
      <h2>Log In</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.user_email && <small className="error">{errors.user_email}</small>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.user_password && <small className="error">{errors.user_password}</small>}
        </div>
        <div className="forgot-password">
          <span onClick={() => navigate("/otp-request?type=forgot")} className="clickable-text">
            Forgot Password?
          </span>
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
