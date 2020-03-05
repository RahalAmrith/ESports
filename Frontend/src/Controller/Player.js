import Config from "./config.js";

import Axios from "axios";
import qs from "query-string";

class Player {
  constructor() {
    this.apis = {
      getPlayerData: "/players/",
      DB_add: "/api/players/add",
      DB_list: "/api/players/list"
    };
  }

  async getPlayerData(pID) {
    var _playerData = {};

    _playerData = await Config.callAPI(this.apis.getPlayerData + pID);

    return _playerData;
  }
  async getPlayersList() {
    var _playerData = {};

    _playerData = await Config.callAPI(this.apis.getPlayerData);

    return _playerData;
  }

  async DB_add(data) {
    await Axios.post(`${Config.host}${Config.port}${this.apis.DB_add}`, data)
      .then(async response => {
        console.log(response.data);
      })
      .catch(async error => {
        console.error(error);
      });
  }
  async DB_list(_count) {
    var list = [];
    var reqData = {
      count: _count
    };
    await Axios.post(
      `${Config.host}${Config.port}${this.apis.DB_list}`,
      reqData
    )
      .then(async response => {
        console.log(response.data);
        list = response.data;
      })
      .catch(async error => {
        console.error(error);
      });

    return list;
  }
}

const _player = new Player();

export default _player;
