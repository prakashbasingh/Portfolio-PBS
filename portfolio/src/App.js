// import "../css/App2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/mainPage.js";
import Profile from "./pages/profile.js";
import Projects from "./pages/projects.js";
import Experiments from "./pages/experiments.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/projects" component={Projects} />
          <Route path="/experiments" component={Experiments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
