import Config from "./config.js";

class Team {
  constructor() {
    this.apis = {
      getTeamData: "/teams/",
      getMatchesForTeam : "/teams/$tid/matches"
    };
  }

  async getTeamData(teamID) {
    var _teamData = {};

    _teamData = await Config.callAPI(this.apis.getTeamData + teamID);

    return _teamData;
  }

  async getMatchesForTeam(teamID){
    var _matchesData = {};

    var _apiCall = this.apis.getMatchesForTeam.replace("$tid", teamID)

    _matchesData = await Config.callAPI(_apiCall, {per_page : 100});

    return _matchesData;
  }
}

const _team = new Team();

export default _team;
