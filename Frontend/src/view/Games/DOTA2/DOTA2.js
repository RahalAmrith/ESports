import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _DOTA2 from "../../../Controller/DOTA2.js";

// images
import BannerImg from "../../images/home/dota2_esports_earnings.jpg";

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
    _leaguesList = await _DOTA2.getleagues();
    this.setState({
      leaguesList: _leaguesList
    });

    console.log(_leaguesList);

    // get Teams list
    _teamsList = await _DOTA2.getTeams();
    this.setState({
      teamsList: _teamsList
    });

    // get Players list
    _playersList = await _DOTA2.getPlayers();
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
            Dota 2 is a multiplayer online battle arena (MOBA) video game
            developed and published by Valve. The game is a sequel to Defense of
            the Ancients (DotA), which was a community-created mod for Blizzard
            Entertainment's Warcraft III: Reign of Chaos and its expansion pack,
            The Frozen Throne. Dota 2 is played in matches between two teams of
            five players, with each team occupying and defending their own
            separate base on the map. Each of the ten players independently
            controls a powerful character, known as a "hero", who all have
            unique abilities and differing styles of play. During a match,
            players collect experience points and items for their heroes to
            successfully defeat the opposing team's heroes in player versus
            player combat. A team wins by being the first to destroy the other
            team's "Ancient", a large structure located within their base.
          </p>

          <ul>
            <li>
              {" "}
              <b>Initial release date: </b> July 9, 2013
            </li>
            <li>
              {" "}
              <b>Writer(s): </b> Marc Laidlaw; Ted Kosmatka; Kris Katz
            </li>
            <li>
              {" "}
              <b>Developer: </b> Valve Corporation
            </li>
            <li>
              {" "}
              <b>Designer: </b> IceFrog
            </li>
            <li>
              {" "}
              <b>Publisher: </b> Valve Corporation
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
