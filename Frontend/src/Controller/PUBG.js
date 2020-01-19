import Config from "./config.js";

class PUBG {
  constructor() {
    this.apis = {
      listLeagues: "/pubg/leagues",
      listTournaments: "/pubg/tournaments",
      listMatches: "/pubg/matches",
      listplayers: "/pubg/players",
      listTeams: "/pubg/teams"
    };
  }

  async getleagues() {
    var _leaguesList = [];

    _leaguesList = await Config.callAPI(this.apis.listLeagues, {
      per_page: 100
    });

    return _leaguesList;
  }

  async getTournaments() {
    var _tournamentsList = [];

    _tournamentsList = await Config.callAPI(this.apis.listTournaments, {
      per_page: 100
    });

    return _tournamentsList;
  }

  async getMatches() {
    var _matchesList = [];

    _matchesList = await Config.callAPI(this.apis.listMatches, {
      per_page: 100
    });

    return _matchesList;
  }

  async getPlayers() {
    var _playersList = [];

    _playersList = await Config.callAPI(this.apis.listplayers, {
      per_page: 100
    });

    return _playersList;
  }

  async getTeams() {
    var _teamsList = [];

    _teamsList = await Config.callAPI(this.apis.listTeams, { per_page: 100 });

    return _teamsList;
  }
}

const _pubg = new PUBG();

export default _pubg;
