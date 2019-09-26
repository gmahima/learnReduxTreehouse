import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import PlayerReducer from "./src/reducers/player";

import Scoreboard from "./src/containers/Scoreboard";
//import "./app.css";
const store = createStore(PlayerReducer);
render(
  <Provider>
    <Scoreboard />
  </Provider>,
  document.getElementById("root")
);
