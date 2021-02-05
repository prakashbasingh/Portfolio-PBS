import React from "react";
import "../css/header.css";
import profilePic from "../images/profilePic.jpg";

function Header() {
  return (
    <div className="header">
      <img className="image" src={profilePic} alt=" PBS ProfilePic"></img>

      <div className="intro">
        <h1>Hi,</h1>
        <p>
          My name is Prakash Bahadur Singh, and I am a full-stack web developer
          from Sacramento, California.
        </p>
        <p>
          I was a clinical lab science student, but I gravitated more towards
          programming. In March of 2020, I began my programming journey with
          Lambda School. With robust and vigorous nine months of training, I
          learned not only coding but also how we should work and grow as a team
          member. The experience that I gained from lambda schools, such as
          coding classes followed by challenging coding projects, building an
          application as a team during the build weeks and their support to make
          their students ready for the career are very motivating.
        </p>
        <p>
          Now, I can proudly say I became a more communicative and team-oriented
          programmer. I am a good listener and open to feedback to enhance my
          overall ability. I like to learn new technology and integrate them
          into applications. I am very happy, proud, and excited to explore
          more, learn more, and grow more in the Web Development field.
        </p>
      </div>
    </div>
  );
}
export default Header;
