import React, { Component } from "react";

import "../assets/player/player.css";

// controllers
import Game from "../../Controller/Game.js";
import _Player from "../../Controller/Player.js";
import _Team from "../../Controller/Team.js";
import Config from "../../Controller/config.js";

// placeHolders
import PlayerPlaceholder from "../images/placeholders/person.jpg";

// containers
import MatchesContainer from "../Games/MatchesContainer.js";

// spinners
import TableSpinner from "../images/common/tableSpinner.svg";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      // page data
      loading: true,

      // player Data
      birth_year: null,
      birthday: null,
      current_team: {
        acronym: null,
        id: null,
        image_url: null,
        location: null,
        modified_at: null,
        name: null,
        slug: null
      },
      current_videogame: {
        id: null,
        name: null,
        slug: null
      },
      first_name: null,
      hometown: null,
      id: 1514,
      image_url: null,
      last_name: null,
      name: null,
      nationality: null,
      role: null,
      slug: null,

      // matchesData
      matchesData : []
    };
  }

  async UNSAFE_componentWillMount() {
    const playerID = this.props.match.params.id;

    var playerData = await _Player.getPlayerData(playerID);

    console.log(playerData);

    this.setState({ ...playerData });
    var matchesData = await _Team.getMatchesForTeam(this.state.current_team.id);
    console.log(matchesData);
    
    this.setState({
      matchesData: matchesData,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <img className="tableSpinner" title="" alt="Esports earnings  " src={TableSpinner} />;
    } else {
      return (
        <div className="container-fluid">
          <div className="container row Team_banner">
            <div className="col-sm-3 Team_logo">
              <center>
                <img
                  src={
                    this.state.image_url === null
                      ? PlayerPlaceholder
                      : this.state.image_url
                  }
                ></img>
              </center>
            </div>
            <div className="col-sm-9 Team_details">
              <h2>{this.state.name}</h2>
              <h6>
                {this.state.first_name} &nbsp; {this.state.last_name}
              </h6>
              <hr />
              <div className="row"></div>
            </div>
          </div>

          <div className="container row removePadding">
            <div className="col-sm-4">
              <div className="playerInfor_item">
                <h3>Video Game</h3>
                <h1>{this.state.current_videogame.slug}</h1>
                <img
                  style={{ height: "60px", marginTop: "8px" }}
                  alt={this.state.current_videogame.name}
                  src={Game.getLogoByID(this.state.current_videogame.id)}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="playerInfor_item">
                <h3>Location</h3>

                <h1>{Config.parseCountry(this.state.nationality).name}</h1>
                <img
                  style={{ height: "60px", marginTop: "8px" }}
                  alt={this.state.current_videogame.name}
                  src={Config.parseCountry(this.state.nationality).flag}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="playerInfor_item">
                <h3>Team</h3>

                <h1>{this.state.current_team.name}</h1>
                <img
                  style={{ height: "60px", marginTop: "8px" }}
                  alt={this.state.current_videogame.name}
                  src={this.state.current_team.image_url}
                />
              </div>
            </div>
          </div>

          <div className="playerInfor_item container Team_players">
            <h2>Matches Played</h2>
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
}

export default Player;
