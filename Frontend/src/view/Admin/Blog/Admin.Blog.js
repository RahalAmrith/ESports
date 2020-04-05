import React, { Component } from "react";

// libraries
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "../../assets/Admin/Blog/Admin.Blog.css";

// controllers
import Blog_Controller from "../../../Controller/Blog.js";

class Admin_Blog extends Component {
  constructor() {
    super();
    this.state = {
      // addPost
      ap_imgUrl: null,

      // html editor
      htmlContent: null
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

  onEditorStateChange(editorState) {
    var res = convertToRaw(editorState.getCurrentContent());

    this.setState({
      htmlContent : res
    });
    console.log(this.state);
  }

  async addPost(e) {
    e.persist();
    e.preventDefault();

    var title = e.target.title.value;
    var img = e.target.img.value;
    var description = e.target.content.value;
    var content = this.state.htmlContent

    var res = await Blog_Controller.AddPost(title, img,description, content);

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
    const { editorState } = this.state;
    return (
      <div className="ad_b_main">
        <h1 className="mainTitle">Blog</h1>
        <hr />

        <div className="container ad_formContainer">
          <h2 className="subTitle">Add Post</h2>

          <form onSubmit={event => this.addPost(event)}>
            <div class="form-group">
              <label>Title</label>
              <input type="text" name="title" class="form-control" />
            </div>
            <div class="form-group">
              <label>Image Url</label>
              <input
                type="url"
                name="img"
                class="form-control"
                onChange={event => {
                  this.handleImage(event);
                }}
              />
              {this.state.ap_imgUrl !== null ? (
                <img title="" alt="Esports earnings  " src={this.state.ap_imgUrl} />
              ) : null}
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea class="form-control" rows="3" name="content"></textarea>
            </div>

            <div class="form-group  AD_B_htmlEditor">
              <label for="exampleFormControlInput1">Content</label>
              <Editor
                // editorState={editorState}
                toolbarClassName="bp_content_toolbar"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={editorState =>
                  this.onEditorStateChange(editorState)
                }
              />
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
