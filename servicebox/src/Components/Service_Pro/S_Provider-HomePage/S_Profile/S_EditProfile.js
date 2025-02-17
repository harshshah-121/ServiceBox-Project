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
    <div className="edit-profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>
            <a
              href="#"
              className={activeSection === "about-me" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("about-me"); }}
            >
              <FaUser className="icon" /> About Me
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === "work-area" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("work-area"); }}
            >
              <FaBriefcase className="icon" /> Work Area
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === "change-password" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("change-password"); }}
            >
              <FaLock className="icon" /> Change Password
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === "pause-account" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveSection("pause-account"); }}
            >
              <FaPauseCircle className="icon" /> Pause Account
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="profile-content">
        {activeSection === "about-me" && <AboutMe />}
        {activeSection === "work-area" && <WorkArea />}
        {activeSection === "change-password" && <ChangePassword />}
        {activeSection === "pause-account" && <PauseAccount />}
      </main>
    </div>
  );
};

export default EditProfile;
