import React from "react";
import Principal from "./Paginaprincipal";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <section>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <span className="navbar-brand mb-0 h1 titlefont">
          Los deschabetados
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link nav-item" to="/Ingreso">
              Ingresa
            </Link>
            <a className="nav-link nav-item" href="#experiencias">
              Experiencias de usuarios
            </a>
            <a className="nav-link nav-item" href="#sobrenosotros">
              Sobre nosotros
            </a>
          </div>
        </div>
      </nav>
      <Principal></Principal>
    </section>
  );
};

export default App;
