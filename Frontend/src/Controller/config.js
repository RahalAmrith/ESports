import Axios from "axios";
import qs from "query-string";

class Env {
  constructor() {
    // local server
    this.host = "http://176.223.134.186";
    // this.host = "http://127.0.0.1";
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

    this.countryList = require("./Resources/countryList.json");
  }

  getHost() {
    var host = window.location.hostname;
    return "http://" + host;
  }

  async callAPI(uri, params) {
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

  getCurrency(cur) {
    var curString = "";
    if (cur != null && cur != undefined) {
      var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var arr = cur.split(" ");

      arr.map(subStr => {
        if (numArr.indexOf(subStr.charAt(0)) === -1) {
          curString += subStr.charAt(0);
        } else {
          curString += subStr + " ";
        }
      });
    } else {
      curString += " - ";
    }
    return curString;
  }

  parseCountry(code) {
    var country = {
      name: code,
      flag: null
    };

    if (code === null || code === undefined) {
      return country;
    } else {
      this.countryList.map(data => {
        if (data.id.toLowerCase() === code.toLowerCase()) {
          country.name = data.value;
          country.flag = require(`./Resources/flags/${code.toLowerCase()}.svg`);
        }
      });

      return country;
    }
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
