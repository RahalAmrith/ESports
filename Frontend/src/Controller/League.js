import Config from "./config.js";

class League {
  constructor() {
    this.apis = {
      getLeagueData: "/leagues/",
      getMatchesForLeague : "/leagues/$tid/matches"
    };
  }

  async getLeagueData(LeagueID) {
    var _LeagueData = {};

    _LeagueData = await Config.callAPI(this.apis.getLeagueData + LeagueID);

    return _LeagueData;
  }

  async getMatchesForLeague(LeagueID){
    var _matchesData = {};

    var _apiCall = this.apis.getMatchesForLeague.replace("$tid", LeagueID)

    _matchesData = await Config.callAPI(_apiCall, {per_page : 100});

    return _matchesData;
  }
}

const _League = new League();

export default _League;
