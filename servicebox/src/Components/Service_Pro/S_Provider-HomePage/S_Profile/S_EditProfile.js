import React, { useState } from "react";
import { FaUser, FaBriefcase, FaLock, FaPauseCircle } from "react-icons/fa"; // Import icons
import './S_EditProfile.css';
import AboutMe from "./AboutMe";
import WorkArea from "./WorkArea";
import ChangePassword from "./S_ChangePassword";
import PauseAccount from "./PauseAccount";

const EditProfile = () => {
  const [activeSection, setActiveSection] = useState("about-me");

  return (
    <div className="service-edit-profile-container">
      {/* Sidebar */}
      <aside className="service-sidebar">
        <ul>
          <li>
            <a
              href="#"
              className={activeSection === "about-me" ? "service-active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("about-me"); }}
            >
              <FaUser className="service-icon" /> About Me
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === "work-area" ? "service-active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("work-area"); }}
            >
              <FaBriefcase className="service-icon" /> Work Area
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === "change-password" ? "service-active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("change-password"); }}
            >
              <FaLock className="service-icon" /> Change Password
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === "pause-account" ? "service-active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("pause-account"); }}
            >
              <FaPauseCircle className="service-icon" /> Pause Account
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="service-profile-content">
        {activeSection === "about-me" && <AboutMe />}
        {activeSection === "work-area" && <WorkArea />}
        {activeSection === "change-password" && <ChangePassword />}
        {activeSection === "pause-account" && <PauseAccount />}
      </main>
    </div>
  );
};

export default EditProfile;
