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
      <div className="col-md-2">
        <Link to={this.props.link}>
          <div
            // ref={ele => {
            //   ele === null
            //     ? console.log()
            //     : (ele.style.height = ele.offsetWidth * 0.5625 + "px");
            // }}
            className="home_game_card"
            style={{
              backgroundImage: 'url("' + this.props.img + '")',
              height:
                this.element === null
                  ? `100px`
                  : `${this.element.innerWidth * 0.5625} px`
            }}
          >
            <div
              className="home_game_card_content"
              onMouseOver={() => this.props.setBanner(this.props.bannerNum)}
              onMouseLeave={() => this.props.setBanner(0)}
            >
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default gameCard;
