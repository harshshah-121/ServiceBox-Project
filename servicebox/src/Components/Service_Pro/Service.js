import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Service.css";

const Service = () => {
  const [formData, setFormData] = useState({
    address: "",
    gender: "",
    status: "",
    aadharCard: "",
    electricityBill: "",
    Policeclearancecertificate: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData object to send files properly
    const formDataToSend = new FormData();
    formDataToSend.append("address", formData.address);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("aadharCard", formData.aadharCard);
    formDataToSend.append("electricityBill", formData.electricityBill);
    formDataToSend.append("Policeclearancecertificate", formData.Policeclearancecertificate);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/service-provider/", { 
        method: "POST",
        body: formDataToSend, 
      });
  
      if (response.ok) {
        alert("Form submitted successfully!");
        console.log("Form Data:", formData);
        navigate("/s-login"); // Redirect after success
      } else {
        alert("Failed to submit form");
        console.error("Error:", await response.json());
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };
  

  return (
    <div className="form-container">
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

export default Service;
