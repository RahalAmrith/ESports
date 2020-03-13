import React, { Component } from "react";
import {Link} from 'react-router-dom';

import "../assets/League/League.css";
// placeHolders
import PlayerPlaceholder from "../images/placeholders/person.jpg";
import TeamPlaceholder from "../images/placeholders/team.png";

// containers
import MatchesContainer from "../Games/MatchesContainer.js";

// controllers
import _League from "../../Controller/League.js";

class League extends Component {
  constructor() {
    super();
    this.state = {
      matchesData: [],

      id: "",
      image_url: "",
      modified_at: "",
      name: "",
      series: [],
      slug: "",
      url: "",
      videogame: {
        current_version: "",
        id: 0,
        name: "",
        slug: ""
      }
    };
  }

  async UNSAFE_componentWillMount() {
    const leagueID = this.props.match.params.id;

    var leagueData = {};
    var _matchesData = [];

    leagueData = await _League.getLeagueData(leagueID);

    console.log(leagueData);

    await this.setState({
      ...leagueData
    });

    _matchesData = await _League.getMatchesForLeague(leagueID);
    console.log(_matchesData);
    await this.setState({
      matchesData: _matchesData
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container row Team_banner">
          <div className="col-sm-3 Team_logo">
            <center>
              <img
                src={this.state.image_url === null ? "" : this.state.image_url}
              ></img>
            </center>
          </div>
          <div className="col-sm-9 Team_details">
            <h2>{this.state.name}</h2>

            <ul>
              <li>
                <b> Website : </b>
                <Link to={this.state.url}>{this.state.url}</Link>
              </li>
              <li>
                <b> Video Game : </b>
                {this.state.videogame.name}
              </li>
            </ul>
          </div>
        </div>

        <div className="container Team_players">
          <h2>Matches in League</h2>
          {/* <hr /> */}
          <br />
          <MatchesContainer
            teamID={this.state.id}
            data={this.state.matchesData}
          />
        </div>
      </div>
    );
  }
}

export default League;
