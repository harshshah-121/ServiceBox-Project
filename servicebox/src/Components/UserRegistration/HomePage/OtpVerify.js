import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./OtpVerify.css";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const type = searchParams.get("type"); // "register" or "forgot"

  useEffect(() => {
    if (!email) {
      setErrorMessage("Email is missing. Please request OTP again.");
    }
  }, [email]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setErrorMessage("OTP is required.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/user/verify-otp/", {
        user_email: email,
        otp: otp,
      });

      console.log("OTP Verification Successful:", response.data);
      alert("OTP verified successfully!");

      // Redirect based on the type
      if (type === "register") {
        navigate("/login"); // First-time login, redirect to login page
      } else if (type === "forgot") {
        navigate(`/reset-password?email=${encodeURIComponent(email)}`); // Redirect to Reset Password page
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMessage("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-verify-container">
      <h2>Verify OTP</h2>
      {email ? <p>Verifying for: <strong>{email}</strong></p> : null}
      <form onSubmit={handleSubmit} className="otp-verify-form">
        <div className="form-group">
          <label>OTP:</label>
          <input type="text" name="otp" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" required />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="submit-button" disabled={loading}>{loading ? "Verifying..." : "Verify OTP"}</button>
      </form>
    </div>
  );
};

export default OtpVerify;
