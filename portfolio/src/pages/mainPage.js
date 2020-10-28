import React from "react";
import "../App2.css";

import Title from "./title.js";
import Header from "./header.js";
import NavBar from "./navBar.js";
import Body from "./body.js";
import Footer from "./footer.js";

function MainPage() {
  return (
    <div className="App">
      <Title />
      <Header />
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default MainPage;
