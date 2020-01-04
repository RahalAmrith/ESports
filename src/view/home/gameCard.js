import React, { Component } from "react";

import "../assets/home/gameCard.css";

class gameCard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-6">
        <div
          className="home_game_card"
          style={{ backgroundImage: 'url("' + this.props.img + '")' }}
        >
          <div className="home_game_card_content">
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default gameCard;
