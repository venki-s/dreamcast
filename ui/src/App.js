import React from "react";
import "./App.css";
import Aux from "../src/com/fplan/hoc/Aux";
import HomePage from "../src/com/fplan/components/general/HomePage";
import Auth from "../src/com/fplan/components/signing/Auth";
import { Route, Switch } from "react-router-dom";
import UserHomePage from "../src/com/fplan/components/user/dashboard/UserHomePage";
import SignUpSuccess from "../src/com/fplan/components/signing/SignUpSuccess";

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/signup" component={Auth}></Route>
      <Route path="/signin" component={Auth}></Route>
      <Route path="/signinsuccess" component={UserHomePage}></Route>
      <Route path="/signupsuccess" component={SignUpSuccess}></Route>
      <Route path="/" component={HomePage}></Route>
    </Switch>
  );

  return (
    <Aux>
      <div className="App">{routes}</div>
    </Aux>
  );
};

export default App;
