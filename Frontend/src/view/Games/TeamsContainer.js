// eslint-disable

import React, { Component } from "react";
import Pagination from "react-js-pagination";

import { Link } from "react-router-dom";

import "../assets/games/matchesContainer.css";

// config
import Config from "../../Controller/config.js";

// placeholders
import TeamPlaceholder from "../images/placeholders/team.png";

// spinners
import TableSpinner from "../images/common/tableSpinner.svg";

class TeamsContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageNum: 1,
    };
  }

  handlePaging(pgno) {
    this.setState({
      pageNum: pgno,
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
        <Link key={i} to={"/team/" + data.id}>
          {/* <tr key={i}> */}
          <th scope="row">
            <img
              title={data.name}
              alt="Esports earnings  "
              src={data.image_url === null ? TeamPlaceholder : data.image_url}
            />
          </th>
          <td>{data.name}</td>
          <td>{data.acronym || "-"}</td>
          <td>
            {Config.parseCountry(data.location).name}
            <img
              className="flag"
              title={Config.parseCountry(data.location).name}
              alt="Esports earnings Country"
              src={Config.parseCountry(data.location).flag}
            />
          </td>
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
              <th scope="col">Name</th>
              <th scope="col">Acronym</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <center>
                    <img
                      className="tableSpinner"
                      title=""
                      alt="Esports earnings  "
                      src={TableSpinner}
                    />
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
              onChange={(pgno) => this.handlePaging(pgno)}
            />
            {/* </div> */}
          </center>
        </div>
      </div>
    );
  }
}

export default TeamsContainer;
