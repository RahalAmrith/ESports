import React, { Component } from "react";

import "../assets/home/home.css";

// images
import PUBG from "../images/home/pubg.jpg";
import DOTA2 from "../images/home/dota2.jpg";
import CSGO from "../images/home/csgo.jpg";
import OverWatch from "../images/home/overwatch.jpg";
import LOL from "../images/home/lol.jpg";

// Components
import GameCard from "./gameCard";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getBackground(img) {
    "";
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container home_header">
          <center>
            <h1>Welcome to eSports </h1>

            <p>
              Esports is a form of sport competition using video games. Esports
              often takes the form of organized, multiplayer video game
              competitions, particularly between professional players,
              individually or as teams.
            </p>
          </center>
        </div>

        <div className="container home_container row">
          <div className="col-sm-12">
            <h2>Games</h2>

            <hr />
          </div>

          <GameCard img={LOL} title="LOL" />
          <GameCard img={DOTA2} title="DOTA 2" />
          <GameCard img={OverWatch} title="OVERWATCH" />
          <GameCard img={CSGO} title="CS:GO" />
          <div className="col-sm-3"></div>
          <GameCard img={PUBG} title="pubg" />
          <div className="col-sm-3"></div>
        </div>

        {/* Upcomming Leagus */}
        <div className="container home_container row">
          <div className="col-sm-12">
            <h2>Upcoming Leagues</h2>

            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
