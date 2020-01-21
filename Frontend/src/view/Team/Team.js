import React, { Component } from "react";

import "../assets/team/Team.css";

// placeHolders
import PlayerPlaceholder from "../images/placeholders/person.jpg";
import TeamPlaceholder from "../images/placeholders/team.png";

// containers
import MatchesContainer from "../Games/MatchesContainer.js";

// controllers
import _Team from "../../Controller/Team.js";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      acronym: "",
      current_videogame: { id: "", name: "", slug: "" },
      id: "",
      image_url: null,
      location: "",
      name: "",
      players: [],
      slug: "",

      //   matches data
      matchesData: []
    };
  }

  async UNSAFE_componentWillMount() {
    const teamID = this.props.match.params.id;
    var teamData = {
      acronym: "",
      current_videogame: { id: "", name: "", slug: "" },
      id: "",
      image_url: "",
      location: "",
      name: "",
      players: [],
      slug: ""
    };

    var _matchesData = [];

    teamData = await _Team.getTeamData(teamID);

    console.log(teamData);

    this.setState({
      acronym: teamData.acronym,
      current_videogame: teamData.current_videogame,
      id: teamData.id,
      image_url: teamData.image_url,
      location: teamData.location,
      name: teamData.name,
      players: teamData.players,
      slug: teamData.slug
    });

    _matchesData = await _Team.getMatchesForTeam(teamID);
    console.log(_matchesData);
    this.setState({
      matchesData: _matchesData
    });
  }

  render() {
    if (this.state.players !== undefined) {
      var playersList = this.state.players.map((data, i) => {
        return (
          <div className="col-6 col-md-4 col-lg-3">
            <div className="PlayerCard">
              <img
                src={
                  data.image_url === null ? PlayerPlaceholder : data.image_url
                }
              ></img>
              <h4>{data.name}</h4>
              <h6>{(data.first_name || "") + " " + (data.last_name || "")}</h6>
              <h5>Role : {data.role || "N/A"}</h5>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="container-fluid">
        <div className="container row Team_banner">
          <div className="col-sm-3 Team_logo">
            <center>
              <img
                src={
                  this.state.image_url === null
                    ? TeamPlaceholder
                    : this.state.image_url
                }
              ></img>
            </center>
          </div>
          <div className="col-sm-9 Team_details">
            <h2>{this.state.name}</h2>

            <ul>
              <li>
                <b> Location : </b>
                {this.state.location}
              </li>
              <li>
                <b> Video Game : </b>
                {this.state.current_videogame.name}
              </li>
            </ul>
          </div>
        </div>

        <div className="container Team_players">
          <h2>Players</h2>
          <hr />
          <br />
          <div className="row">{playersList}</div>
        </div>

        <div className="container Team_players">
          <h2>MAtches Played</h2>
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

export default Team;
