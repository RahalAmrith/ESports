import React, { Component } from "react";

import "../assets/games/leaguesContainer.css";

class LeaguesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var list = this.props.data.map((data, i) => {
      return (
        <div key={i} className="col-sm-4 col-md-3 col-lg-2 col-6">
          <div className="LeagueCard">
            <center>
              <img alt="logo" src={data.image_url}></img>
              <h5>{data.name}</h5>
            </center>
          </div>
        </div>
      );
    });
    return (
      <div style={this.props.style} className="container row LeaguesContainer">
        {list}
      </div>
    );
  }
}

export default LeaguesContainer;
