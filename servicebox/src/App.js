import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainContent from "./Pages/MainContent/MainContent";
import Layout from "./Layout/Layout";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import ManageUser from "./Pages/SideBar/SideBar-Link/ManageUser";
import ServiceProvider from "./Pages/SideBar/SideBar-Link/ServiceProvider";
import Service from "./Pages/SideBar/SideBar-Link/Service";
import ServiceRequest from "./Pages/SideBar/SideBar-Link/ServiceRequest";
import Complaint from "./Pages/SideBar/SideBar-Link/Complaint";
import Feedback from "./Pages/SideBar/SideBar-Link/Feedback";
import UserLogin from "./Components/UserRegistration/UserLogin";
import UserHomePage from "./Components/UserRegistration/UserHomePage .";
import Login from "./Components/UserRegistration/Login";
import ContactUs from "./Components/UserRegistration/HomePage/UserNavDetail/ContactUs";
// import ProfileManagement from "./Components/UserRegistration/HomePage/UserNavDetail/ProfileManagement";
import SelectService from "./Components/UserRegistration/HomePage/UserNavDetail/SelectService";
// import SearchService from "./Components/UserRegistration/HomePage/UserNavDetail/SearchService";
import ResetPassword from "./Components/UserRegistration/ResetPassword";
import OtpRequest from "./Components/UserRegistration/HomePage/OtpRequest";
import OtpVerify from "./Components/UserRegistration/HomePage/OtpVerify";
import ProfileManagement from "./Components/UserRegistration/UserProfileManage/ProfileManagement";
import EditProfile from "./Components/UserRegistration/UserProfileManage/EditProfile";
import ChangePassword from "./Components/UserRegistration/UserProfileManage/ChangePassword";
import BookingHistory from "./Components/UserRegistration/UserProfileManage/BookingHistory";
import UserHomePageContent from "./Components/UserRegistration/HomePage/UserHomePageContent";
import S_Registration from "./Components/Service_Pro/S_Registration";
// import Service from "./Components/Service_Pro/Service";
import S_Login from "./Components/Service_Pro/S_Login";
import S_Navbar from "./Components/Service_Pro/S_Provider-HomePage/S_Navbar";
import S_EditProfile from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/S_EditProfile";
import AboutMe from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/AboutMe";
import WorkArea from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/WorkArea";
import S_ChangePassword from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/S_ChangePassword";
import PauseAccount from "./Components/Service_Pro/S_Provider-HomePage/S_Profile/PauseAccount";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true); // Set the user as logged in
    };
    return (
        <Router>
            <Routes>
                {/* <Route path="/Login" element={<Login />} /> */}
                {/* <Route path="/home-page" element={<UserHomePage />} /> */}
                {/* <Route path="/admin-contact-us" element={<ContactUs />} /> */}
                {/* <Route path="/admin-profile-management" element={<ProfileManagement />} /> */}
                {/* <Route path="/admin-select-service" element={<SelectService />} /> */}
                {/* <Route path="/search-service" element={<SearchService />} /> */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<Layout><MainContent /></Layout>} />
                <Route path="/admin-manage-user" element={<Layout><ManageUser /></Layout>} />
                <Route path="/admin-manage-service-provider" element={<Layout><ServiceProvider /></Layout>} />
                <Route path="/admin-manage-service" element={<Layout><Service /></Layout>} />
                <Route path="/admin-manage-service-request" element={<Layout><ServiceRequest /></Layout>} />
                <Route path="/admin-manage-complaint" element={<Layout><Complaint /></Layout>} />
                <Route path="/admin-manage-feedback" element={<Layout><Feedback /></Layout>} />

                <Route path="/" element={<UserLogin />} />
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                {<Route path="/user-forgot-password" element={<ResetPassword />} />}
                <Route path="/user-home-page" element={<UserHomePage><UserHomePageContent /></UserHomePage>} />
                <Route path="/user-services" element={<UserHomePage><SelectService /></UserHomePage>} />
                <Route path="/user-contact-us" element={<UserHomePage><ContactUs /></UserHomePage>} />
                <Route path="/user-reset-password" element={<ResetPassword />} />
                {<Route path="/user-profile-management" element={<ProfileManagement />} />}
                {<Route path="/user-otp-request" element={<OtpRequest />} />}
                {<Route path="/user-otp-verify" element={<OtpVerify />} />}
                {<Route path="/user-profile-management" element={<ProfileManagement />} />}
                <Route path="/user-edit-profile" element={<UserHomePage><ProfileManagement ><EditProfile /></ProfileManagement></UserHomePage>} />
                <Route path="/user-change-password" element={<UserHomePage><ProfileManagement ><ChangePassword /></ProfileManagement></UserHomePage>} />
                <Route path="/user-booking-history" element={<UserHomePage><ProfileManagement ><BookingHistory /></ProfileManagement></UserHomePage>} />
                {/* <Route path='/service' element={<Service />}></Route> */}
                <Route path='/s-registration' element={<S_Registration />}></Route>
                <Route path='/s-login' element={<S_Login />}></Route>
                <Route path='/s-home-page' element={<S_Navbar />}></Route>
                <Route path='/s-edit_profile' element={<S_Navbar><S_EditProfile /></S_Navbar>}></Route>
                <Route path='/s-about-me' element={<S_Navbar><AboutMe /></S_Navbar>}></Route>
                <Route path='/s-work-area' element={<S_Navbar><WorkArea /></S_Navbar>}></Route>
                <Route path='/s-change-password' element={<S_Navbar><S_ChangePassword /></S_Navbar>}></Route>
                <Route path='/s-pause-account' element={<S_Navbar><PauseAccount /></S_Navbar>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
