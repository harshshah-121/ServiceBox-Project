import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserLogin from "./Components/UserRegistration/UserLogin";
import UserHomePage from "./Components/UserRegistration/UserHomePage .";
import Login from "./Components/UserRegistration/Login";
import ContactUs from "./Components/UserRegistration/HomePage/UserNavDetail/ContactUs";
import ProfileManagement from "./Components/UserRegistration/HomePage/UserNavDetail/ProfileManagement";
import SelectService from "./Components/UserRegistration/HomePage/UserNavDetail/SelectService";
import SearchService from "./Components/UserRegistration/HomePage/UserNavDetail/SearchService";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true); // Set the user as logged in
    };
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserLogin/>}/>
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route path="/home-page" element={<UserHomePage />} />
                <Route path="/search-service" element={<SearchService />} />
                <Route path="/select-service" element={<SelectService />} />
                <Route path="/profile-management" element={<ProfileManagement />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;