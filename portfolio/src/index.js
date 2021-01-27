import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";

import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { todoReducer } from "./reducers/todoReducer.js";

// "First", need to create a store then need to provide data to app from the store which is done by wrapping App component with <Provider>

const store = createStore(todoReducer, applyMiddleware(thunk, logger));
console.log(store.getState(), "whats in th store here in index.js");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
