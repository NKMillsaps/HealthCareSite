//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";
import "bootswatch/dist/slate/bootstrap.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { MainPage } from "./component/mainPage.js";

//render your react application
ReactDOM.render(<MainPage />, document.querySelector("#app"));
