import React, { Component } from "react";

import "../assets/Earnnings/Earnnings.css";

// controllers
import _Players from "../../Controller/Player.js";
import Config from "../../Controller/config.js";

var tableify = require("tableify");

var numeral = require("numeral");
class Earnnings extends Component {
  constructor() {
    super();
    this.state = {
      topPlayers: []
    };
  }

  async UNSAFE_componentWillMount() {
    console.log("getting Players");

    // get Players
    var _playersList = await _Players.DB_list(200);

    await this.setState({
      topPlayers: _playersList
    });

    console.table(_playersList);
  }

  render() {
    var EarningsData = this.state.topPlayers.map((data, i) => {
      console.log(Config.parseCountry(data.country));

      return (
        <tr>
          <td>{data.player_name}</td>
          <td>{data.fullname}</td>
          <td>
            {Config.parseCountry(data.country).name}
            <img
              className="flag"
              alt=""
              src={Config.parseCountry(data.country).flag}
            />
          </td>
          <td>
            {data.game
              .replace("Counter-Strike: Global Offensive", "CS:GO")
              .replace("PLAYERUNKNOWN’S BATTLEGROUNDS", "PUBG")
              .replace("Call of Duty", "COD")}
          </td>
          <td style={{ color: "#00FF00" }}>
            {numeral(data.total_earning).format("$ 0,0.00")}
          </td>
        </tr>
      );
    });
    return (
      <div className="container-fluid row ES_Earnings_main">
        <div className="container ES_Earnings_container">
          <h1 className="ES_Earnings_title">
            Top Players get highest earnings
          </h1>

          <hr />

          <table className="table ES_Earnings_table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">FullName</th>
                <th scope="col">Country</th>
                <th scope="col">Most Earned Game</th>
                <th scope="col">Total Earnings</th>
              </tr>
            </thead>
            <tbody>{EarningsData}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Earnnings;
