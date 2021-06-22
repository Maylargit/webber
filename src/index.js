import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Godfather from "./Godfather";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPalette,
  faLaptopCode,
  faTasks,
  faBars,
  faTimes,
  faLongArrowAltRight,
  faEnvelope,
  faMobile,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faPalette,
  faLaptopCode,
  faTasks,
  faBars,
  faTimes,
  faLongArrowAltRight,
  faEnvelope,
  faMobile,
  faBuilding
);

ReactDOM.render(
  <React.StrictMode>
    <Godfather />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
