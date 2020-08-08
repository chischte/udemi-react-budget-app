import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import Header from "../components/Header";
import AddExpensePage from "../components/AddExpense";
import EditExpensePage from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
