import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import UserLogin from "./Components/UserRegistration/UserLogin";
// import Login from "./Components/UserRegistration/Login";
// import S_Registration from "./Components/Service_Pro/S_Registration";
// import Header from "./Pages/Header/Header";
// import Sidebar from "./Pages/SideBar/SideBar";
import MainContent from "./Pages/MainContent/MainContent";
import Layout from "./Layout/Layout";
// import Footer from "./Pages/Footer/Footer";

const App = () => {
  return (
    <>
    {/* // <Router>
    //   <Routes>
    //     <Route path="/" element={<UserLogin />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
    // <S_Registration/> */}
    {/* <Footer/> */}
     {/* <MainContent/> */}
     {/* <Sidebar/>
     <Header/>  */}
     <Router>
      <Routes>
        {/* <Route path="/" element={<UserLogin />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Layout><MainContent/></Layout>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
