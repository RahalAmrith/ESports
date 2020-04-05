import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/common/navbar.css";
import "../../App.css";

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

        <a className="es_navbar-logo" href="/">
          <img title="" alt="Esports earnings  LOGO" src={Logo} />
        </a>

        <nav className="navbar navbar-expand-md navbar-dark">
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
                <Link className="nav-link" to="/earnings">
                  Earnings
                </Link>
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
                  <Link className="dropdown-item" to="/games/pubg">
                    PUBG
                  </Link>
                  <Link className="dropdown-item" to="/games/csgo">
                    CS:GO
                  </Link>
                  <Link className="dropdown-item" to="/games/dota2">
                    Dota 2
                  </Link>
                  <Link className="dropdown-item" to="/games/overwatch">
                    Overwatch
                  </Link>
                  <Link className="dropdown-item" to="/games/lol">
                    League of Legends
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forum">
                  Forum
                </Link>
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
