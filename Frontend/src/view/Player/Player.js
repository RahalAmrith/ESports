import React, { Component } from "react";

import "../assets/player/player.css";

// controllers
import Game from "../../Controller/Game.js";
import _Player from "../../Controller/Player.js";

// placeHolders
import PlayerPlaceholder from "../images/placeholders/person.jpg";

class Player extends Component {
  constructor() {
    super();
    this.state = {
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
      slug: null
    };
  }

  async UNSAFE_componentWillMount() {
    const playerID = this.props.match.params.id;

    var playerData = await _Player.getPlayerData(playerID);

    console.log(playerData);

    this.setState({ ...playerData });
  }

  render() {
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

            <ul>
              <li>
                <b> Location : </b>
                {this.state.nationality}
              </li>
              <li>
                <b> Video Game : </b>
                {this.state.current_videogame.name}
              </li>
              <li>
                <img
                  style={{ height: "60px", marginTop : "8px" }}
                  alt={this.state.current_videogame.name}
                  src={Game.getLogoByID(this.state.current_videogame.id)}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
