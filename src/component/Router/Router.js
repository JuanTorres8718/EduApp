import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../pages/App"
import Student from "../../pages/Student";
import ClassRoom from "../../pages/ClassRoom"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/perfil" component={Student} />
      <Route exact path="/ClassRoom" component={ClassRoom} />
      <Route exact path="/Calendario" component={Student} />
    </Switch>
  </BrowserRouter>
);

export default Router;