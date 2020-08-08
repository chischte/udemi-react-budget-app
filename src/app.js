import "normalize.css/normalize.css";
import "./styles/styles.scss";

import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Route,Switch } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>AddExpensePage</div>;
const EditExpensePage = () => <div>EditExpensePage</div>;
const HelpPage = () => <div>HelpPage</div>;
const NotFound = () => <div>404!</div>;

const routes = (
  <BrowserRouter>
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true} />
    <Route path="/create" component={AddExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
