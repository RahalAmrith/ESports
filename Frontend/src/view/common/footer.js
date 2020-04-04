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
              <li>About Us</li>
              <li>Contact Us</li>
              <li>
                <Link to="/sitemap">Site map </Link>{" "}
              </li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Earnings</h5>
            <h5>Blog</h5>
            <h5>Forum</h5>
          </div>
          <div className="col-sm-4">
            <h5>Games</h5>
            <ul>
              <li>
                <Link to="/games/lol">League of Legends</Link>
              </li>
              <li>
                <Link to="/games/dota2">DOTA 2</Link>
              </li>
              <li>
                <Link to="/games/overwatch">OverWatch</Link>
              </li>
              <li>
                <Link to="/games/csgo">CS:GO</Link>
              </li>
              <li>
                <Link to="/games/pubg">PUBG</Link>
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
