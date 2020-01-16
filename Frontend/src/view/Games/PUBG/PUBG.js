import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _PUBG from "../../../Controller/PUBG.js";

// images
import BannerImg from "../../images/home/pubg.jpg";

// views
import LeaguesContainer from "../LeaguesContainer.js";
import MatchesContainer from "../MatchesContainer.js";
import PlayersContainer from "../PlayersContainer.js";

import "../../assets/games/pubg/pubg.css";

class PUBG extends Component {
  constructor() {
    super();
    this.state = {
      page: "leagues",
      leaguesList: [],
      matchesList: [],
      playersList: []
    };
  }

  async UNSAFE_componentWillMount() {
    var _leaguesList = [];
    var _matchesList = [];
    var _playersList = [];

    // get leagues list
    _leaguesList = await _PUBG.getleagues();
    this.setState({
      leaguesList: _leaguesList
    });
    
    // get matches list
    _matchesList = await _PUBG.getMatches();
    this.setState({
      matchesList: _matchesList
    });

    // get Players list
    _playersList = await _PUBG.getPlayers();
    this.setState({
      playersList: _playersList
    });

    console.log(this.state);
  }

  setPage(_page) {
    this.setState({
      page: _page
    });
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
            <li
              onClick={() => this.setPage("leagues")}
              className={this.state.page === "leagues" ? "active" : null}
            >
              Leagues
            </li>
            <li
              onClick={() => this.setPage("matches")}
              className={this.state.page === "matches" ? "active" : null}
            >
              Matches
            </li>
            <li
              onClick={() => this.setPage("players")}
              className={this.state.page === "players" ? "active" : null}
            >
              Players
            </li>
            <li
              onClick={() => this.setPage("teams")}
              className={this.state.page === "teams" ? "active" : null}
            >
              Teams
            </li>
            <li
              onClick={() => this.setPage("tournments")}
              className={this.state.page === "tournments" ? "active" : null}
            >
              Tournaments
            </li>
          </ul>
        </div>

        <LeaguesContainer
          style={
            this.state.page === "leagues"
              ? { transform: "rotateY(0deg)", opacity: 1, maxHeight: "1000vh" }
              : { transform: "rotateY(90deg)", opacity: 0, maxHeight: "0px" }
          }
          data={this.state.leaguesList}
        />
        <MatchesContainer
          style={
            this.state.page === "matches"
              ? { transform: "rotateY(0deg)", opacity: 1, maxHeight: "1000vh" }
              : { transform: "rotateY(90deg)", opacity: 0, maxHeight: "0px" }
          }
          data={this.state.matchesList}
        />
        <PlayersContainer
          style={
            this.state.page === "players"
              ? { transform: "rotateY(0deg)", opacity: 1, maxHeight: "1000vh" }
              : { transform: "rotateY(90deg)", opacity: 0, maxHeight: "0px" }
          }
          data={this.state.playersList}
        />
      </div>
    );
  }
}

export default PUBG;
