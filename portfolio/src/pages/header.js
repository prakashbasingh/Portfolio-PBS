import React from "react";
import "../css/App2.css";
import "../css/header.css";
import profilePic from "../images/profilePic.png";

function Header() {
  return (
    <div className="header">
      <image className="image" src={profilePic} alt="profile picture"></image>

      <div className="intro">
        <h1>Hi,</h1>
        <p>
          My name is Prakash Bahadur Singh and I am a full stack web developer
          from Sacramento, California. I am always eager to learn new thing and
          I am excited to gain more experience and grow in the web development
          field.
        </p>
        <p>Before it was too late, I finally found my passion to pursue. </p>
      </div>
    </div>
  );
}
export default Header;
