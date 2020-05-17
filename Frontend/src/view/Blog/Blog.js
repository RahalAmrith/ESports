import React, { Component } from "react";

import "../assets/Blog/Blog.css";

import PostCard from "../home/postCard.js";
import Blog_controller from "../../Controller/Blog.js";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      recentPostList: [],
    };
  }

  async UNSAFE_componentWillMount() {
    var _recentPosts = await Blog_controller.getPostList();

    await this.setState({
      recentPostList: _recentPosts,
    });
  }

  render() {
    const _posts = this.state.recentPostList.map((data, i) => {
      return (
        <div className="col-sm-6">
          <PostCard key={i} data={data} />
        </div>
      );
    });
    return (
      <div className="blog_main container App_Page">
        <h1>Blog</h1>

        <hr />

        <div className="row">{_posts}</div>
      </div>
    );
  }
}

export default Blog;
