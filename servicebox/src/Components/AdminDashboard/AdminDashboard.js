import React, { useState } from "react";
import "./AdminDashboard.css";


function AdminDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleValidation = () => {
    let valid = true;
    let tempErrors = { email: "", password: "" };

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      tempErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Login Successful!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <small className="error">{errors.password}</small>
            )}
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password">Show Password</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
