import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/games/leaguesContainer.css";

// spinners
import TableSpinner from "../images/common/tableSpinner.svg";

class LeaguesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var list = this.props.data.map((data, i) => {
      return (
        <div key={i} className="col-sm-4 col-md-3 col-lg-2 col-6">
          <Link  to={`/league/${data.id}`}>
            <div className="LeagueCard">
              <center>
                <img title="" alt="Esports earnings  logo" src={data.image_url}></img>
                <h5>{data.name}</h5>
              </center>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div style={this.props.style} className="container row LeaguesContainer">
        {this.props.data.length === 0 ? (
          <img className="tableSpinner" title="" alt="Esports earnings  " src={TableSpinner} />
        ) : null}
        {list}
      </div>
    );
  }
}

export default LeaguesContainer;
