import Config from "./config.js";

class LOL {
  constructor() {
    this.apis = {
      listLeagues: "/lol/leagues",
      listTournaments: "/lol/tournaments",
      listMatches: "/lol/matches",
      listplayers: "/lol/players",
      listTeams: "/lol/teams"
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

const _LOL = new LOL();

export default _LOL;
