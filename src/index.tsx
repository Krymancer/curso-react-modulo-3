import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Main from "./pages/main";

import store from "./redux/store";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
