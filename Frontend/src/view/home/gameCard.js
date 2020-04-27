import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../assets/home/gameCard.css";

class gameCard extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.element = null;
  }

  render() {
    return (
      <Link className="home_game_link" to={this.props.link}>
        <div
          className="home_game_card"
          onMouseOver={() => this.props.setBanner(this.props.bannerNum)}
          onMouseLeave={() => this.props.setBanner(0)}
        >
          <img src={this.props.img} alt="" />
          <h1>{this.props.title}</h1>
        </div>
      </Link>
    );
  }
}

export default gameCard;
