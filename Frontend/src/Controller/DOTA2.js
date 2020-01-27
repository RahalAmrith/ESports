import Config from "./config.js";

class DOTA2 {
  constructor() {
    this.apis = {
      listLeagues: "/dota2/leagues",
      listTournaments: "/dota2/tournaments",
      listMatches: "/dota2/matches",
      listplayers: "/dota2/players",
      listTeams: "/dota2/teams"
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

const _DOTA2 = new DOTA2();

export default _DOTA2;
