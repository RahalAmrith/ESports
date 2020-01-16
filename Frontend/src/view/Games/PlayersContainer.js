import React, { Component } from "react";

import "../assets/games/matchesContainer.css";

class PlayersContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var _matchesList = this.props.data.slice(0, 10).map((data, i) => {
      return (
        <tr key={i}>
          <th scope="row">
            <img alt="" src={data.image_url} />
          </th>
          <td>{data.name}</td>
          <td>{data.slug}</td>
          <td>{data.nationality}</td>
          <td>{data.current_team.slug}</td>
          <td>{data.role}</td>
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
              <th scope="col">Slug</th>
              <th scope="col">Country</th>
              <th scope="col">Team</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>{_matchesList}</tbody>
        </table>
      </div>
    );
  }
}

export default PlayersContainer;
