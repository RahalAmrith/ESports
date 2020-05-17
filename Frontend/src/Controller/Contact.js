import Config from "./config";
import Axios from "axios";

class Contact {
  constructor() {
    this.api = {
      addPost: "/api/contact/add"
    };
  }



  async Add(_name, _email, _description, _msg) {
    var PostData = {
      name: _name,
      email: _email,
      subject: _msg,
      msg: _description
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

const _obj = new Contact();

export default _obj;
