import React from "react";
import "./Feedback.css";

const Feedback = () => {
  const feedbackData = [
    {
      feedbackId: "FB001",
      customerName: "John Doe",
      feedback: "Great service, very prompt!",
      rating: 5,
      submittedDate: "2025-01-10",
    },
    {
      feedbackId: "FB002",
      customerName: "Jane Smith",
      feedback: "Good service but could improve communication.",
      rating: 4,
      submittedDate: "2025-01-09",
    },
    {
      feedbackId: "FB003",
      customerName: "Michael Brown",
      feedback: "Average experience, long wait time.",
      rating: 3,
      submittedDate: "2025-01-08",
    },
  ];

  return (
    <div className="feedback">
      <h2>Feedback Management</h2>
      <p>
        Feedback is collected from customers to understand their experiences and improve services. 
        The system tracks the following data for each feedback:
      </p>
      <ul>
        <li><strong>Feedback ID:</strong> A unique identifier for the feedback.</li>
        <li><strong>Customer Name:</strong> The name of the customer providing feedback.</li>
        <li><strong>Feedback:</strong> The customer's comments or suggestions.</li>
        <li><strong>Rating:</strong> A numerical rating (e.g., 1-5).</li>
        <li><strong>Submitted Date:</strong> The date when the feedback was provided.</li>
      </ul>
      <h3 className="feedback-heading">Sample Feedback</h3>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Feedback ID</th>
            <th>Customer Name</th>
            <th>Feedback</th>
            <th>Rating</th>
            <th>Submitted Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.feedbackId}>
              <td>{feedback.feedbackId}</td>
              <td>{feedback.customerName}</td>
              <td>{feedback.feedback}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.submittedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
