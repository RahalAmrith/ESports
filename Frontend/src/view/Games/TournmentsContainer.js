import React, { Component } from "react";
import Pagination from "react-js-pagination";

import "../assets/games/matchesContainer.css";

// controllers
import Game from "../../Controller/Game.js";
import config from "../../Controller/config.js";

// placeHolders
import PlayerPlaceholder from "../images/placeholders/person.jpg";

// spinners
import TableSpinner from "../images/common/tableSpinner.svg";

class TournamentsContainer extends Component {
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
      var pp = config.getCurrency(data.prizepool);
      // var pp = data.prizepool;
      return (
        <tr key={i}>
          <td>
            <img
              alt={data.videogame.name}
              src={Game.getLogoByID(data.videogame.id)}
            />
          </td>
          <td>{data.videogame.name}</td>
          <td>{data.league.name}</td>
          <td>{data.serie !== undefined ? data.serie.full_name : "-"}</td>
          <td>{data.name}</td>
          <td>
            <span style={{ color: "#00FF00" }}>{pp} </span>
          </td>
        </tr>
      );
    });
    return (
      <div style={this.props.style} className="container row MatchesContainer">
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2" scope="col">
                Game
              </th>
              <th scope="col">League</th>
              <th scope="col">Series</th>
              <th scope="col">Tournemant</th>
              <th scope="col">Prize Pool</th>
            </tr>
            {this.props.data.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <center>
                    <img className="tableSpinner" alt="" src={TableSpinner} />
                  </center>
                </td>
              </tr>
            ) : null}
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

export default TournamentsContainer;
