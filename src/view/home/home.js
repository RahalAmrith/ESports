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

// controllers
import Matches from "../../Controller/matches.js";
import Game from "../../Controller/Game.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getBackground(img) {
    "";
  }

  render() {
    const _upCommingMatches = Matches.getUpcommingMatches();

    const upCommingMatches = _upCommingMatches.map((data, i) => {
      return (
        <tr>
          <td>
            <img
              alt=""
              src={Game.getLogoByID(data.videogame.id)}
              // height="30px"
              width="25px"
            ></img>
            &nbsp;&nbsp;&nbsp;{data.videogame.name}
          </td>
          <td>
            <img
              alt=""
              src={
                data.league.image_url ||
                "https://bandat-nhontrach.com/images600_/logo-placeholder-3.png"
              }
              // height="30px"
              width="50px"
            ></img>
            &nbsp;&nbsp;&nbsp;
            {data.league.slug}
          </td>
          <td>{data.serie.full_name}</td>
          <td>{data.name}</td>
          <td>{data.begin_at.split("T")[0]}</td>
          <td>{data.begin_at.split("T")[1].substring(0, 5)}</td>
        </tr>
      );
    });
    return (
      <div className="container-fluid">
        {/* Games */}
        <div className="container home_container row">
          <GameCard img={LOL} title="LOL" />
          <GameCard img={DOTA2} title="DOTA 2" />
          <GameCard img={OverWatch} title="OVERWATCH" />
          <div className="col-sm-2"></div>
          <GameCard img={CSGO} title="CS:GO" />
          <GameCard img={PUBG} title="pubg" />
          <div className="col-sm-2"></div>
        </div>

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

        {/* Upcomming Leagus */}
        <div className="container home_container row home_upcomming_matches">
          <div className="col-sm-12">
            <h2>Upcoming Matches</h2>

            <hr />

            <div className="tableContainer">
              <table width="100%">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>League</th>
                    <th>Series</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>{upCommingMatches}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
