import React, { useState } from "react";
import "./WorkArea.css";

const WorkArea = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = () => {
    if (!location.trim()) {
      setError("Service Location is required.");
    } else {
      setError("");
      alert(`Service Location Updated: ${location}`);
    }
  };

  return (
    <div className="work-area-container">
      <h2>Work Area</h2>
      <p>Update your service location.</p>
      <input
        type="text"
        placeholder="Service Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={error ? "input-error" : ""}
      />
      {error && <p className="error-text">{error}</p>}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default WorkArea;
