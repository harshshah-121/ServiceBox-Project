import React from "react";
import "./Complaint.css";

const Complaint = () => {
  const complaintData = [
    {
      complaintId: "CMP001",
      customerName: "John Doe",
      issue: "Service delay",
      status: "Pending",
      submittedDate: "2025-01-10",
    },
    {
      complaintId: "CMP002",
      customerName: "Jane Smith",
      issue: "Poor service quality",
      status: "Resolved",
      submittedDate: "2025-01-09",
    },
    {
      complaintId: "CMP003",
      customerName: "Michael Brown",
      issue: "Overcharged",
      status: "In Progress",
      submittedDate: "2025-01-08",
    },
  ];

  return (
    <div className="complaint">
      <h2>Complaint Management</h2>
      <p>
        Complaints are logged by customers when they encounter issues with the service. 
        The system tracks the following data for each complaint:
      </p>
      <ul>
        <li><strong>Complaint ID:</strong> A unique identifier for the complaint.</li>
        <li><strong>Customer Name:</strong> The name of the customer filing the complaint.</li>
        <li><strong>Issue:</strong> A brief description of the issue.</li>
        <li><strong>Status:</strong> The current status of the complaint (e.g., Pending, In Progress, Resolved).</li>
        <li><strong>Submitted Date:</strong> The date when the complaint was submitted.</li>
      </ul>
      <h3 className="complaintheading">Sample Complaints</h3>
      <table className="complaint-table">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Customer Name</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Submitted Date</th>
          </tr>
        </thead>
        <tbody>
          {complaintData.map((complaint) => (
            <tr key={complaint.complaintId}>
              <td>{complaint.complaintId}</td>
              <td>{complaint.customerName}</td>
              <td>{complaint.issue}</td>
              <td>{complaint.status}</td>
              <td>{complaint.submittedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Complaint;
