import Axios from "axios";

class Env {
  constructor() {
    // local server
    this.host = "http://127.0.0.1";
    this.port = ":5500";

    // local APIs
    this.api = {
      pandascore: "/api/sports/data"
    };

    // padascore API
    this.authToken = "nMlBSCdE-IbpXHu9b_PjUUF4p_nMwE7D8mfWHutL5FQAkgTv4W8";
    this.pandascoreHost = "https://api.pandascore.co";

    // request header
    this.ApiCallHeader = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Accept: "application/json"
        // Authorization: "Bearer " + this.authToken
      }
    };
  }

  async callAPI(uri) {
    var _response = [];
    var requestBody = {
      apiuri: uri
    };

    await Axios.post(`${this.host}${this.port}${this.api.pandascore}`, requestBody)
      .then(async response => {
        _response = response.data;
      })
      .catch(async error => {
        console.error(error);
      });

    return _response;
  }

  getCSSImage(img) {
    return `url(${img})`;
  }
}

const _env = new Env();

export default _env;
