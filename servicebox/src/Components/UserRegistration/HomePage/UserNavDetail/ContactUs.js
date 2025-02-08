import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css"; // Make sure to style it properly

const ContactUs = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    
    // Basic Validation
    if (!formData.full_name || !formData.email || !formData.phone_number || !formData.message) {
      setResponseMessage("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/contact-us/",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setResponseMessage("Thank you for contacting us! We will get back to you soon.");
        setFormData({ full_name: "", email: "", phone_number: "", message: "" });
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      {responseMessage && <p className="response-message">{responseMessage}</p>}

      <form onSubmit={handleSubmit} className="contact-us-form">
        <label>Full Name:</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
