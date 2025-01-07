import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainContent from "./Pages/MainContent/MainContent";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout><MainContent/></Layout>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
