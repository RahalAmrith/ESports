import Config from "./config.js";

class PUBG {
  constructor() {
    this.apis = {
      listLeagues: "/pubg/leagues",
      listMatches: "/pubg/matches",
      listplayers: "/pubg/players"
    };
  }

  async getleagues() {
    var _leaguesList = [];

    _leaguesList = await Config.callAPI(this.apis.listLeagues);

    return _leaguesList;
  }

  async getMatches() {
    var _matchesList = [];

    _matchesList = await Config.callAPI(this.apis.listMatches);

    return _matchesList;
  }

  async getPlayers() {
    var _playersList = [];

    _playersList = await Config.callAPI(this.apis.listplayers);

    return _playersList;
  }
}

const _pubg = new PUBG();

export default _pubg;
