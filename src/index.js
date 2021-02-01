import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Creating the store for the data
import { createStore } from "redux";
//importing the reducers
import reducer from "./reducer/reducers";
//for the store
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
//Adding the store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
