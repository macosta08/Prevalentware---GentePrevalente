import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src="/img/logo.png"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        Gente PreValente
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <form className="form-inline ml-auto">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text border-0 bg-dark text-white">
                <i className="fa fa-search"></i>
              </div>
            </div>
            <input
              className="form-control border-0 bg-dark text-white"
              type="search"
              placeholder="Buscar..."
            />
            <ul className="navbar-nav ml-auto justify-content-center">
              <li className="nav-item ml-3">
                {" "}
                <a className="nav-link text-white" href="/" data-abc="true">
                  <i className="fa fa-cogs"></i> Administración{" "}
                </a>{" "}
              </li>
              <li className="nav-item dropdown ml-3">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  id="empleoDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-suitcase"></i> Empleo
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="empleoDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ml-3">
                {" "}
                <a className="nav-link text-white" href="/" data-abc="true">
                  <i className="fas fa-clipboard"></i> Mi CV
                </a>{" "}
              </li>
              <li className="nav-item dropdown ml-3 mr-3">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  id="usuarioDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle"></i> Daniel
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="empleoDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
