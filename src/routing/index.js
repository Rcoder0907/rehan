import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../pages/Welcome";
import EducationPage from "../pages/Education";

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route path={"/"} component={WelcomePage} exact />
        <Route path={"/education"} component={EducationPage} exact />
      </Switch>
    </div>
  );
};

export default Routing;
