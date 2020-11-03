import React from "react";
import "../css/App2.css";
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
          from Sacramento, California. I enjoy learning new things, and I am
          excited to gain experience and grow in the web development field.
        </p>
        <p>
          I was a clinical lab science student, but I gravitate more towards
          programming. In March of 2020, I began my programming journey with
          Lambda School. With robust and vigorous nine months of training . I
          learned not only coding but also how we should work and grow as a team
          member. The experience that I gained from lambda school, such as
          coding classes and challanging coding projects, building application
          as a team during the build weeks, and their support to make their
          students ready for the job is very motivating.
        </p>
        <p>
          Now, I can proudly say I became more communicative and team-oriented
          programmer. I am a good listener and open for feedback to enhance my
          overall ability. I like to learn new technology and integrate into
          applications. I am very happy, proud, and very excited to explore
          more, learn more, and grow more in the Web Development field.
        </p>
      </div>
    </div>
  );
}
export default Header;
