import React, { Component } from "react";

import "../assets/games/matchesContainer.css";

class TeamsContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var _matchesList = this.props.data.map((data, i) => {
      return (
        <tr key={i}>
          <th scope="row">
            <img alt="" src={data.image_url} />
          </th>
          <td>{data.name}</td>
          <td>{data.acronym}</td>
          <td>{data.location}</td>
        </tr>
      );
    });
    return (
      <div style={this.props.style} className="container row MatchesContainer">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Acronym</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>{_matchesList}</tbody>
        </table>
      </div>
    );
  }
}

export default TeamsContainer;
