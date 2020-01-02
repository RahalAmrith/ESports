import React, { Component } from "react";

import "../assets/common/navbar.css";

import Logo from "../images/navbar/logo.png";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="es_navbar">
        <div className="container">
          <a className="es_nav_link" href="/">Home</a>
          <a className="es_nav_link" href="/">Games</a>
          <a className="es_nav_link" href="/">About</a>
          <img className="es_nav_logo" src={Logo} />
        </div>
      </div>
    );
  }
}

export default NavBar;
