import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

import "../assets/games/matchesContainer.css";

// placeHolders
import PlayerPlaceholder from "../images/placeholders/person.jpg";

// spinners
import TableSpinner from "../images/common/tableSpinner.svg";

// require("bootstrap/less/bootstrap.less");

class PlayersContainer extends Component {
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
        <Link key={i} to={"/player/" + data.id}>
          
          {/* <tr key={i}> */}
            <th scope="row">
              <img
                alt=""
                src={
                  data.image_url === null ? PlayerPlaceholder : data.image_url
                }
              />
            </th>
            <td>{(data.first_name || "") + " " + (data.last_name || "")}</td>
            <td>{data.name || "-"}</td>
            <td>{data.nationality || "-"}</td>
            <td>
              {data.current_team === null ? "N/A" : data.current_team.slug}
            </td>
            <td>{data.role || "-"}</td>
          {/* </tr> */}
        </Link>
      );
    });
    return (
      <div style={this.props.style} className="container row MatchesContainer">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">Slug</th>
              <th scope="col">Country</th>
              <th scope="col">Team</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <center>
                    <img className="tableSpinner" alt="" src={TableSpinner} />
                  </center>
                </td>
              </tr>
            ) : null}
            {_matchesList}
          </tbody>
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

export default PlayersContainer;
