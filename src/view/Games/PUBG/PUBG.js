import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// images
import BannerImg from "../../images/home/pubg.jpg";

import "../../assets/games/pubg/pubg.css";

class PUBG extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div
          className="container pubg_banner"
          style={{ backgroundImage: Config.getCSSImage(BannerImg) }}
        ></div>

        {/* pubg nav bar */}

        <div className="container pubg_navbar">
          <ul>
            <li>Leagues</li>
            <li>Matches</li>
            <li>Players</li>
            <li>Teams</li>
            <li>Tournaments</li>
          </ul>

        </div>

      </div>
    );
  }
}

export default PUBG;
