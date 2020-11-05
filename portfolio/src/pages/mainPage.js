import React from "react";
// import "../css/App2.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      {/* <Route path="/profile" component={Profile} />
        <Route path="/projects" component={Projects} /> */}
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
