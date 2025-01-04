import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserLogin from "./Components/UserRegistration/UserLogin";
import Login from "./Components/UserRegistration/Login";
// import S_Registration from "./Components/Service_Pro/S_Registration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    // <S_Registration/>
  );
};

export default App;
