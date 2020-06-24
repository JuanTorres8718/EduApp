import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Registro from "../componentes/Registro";
import Ingreso from "../componentes/Ingreso";

const Ruta = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/Registro" component={Registro}></Route>
      <Route path="/Ingreso" component={Ingreso}></Route>
    </Switch>
  </BrowserRouter>
);

export default Ruta;
