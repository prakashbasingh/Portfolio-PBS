import React from "react";

import Title from "./title.js";
import Header from "./header.js";
import NavBar from "./navBar.js";
import Skills from "./skills.js";
import Body from "./body.js";
import Footer from "./footer.js";
// import Profile from "./profile.js";
// import Projects from "./projects.js";

function MainPage() {
  return (
    <div className="App">
      <Title />
      <Header />
      <NavBar />
      <Skills />
      <Body />
      <Footer />
    </div>
  );
}

export default MainPage;
