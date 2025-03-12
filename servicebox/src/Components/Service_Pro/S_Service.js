import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./S_Service.css";

const S_Service = () => {
  const [formData, setFormData] = useState({
    address: "",
    gender: "",
    status: "",
    aadharCard: "",
    electricityBill: "",
    Policeclearancecertificate: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("service_provider/main_register/", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        alert("Registration Successful!");
        setFormData({
          address: "",
          gender: "",
          status: "",
          aadharCard: "",
          electricityBill: "",
          Policeclearancecertificate:"",
        });
        navigate("/s-login");
      })
      .catch((error) => console.log("Registration error:", error));

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  return (
    <div className="service-form-container">
      <h2>Service Provider Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="In Active">In Active</option>
          </select>
        </label>

        <label>
          Aadhar Card (Photo Upload):
          <input type="file" name="aadharCard" accept="image/*" onChange={handleFileChange} required />
        </label>

        <label>
          Electricity Bill (Photo Upload):
          <input type="file" name="electricityBill" accept="image/*" onChange={handleFileChange} required />
        </label>

        <label>
          Police Clearance Certificate (Photo Upload):
          <input type="file" name="Policeclearancecertificate" accept="image/*" onChange={handleFileChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default S_Service;