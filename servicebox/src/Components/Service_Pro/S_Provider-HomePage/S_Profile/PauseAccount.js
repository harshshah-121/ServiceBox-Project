import React from "react";
import "./PauseAccount.css";

const PauseAccount = () => {
  const handlePauseClick = () => {
    alert("Your account has been temporarily paused.");
  };

  return (
    <div className="pause-account-container">
      <h2>Pause Account</h2>
      <p>Temporarily deactivate your account.</p>
      <button className="pause-btn" onClick={handlePauseClick}>
        Pause Account
      </button>
    </div>
  );
};

export default PauseAccount;
