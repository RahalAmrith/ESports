import React, { Component } from "react";

import "../../assets/Admin/Blog/Admin.Blog.css";

// controllers
import Blog_Controller from "../../../Controller/Blog.js";

class Admin_Blog extends Component {
  constructor() {
    super();
    this.state = {
      // addPost
      ap_imgUrl: null
    };
  }

  handleImage(e) {
    e.persist();

    if (e.target.validity.typeMismatch) {
      this.setState({
        ap_imgUrl: null
      });
    } else {
      this.setState({
        ap_imgUrl: e.target.value
      });
    }
  }

  async addPost(e) {
    e.persist();
    e.preventDefault();
    
    var title = e.target.title.value;
    var img = e.target.img.value;
    var content = e.target.content.value;

    var res = await Blog_Controller.AddPost(title, img, content);

    if (res) {
      alert("Post added Successfully !");
      e.target.reset();
      this.setState({
        ap_imgUrl: null
      });
    } else {
      alert("Somthing went wron. Please Try again...!");
    }
  }

  render() {
    return (
      <div className="ad_b_main">
        <h1 className="mainTitle">Blog</h1>
        <hr />

        <div className="container ad_formContainer">
          <h2 className="subTitle">Add Post</h2>

          <form onSubmit={event => this.addPost(event)}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Title</label>
              <input type="text" name="title" class="form-control" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Image Url</label>
              <input
                type="url"
                name="img"
                class="form-control"
                onChange={event => {
                  this.handleImage(event);
                }}
              />
              {this.state.ap_imgUrl !== null ? (
                <img alt="" src={this.state.ap_imgUrl} />
              ) : null}
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Content</label>
              <textarea class="form-control" rows="3" name="content"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin_Blog;
