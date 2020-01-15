import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _PUBG from "../../../Controller/PUBG.js";

// images
import BannerImg from "../../images/home/pubg.jpg";

// views
import LeaguesContainer from '../LeaguesContainer.js'

import "../../assets/games/pubg/pubg.css";

class PUBG extends Component {
  constructor() {
    super();
    this.state = {
      leaguesList: []
    };
  }

  async UNSAFE_componentWillMount() {
    var _leaguesList = [];

    _leaguesList = await _PUBG.getleagues();

    this.setState({
      leaguesList: _leaguesList
    });

    console.log(this.state);
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

        <LeaguesContainer data={this.state.leaguesList} />
      </div>
    );
  }
}

export default PUBG;
