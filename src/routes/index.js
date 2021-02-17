import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/home";
import Question from "../views/question";
export default function Router(props) {
  return <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/question" component={Question}/>
  </Switch>;
}
