import React, { Component } from "react";
import draftToHtml from "draftjs-to-html";

import BlogController from "../../Controller/Blog.js";

import "../assets/Blog/BlogPost.css";

class BlogPost extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async UNSAFE_componentWillMount() {
    var _post = await BlogController.getPost(this.props.match.params.id);

    await this.setState({
      ..._post
    });

    const _markup = await draftToHtml(JSON.parse(this.state.content));

    console.log(JSON.parse(this.state.content))

    console.log(_markup);

    await this.setState({
      markUp: _markup
    });
  }

  componentDidUpdate(){
      document.getElementById('bp_content').innerHTML = this.state.markUp
  }

  render() {
    return (
      <div className="containe-fluid">
        <div className="container row">
          {/* title */}
          <div className="col-12 bp_container">
            <h1>{this.state.title}</h1>
          </div>

          {/* Image */}
          <div className="col-12 bp_container bp_img">
            <img title="" alt="Esports earnings  " src={this.state.img}></img>
          </div>

          {/* Content */}
          <div className="col-12 bp_container bp_content" id="bp_content"></div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
