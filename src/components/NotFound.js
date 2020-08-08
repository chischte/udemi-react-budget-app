import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const NotFound = () => (
  <div>
    404! <Link to="/">Go home</Link>
  </div>
);

export default NotFound;
