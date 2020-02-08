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
}

const _obj = new Blog();

export default _obj;
