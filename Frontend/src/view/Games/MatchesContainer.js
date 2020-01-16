import React, { Component } from "react";

import "../assets/games/matchesContainer.css";

class MatchesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var _matchesList = this.props.data.slice(0, 10).map((data, i) => {
      return (
        <tr key={i}>
          <th scope="row">
            <img alt="leagueLogo" src={data.league.image_url} />
          </th>
          <td>{data.serie.slug}</td>
          <td>{data.tournament.name}</td>
          <td>{data.name}</td>
          <td>{data.match_type}</td>
          <td>{data.status}</td>
        </tr>
      );
    });
    return (
      <div style={this.props.style} className="container row MatchesContainer">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">League</th>
              <th scope="col">Series</th>
              <th scope="col">Tournment</th>
              <th scope="col">Name</th>
              <th scope="col">type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{_matchesList}</tbody>
        </table>
      </div>
    );
  }
}

export default MatchesContainer;
