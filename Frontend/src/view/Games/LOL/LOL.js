import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _PUBG from "../../../Controller/LOL.js";

// images
import BannerImg from "../../images/home/lol.jpg";

// views
import LeaguesContainer from "../LeaguesContainer.js";
import PlayersContainer from "../PlayersContainer.js";
import TeamsContainer from "../TeamsContainer.js";

import "../../assets/games/pubg/pubg.css";

class PUBG extends Component {
  constructor() {
    super();
    this.state = {
      page: "leagues",
      leaguesList: [],
      tournamentsList: [],
      playersList: [],
      teamsList: []
    };
  }

  async UNSAFE_componentWillMount() {
    var _leaguesList = [];
    var _playersList = [];
    var _teamsList = [];

    // get leagues list
    _leaguesList = await _PUBG.getleagues();
    this.setState({
      leaguesList: _leaguesList
    });

    console.log(_leaguesList);

    // get Teams list
    _teamsList = await _PUBG.getTeams();
    this.setState({
      teamsList: _teamsList
    });

    // get Players list
    _playersList = await _PUBG.getPlayers();
    this.setState({
      playersList: _playersList
    });
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

        <div className="container pubg_desc">
          <p>
            League of Legends (LoL) is a multiplayer online battle arena video
            game developed and published by Riot Games for Microsoft Windows and
            macOS. Inspired by the Warcraft III: The Frozen Throne mod Defense
            of the Ancients, the game follows a freemium model and is supported
            by microtransactions.[1] In League of Legends, players assume the
            role of a "champion" with unique abilities and battle against a team
            of other player- or computer-controlled champions. The goal is
            usually to destroy the opposing team's "Nexus", a structure that
            lies at the heart of a base protected by defensive structures,
            although other distinct game modes exist as well with varying
            objectives, rules, and maps. Each League of Legends match is
            discrete, with all champions starting off relatively weak but
            increasing in strength by accumulating items and experience over the
            course of the game.[2] Champions span a variety of roles and blend a
            variety of fantasy tropes, such as sword and sorcery, steampunk, and
            Lovecraftian horror.
          </p>

          <ul>
            <li>
              {" "}
              <b>Initial release date: </b> October 27, 2009
            </li>
            <li>
              {" "}
              <b>Mode(s): </b> Multiplayer
            </li>
            <li>
              {" "}
              <b>Composer: </b> Tom Salta
            </li>
            <li>
              {" "}
              <b>Developers: </b> Riot Games
            </li>
            <li>
              {" "}
              <b>Designers: </b> Steve Feak, Tom Cadwell, Christina Norman, Colt
              Hallam, Rob Garrett
            </li>
          </ul>
        </div>

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
              onClick={() => this.setPage("teams")}
              className={this.state.page === "teams" ? "active" : null}
            >
              Teams
            </li>
            <li
              onClick={() => this.setPage("players")}
              className={this.state.page === "players" ? "active" : null}
            >
              Players
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
        <TeamsContainer
          style={
            this.state.page === "teams"
              ? { transform: "rotateY(0deg)", opacity: 1, maxHeight: "1000vh" }
              : { transform: "rotateY(90deg)", opacity: 0, maxHeight: "0px" }
          }
          data={this.state.teamsList}
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
