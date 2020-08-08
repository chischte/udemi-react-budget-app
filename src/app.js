import React from "react";
import ReactDOM, { render } from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
