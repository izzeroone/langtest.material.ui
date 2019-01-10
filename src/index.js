import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.5.0";
import "./index.css";
import "react-sweet-progress/lib/style.css";
import indexRoutes from "routes/index.jsx";
import ResultScreen from "./views/ResultScreen/ResultScreen";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      <Route path={"/result2"} component={ResultScreen} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
