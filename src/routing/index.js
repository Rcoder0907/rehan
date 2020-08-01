import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import WelcomePage from "../pages/Welcome";
import EducationPage from "../pages/Education";

const Routing = () => {
  const userName = useSelector((state) => state.userName.name);
  return (
    <div>
      <Switch>
        {!userName ? (
          <Route path={"/"} component={WelcomePage} />
        ) : (
            <Route path={"/"} component={EducationPage} />
          )}
      </Switch>
    </div>
  );
};

export default Routing;
