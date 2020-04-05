import React, { Component } from "react";
import Pagination from "react-js-pagination";

import "../assets/games/matchesContainer.css";

class MatchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageNum: 1
    };
  }

  handlePaging(pgno) {
    this.setState({
      pageNum: pgno
    });
  }

  render() {
    var resCount = this.props.data.length;
    var pageCount = Math.ceil(resCount / 10);
    var floor = (this.state.pageNum - 1) * 10;
    var ceil = this.state.pageNum * 10 - 1;

    if (ceil > resCount - 1) {
      ceil = resCount - 1;
    }

    var _matchesList = this.props.data.slice(floor, ceil + 1).map((data, i) => {
      return (
        <tr key={i}>
          <th scope="row">
            <img title="" alt="Esports earnings  leagueLogo" src={data.league.image_url} />
          </th>
          <td>{data.serie.slug}</td>
          <td>{data.tournament.name}</td>
          <td>{data.name}</td>
          <td>{data.match_type}</td>
          <td>
            {data.winner_id === this.props.teamID ? (
              <span style={{ color: "#00FF00" }}>Won</span>
            ) : (
              data.status
            )}
          </td>
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

        <div className="pagination">
          <center>
            {/* <div> */}
            <Pagination
              activePage={this.state.pageNum}
              itemsCountPerPage={10}
              totalItemsCount={pageCount * 10}
              pageRangeDisplayed={window.innerWidth < 768 ? 5 : 10}
              itemClass="page-item"
              linkClass="page-link"
              innerClass="pagination_bar"
              onChange={pgno => this.handlePaging(pgno)}
            />
            {/* </div> */}
          </center>
        </div>
      </div>
    );
  }
}

export default MatchesContainer;
