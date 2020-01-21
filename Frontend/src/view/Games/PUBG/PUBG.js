import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _PUBG from "../../../Controller/PUBG.js";

// images
import BannerImg from "../../images/home/pubg.jpg";

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
            PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle
            royale game developed and published by PUBG Corporation, a
            subsidiary of South Korean video game company Bluehole. The game is
            based on previous mods that were created by Brendan "PlayerUnknown"
            Greene for other games, inspired by the 2000 Japanese film Battle
            Royale, and expanded into a standalone game under Greene's creative
            direction. In the game, up to one hundred players parachute onto an
            island and scavenge for weapons and equipment to kill others while
            avoiding getting killed themselves. The available safe area of the
            game's map decreases in size over time, directing surviving players
            into tighter areas to force encounters. The last player or team
            standing wins the round.
          </p>

          <ul>
            <li>
              {" "}
              <b>Initial release date: </b> March 23, 2017
            </li>
            <li>
              {" "}
              <b>Designer: </b> Brendan Greene
            </li>
            <li>
              {" "}
              <b>Composer: </b> Tom Salta
            </li>
            <li>
              {" "}
              <b>Composer: </b> Tom Salta
            </li>
            <li>
              {" "}
              <b>Developers: </b> PUBG Corporation, Krafton, Xbox Game Studios,
              Tencent Games
            </li>
            <li>
              {" "}
              <b>Publishers: </b> Krafton, Lightspeed, Quantum, Xbox Game
              Studios, Kakao Games
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
