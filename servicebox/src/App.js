import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Service from "./Components/Service_Pro/Service";
import S_Navbar from "./Components/Service_Pro/S_Provider-HomePage/S_Navbar";
import EditProfile from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/EditProfile";
import AboutMe from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/AboutMe";
import WorkArea from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/WorkArea";
import ChangePassword from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/ChangePassword";
import PauseAccount from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/PauseAccount";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<Service/>}></Route> */}
                <Route path='/' element={<S_Navbar/>}></Route>
                <Route path='/edit-profile' element={<S_Navbar><EditProfile/></S_Navbar>}></Route>
                <Route path='/about-me' element={<S_Navbar><AboutMe/></S_Navbar>}></Route>
                <Route path='/work-area' element={<WorkArea/>}></Route>
                <Route path='/change-password' element={<ChangePassword/>}></Route>
                <Route path='/pause-account' element={<PauseAccount/>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
