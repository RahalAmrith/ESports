import React, { Component } from "react";

import "../assets/home/home.css";

import PUBG from "../images/home/pubg.jpg";
import DOTA2 from "../images/home/dota2.jpg";
import CSGO from "../images/home/csgo.jpg";
import OverWatch from "../images/home/overwatch.jpg";
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

        <div className="container home_game_container row">
          <div className="col-sm-12">
            <h2>Games</h2>

            <hr />
          </div>

          <div className="col-sm-6">
            <div
              className="home_game_card"
              style={{ backgroundImage: 'url("' + CSGO + '")' }}
            >
              <div className="home_game_card_content">
                <h1>CS GO</h1>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="home_game_card"
              style={{ backgroundImage: 'url("' + DOTA2 + '")' }}
            >
              <div className="home_game_card_content">
                <h1>DOTA 2</h1>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="home_game_card"
              style={{ backgroundImage: 'url("' + PUBG + '")' }}
            >
              <div className="home_game_card_content">
                <h1>PUBG</h1>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="home_game_card"
              style={{ backgroundImage: 'url("' + OverWatch + '")' }}
            >
              <div className="home_game_card_content">
                <h1>Overwatch</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>

          <div className="col-sm-6">
            <div
              className="home_game_card"
              style={{ backgroundImage: 'url("' + OverWatch + '")' }}
            >
              <div className="home_game_card_content">
                <h1>Overwatch</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
