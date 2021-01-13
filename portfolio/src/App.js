// import "../css/App2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/mainPage.js";
import Profile from "./pages/profile.js";
import Projects from "./pages/projects.js";
import Experiments from "./pages/experiments/experiments.js";

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

// //mSTP returns an object - each property on that object is added to the props of the connected component
// //the connect function will call mSTP  and pass in the entire redux store as an argument!
// const mapStateToProps = (state) => {
//   console.log({ state }, " What We Have Now?????!!!!!");
//   //so the state has props of additionalFeatures, additionalPrice, car(features: [image, name, price])
//   return {
//     addTodo: state.addTodo,
//     clearCompleted: state.clearCompleted,
//     toggleComplete: state.toggleComplete,
//   };
// };

// export default connect(mapStateToProps, {})(App);
// //////....[{"second", need to connect App component ti the redux store then using mapStateToProps function to ...map the state(from the redux store) to props (of the connected component) }]....////// follow below---->

// //here connect is called twice
// //1st call is passing in the mSTP(Map State To Props) and an object
// // 2nd call is passing in the component we want to connect to the Redux store.
