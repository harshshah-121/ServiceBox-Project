import React, { useState,useEffect} from "react";
import "./UserLogin.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    //firstName: "",
    //lastName: "",
    user_name: "",
    user_email: "",
    user_password: "",
    confirmPassword: "", 
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "User name is required";
    //if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!formData.user_password.trim()) {
      newErrors.user_password = "Password is required";
    } else if (formData.user_password.length < 6) {
      newErrors.user_password = "Password must be at least 6 characters";
    }
    if (formData.user_password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const res = axios.post("http://127.0.0.1:8000/user/register/",formData)
      console.log(res)
      // if(res?.details?.message === "User registered successfully"){
      navigate('/login')
      // }
      // else{
      //   console.log('not able to re')
      // }
      // alert("Sign-Up Successful!");
      console.log(formData);
    }
  };

//   useEffect(()=>{
//     fetch('http://127.0.0.1:8000/user/register/')
//     .then(res=>{
//       return res.json();
//     })
//     .then(data=>{
//       setFormData(data);
//       console.log(data);
//     });
//   },[])

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
          />
          {errors.firstName && <small className="error">{errors.firstName}</small>}
        </div> */}
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Username"
          />
          {errors.user_name && <small className="error">{errors.user_name}</small>}
        </div>
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="already-signed-in">
        <p>Already Signed In? <a href="/login">Click here to log in</a></p>
      </div>
    </div>
  );
};

export default UserLogin;
