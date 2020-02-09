import Config from "./config";
import Axios from "axios";

class Blog {
  constructor() {
    this.api = {
      listPosts: "/api/posts/list",
      getPost: "/api/posts/get",
      addPost: "/api/posts/add"
    };
  }

  async getPostList() {
    var results;

    await Axios.post(`${Config.host}${Config.port}${this.api.listPosts}`)
      .then(Response => {
        results = Response.data;
      })
      .catch(error => {
        console.log(error);
        results = [];
      });

    return results;
  }

  async AddPost(_title, _img, _content) {
    var PostData = {
      title: _title,
      img: _img,
      content: _content
    };

    var results;

    await Axios.post(
      `${Config.host}${Config.port}${this.api.addPost}`,
      PostData
    )
      .then(Response => {
        results = true;
      })
      .catch(error => {
        results = false;
      });

    return results;
  }
}

const _obj = new Blog();

export default _obj;
