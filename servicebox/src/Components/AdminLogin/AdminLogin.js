import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';  // Import axios
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  const handleValidation = () => {
    let valid = true;
    let tempErrors = { username: "", password: "" };

    if (username.trim().length < 4) {
      tempErrors.username = "Username must be at least 4 characters long.";
      valid = false;
    }
    if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        setLoading(true); 

        const response = await axios.post("http://127.0.0.1:8000/api/login/", {
          username: username,
          password: password,
        });

        if (response.data.success) {
          alert("Login Successful!");
          navigate("/admin-dashboard");
        } else {
          alert("Invalid username or password.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Error during login. Please try again.");
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className={errors.username ? "input-error" : ""}
            />
            {errors.username && <small className="error">{errors.username}</small>}
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
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
