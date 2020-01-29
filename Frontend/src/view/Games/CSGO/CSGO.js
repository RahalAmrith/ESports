import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _CSGO from "../../../Controller/CSGO.js";

// images
import BannerImg from "../../images/home/csgo.jpg";

// views
import LeaguesContainer from "../LeaguesContainer.js";
import PlayersContainer from "../PlayersContainer.js";
import TeamsContainer from "../TeamsContainer.js";

import "../../assets/games/pubg/pubg.css";

class CSGO extends Component {
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
    _leaguesList = await _CSGO.getleagues();
    this.setState({
      leaguesList: _leaguesList
    });

    console.log(_leaguesList);

    // get Teams list
    _teamsList = await _CSGO.getTeams();
    this.setState({
      teamsList: _teamsList
    });

    // get Players list
    _playersList = await _CSGO.getPlayers();
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
            Counter-Strike: Global Offensive (CS:GO) is a multiplayer
            first-person shooter developed by Valve and Hidden Path
            Entertainment. It is the fourth game in the Counter-Strike series
            and was released for Windows, OS X, Xbox 360, and PlayStation 3 in
            August 2012, while the Linux version was released in 2014.
          </p>
          <p>
            The game pits two teams against each other: the Terrorists and the
            Counter-Terrorists. Both sides are tasked with eliminating the other
            while also completing separate objectives. The Terrorists, depending
            on the game mode, must either plant the bomb or defend the hostages,
            while the Counter-Terrorists must either prevent the bomb from being
            planted, defuse the bomb, or rescue the hostages. There are nine
            game modes, all of which have distinct characteristics specific to
            that mode. The game also has matchmaking support that allows players
            to play on dedicated Valve servers, as well as allowing members of
            the community to host their own servers with custom maps and game
            modes. A battle-royale game-mode, "Danger Zone", was introduced in
            2018.
          </p>

          <ul>
            <li>
              {" "}
              <b>Initial release date: </b> August 21, 2012
            </li>
            <li>
              {" "}
              <b>Mode(s): </b> Multiplayer
            </li>
            <li>
              {" "}
              <b>Engine: </b> Source
            </li>
            <li>
              {" "}
              <b>Developers: </b> Valve Corporation, Hidden Path Entertainment
            </li>
            <li>
              {" "}
              <b>Designer: </b> Minh Le, Jess Cliffe
            </li>
            <li>
              {" "}
              <b>Platforms: </b> Microsoft Windows, PlayStation 3, Xbox 360,
              Macintosh operating systems, Linux
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

export default CSGO;
