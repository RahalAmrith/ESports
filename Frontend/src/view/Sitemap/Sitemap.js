import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/Sitemap/Sitemap.css";

class Sitemap extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="sitMap_main container-fluid">
        <h1>Site map</h1>
        <div className="container row">
          <div className="col-sm-4 sm_linkGroup">
            <h2>Games</h2>
            <h4>
              <Link to="/games/pubg"> PUBG</Link>
            </h4>
            <h4>
              <Link to="/games/csgo"> CSGO</Link>
            </h4>
            <h4>
              <Link to="/games/dota2"> DOTA 2</Link>
            </h4>
            <h4>
              <Link to="/games/overwatch"> Overwatch</Link>
            </h4>
            <h4>
              <Link to="/games/lol"> League of Ledgends</Link>
            </h4>
          </div>
          <div className="col-sm-4 sm_linkGroup">
            <h2><Link to="/earnings"> Earnings</Link></h2>
            <h2>Leagues</h2>
            <h2>Teams</h2>
            <h2>Players</h2>
          </div>
          <div className="col-sm-4 sm_linkGroup">
            <h2>
            <Link to="/blog">Blog</Link>
            </h2>
            <h2>
              <Link to="/forum">Forum</Link>
            </h2>
          </div>
          <div className="col-sm-4 sm_linkGroup">
            <h2>About Us</h2>
            <h4>
              <Link to="/aboutus"> About Us</Link>
            </h4>
            <h4>
              <Link to="/contactus"> Contact Us</Link>
            </h4>
            <h4>
              <Link to="/sitemap"> Site Map</Link>
            </h4>
            <h4>
              <Link to="/privacypolicy"> Privacy Policy</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Sitemap;
