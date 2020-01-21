import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/common/navbar.css";
import '../../App.css'

import Logo from "../images/navbar/logo.png";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="es_navbar">
        {/* <div className="container"> */}
        {/* Bootstrap Nav Bar */}

        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="/">
            <img alt="logo" className="es_nav_logo" src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Leagues
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tournements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Players
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Teams
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Games
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    League of Legends
                  </a>
                  <a className="dropdown-item" href="/">
                    Dota 2
                  </a>
                  <a className="dropdown-item" href="/">
                    Overwatch
                  </a>
                  <a className="dropdown-item" href="/">
                    CS:GO
                  </a>
                  <Link className="dropdown-item" to="/games/pubg">
                    PUBG
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* </div> */}
      </div>
    );
  }
}

export default NavBar;
