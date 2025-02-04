import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OtpRequest.css";

const OtpRequest = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Email is required.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/user/send-otp/", { user_email: email });
      if (response.data.message) {
        setSuccessMessage(response.data.message);
        setTimeout(() => {
          // 🔥 Add email and type=forgot as query parameters
          navigate(`/otp-verify?type=forgot&email=${encodeURIComponent(email)}`);
        }, 2000);
      } else {
        setErrorMessage(response.data.error || "An error occurred while sending OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-request-container">
      <h2>Request OTP</h2>
      <form onSubmit={handleSubmit} className="otp-request-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpRequest;
