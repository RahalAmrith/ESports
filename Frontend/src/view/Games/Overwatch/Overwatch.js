import React, { Component } from "react";

// config
import Config from "../../../Controller/config.js";

// controllers
import _Overwatch from "../../../Controller/overwatch.js";

// images
import BannerImg from "../../images/home/overwatch_esportsearnings.jpg";

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
    _leaguesList = await _Overwatch.getleagues();
    this.setState({
      leaguesList: _leaguesList
    });

    console.log(_leaguesList);

    // get Teams list
    _teamsList = await _Overwatch.getTeams();
    this.setState({
      teamsList: _teamsList
    });

    // get Players list
    _playersList = await _Overwatch.getPlayers();
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
            Overwatch is a team-based multiplayer first-person shooter developed
            and published by Blizzard Entertainment. Described as a "hero
            shooter," Overwatch assigns players into two teams of six, with each
            player selecting from a roster of over 30 characters, known as
            "heroes," each with a unique style of play that is divided into
            three general roles that fit their purpose. Players on a team work
            together to secure and defend control points on a map or escort a
            payload across the map in a limited amount of time. Players gain
            cosmetic rewards that do not affect gameplay, such as character
            skins and victory poses, as they play the game. The game was
            initially launched with only casual play, but a competitive ranked
            mode, various 'arcade' game modes, and a player-customizable server
            browser were added after release. Additionally, Blizzard has added
            new characters, maps, and game modes post-release, all free of
            charge, with the only additional cost to players being optional loot
            boxes to earn cosmetic items. It was released for PlayStation 4,
            Xbox One, and Windows in May 2016, and Nintendo Switch in October
            2019.
          </p>

          <ul>
            <li>
              {" "}
              <b>Initial release date: </b> May 24, 2016
            </li>
            <li>
              {" "}
              <b>Mode(s): </b> Multiplayer
            </li>
            <li>
              {" "}
              <b>Writer(s): </b> Michael Chu; Alyssa Wong
            </li>
            <li>
              {" "}
              <b>Rating: </b> 12+
            </li>
            <li>
              {" "}
              <b>Developers: </b> Blizzard Entertainment, Iron Galaxy
            </li>
            <li>
              {" "}
              <b>Awards: </b> The Game Award for Game Of The Year
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
