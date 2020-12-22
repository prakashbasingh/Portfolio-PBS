import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { todoReducer } from "./reducers/todoReducer.js";

// "First", need to create a store then need to provide data to app from the store which is done by wrapping App component with <Provider>

const store = createStore(todoReducer);
// console.log(store.getStore(), "whats in th store here")

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
