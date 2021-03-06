import React, { Component } from "react";

import "../assets/home/postCard.css";

class PostCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className="es_home_PostCard"
        onClick={() => window.open(`/blog/post/${this.props.data.rid}`)}
      >
        <div
          style={{ backgroundImage: `url(${this.props.data.img})` }}
          className="es_h_pc_img"
        ></div>
        <h3>{this.props.data.title}</h3>
        <p>{this.props.data.description}</p>
        <button>Read More</button>
      </div>
    );
  }
}

export default PostCard;
