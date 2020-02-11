import Axios from "axios";
import qs from "query-string";

class Env {
  constructor() {
    // local server
    this.host = "http://176.223.134.186";
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

  getHost() {
    var host = window.location.hostname;
    return "http://" + host;
  }

  async callAPI(uri, params) {
    console.log("calling apis");
    
    var _response = [];
    var requestBody = {
      apiuri: uri
      // params : qs.stringifyUrl(params)
    };

    if (params !== null && params !== undefined) {
      if (Object.keys(params).length > 0) {
        requestBody.params = qs.stringify(params);
      }
    }

    await Axios.post(
      // `${this.getHost()}${this.port}${this.api.pandascore}`,
      `${this.host}${this.port}${this.api.pandascore}`,
      requestBody
    )
      .then(async response => {
        console.log(response);
        
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



// ==================================================

/*
esports db

host : 18.220.184.55
port : 5432
username : esports
password : esports@jontyslgaming
db : esports

*/