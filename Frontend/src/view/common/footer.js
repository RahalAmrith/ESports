import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/common/footer.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className=" container-fluid es_footer">
        <div className="container row">
          <div className="col-sm-4">
            <h5>About Us</h5>
            <ul>
              <li>Link 01</li>
              <li>Link 02</li>
              <li>Link 03</li>
              <li>Link 04</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Contact Us</h5>
            <ul>
              <li>Link 01</li>
              <li>Link 02</li>
              <li>Link 03</li>
              <li>Link 04</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Games</h5>
            <ul>
              <li>League of Legends</li>
              <li>DOTA 2</li>
              <li>OverWatch</li>
              <li>CS:GO</li>
              <li>
                <Link to="/games/pubg">
                  PUBG
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-12">
            <p>All rights Reserved </p>
            <p>Copyrights 2019 @ WorldESports.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
