import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OtpVerify.css";

const OtpVerify = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !otp.trim()) {
      setErrorMessage("Both email and OTP are required.");
      return;
    }

    // Log the email and OTP to console
    console.log("Email:", email);
    console.log("OTP:", otp);

    setLoading(true);
    setErrorMessage(""); 
    setSuccessMessage(""); 

    try {
      const response = await axios.post("http://127.0.0.1:8000/user/verify-otp/", { user_email: email, otp: otp });
      console.log("Response from server:", response.data);  // Log response from backend
        navigate('/login')
    } catch (error) {
      console.error("Error verifying OTP:", error);
      if (error.response) {
        console.error("Response from server:", error.response.data);
      }
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="otp-verify-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit} className="otp-verify-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>OTP</label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Verifying OTP..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
