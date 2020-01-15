import Config from "./config.js";
import Axios from "axios";

class PUBG {
  constructor() {
    this.apis = {
      listLeagues: "/pubg/leagues"
    };
  }

  async getleagues() {
    var _leaguesList = [];

    // await Axios.get(`${Config.pandascoreHost}${this.apis.listLeagues}?token=${Config.authToken}`)
    await Axios.get(
      `${Config.pandascoreHost}${this.apis.listLeagues}`,
      Config.ApiCallParams
    )
      .then(async response => {
        _leaguesList = response.data;
      })
      .catch(async error => {
        console.error(error);
      });

    return _leaguesList;
  }
}

const _pubg = new PUBG();

export default _pubg;
