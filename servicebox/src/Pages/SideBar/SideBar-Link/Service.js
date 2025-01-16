import React from "react";
import "./Service.css";

const Service = () => {
  const services = [
    { id: 1, name: "Plumbing", description: "Fix leaks, install pipes, and more." },
    { id: 2, name: "Electrical Repair", description: "Repair electrical issues and wiring." },
    { id: 3, name: "AC Repair and Maintenance", description: "Fix and maintain air conditioning units." },
    { id: 4, name: "Carpentry", description: "Custom furniture and wood repair." },
    { id: 5, name: "Painting Services", description: "Interior and exterior painting solutions." },
  ];

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <table className="service-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Service;
