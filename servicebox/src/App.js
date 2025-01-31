import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import UserLogin from "./Components/UserRegistration/UserLogin";
import UserHomePage from "./Components/UserRegistration/UserHomePage .";
// import Login from "./Components/UserRegistration/Login";
// import ResetPassword from "./Components/UserRegistration/ResetPassword";
// import ContactUs from "./Components/UserRegistration/HomePage/UserNavDetail/ContactUs";
// import ProfileManagement from "./Components/UserRegistration/HomePage/UserNavDetail/ProfileManagement";
import SelectService from "./Components/UserRegistration/HomePage/UserNavDetail/SelectService";
// import SearchService from "./Components/UserRegistration/HomePage/UserNavDetail/SearchService";
// import OtpRequest from "./Components/UserRegistration/HomePage/OtpRequest";
// import OtpVerify from "./Components/UserRegistration/HomePage/OtpVerify";
import ProfileManagement from "./Components/UserRegistration/UserProfileManage/ProfileManagement";
import EditProfile from "./Components/UserRegistration/UserProfileManage/EditProfile";
import ChangePassword from "./Components/UserRegistration/UserProfileManage/ChangePassword";
import BookingHistory from "./Components/UserRegistration/UserProfileManage/BookingHistory";
import UserHomePageContent from "./Components/UserRegistration/HomePage/UserHomePageContent";

const App = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const handleLogin = () => {
    //     setIsAuthenticated(true); // Set the user as logged in
    // };
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<UserLogin/>}/> */}
                {/* <Route  
                    path="/login"
                // element={<Login onLogin={handleLogin} />}
                /> */}
                {/* <Route path="/forgot-password" element={<ResetPassword/>}/> */}
                <Route path="/" element={<UserHomePage><UserHomePageContent/></UserHomePage>} />
                {/* <Route path="/search-service" element={<SearchService />} /> */}
                <Route path="/services" element={<UserHomePage><SelectService /></UserHomePage>} />
                {/* <Route path="/profile-management" element={<ProfileManagement />} /> */}
                {/* <Route path="/contact-us" element={<ContactUs />} /> */}
                {/* <Route path="/otp-request" element={<OtpRequest/>}/> */}
                {/* <Route path="/otp-verify" element={<OtpVerify/>}/> */}
                {/* <Route path="/profile-management" element={<ProfileManagement />} /> */}
                <Route path="/edit-profile" element={<UserHomePage><ProfileManagement ><EditProfile/></ProfileManagement></UserHomePage>}/>
                <Route path="/change-password" element={<UserHomePage><ProfileManagement ><ChangePassword/></ProfileManagement></UserHomePage>} />
                <Route path="/booking-history" element={<UserHomePage><ProfileManagement ><BookingHistory/></ProfileManagement></UserHomePage>} />
            </Routes>
        </Router>
    );
};

export default App;