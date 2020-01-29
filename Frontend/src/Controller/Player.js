import Config from "./config.js";

class Player {
    constructor(){
        this.apis = {
            getPlayerData: "/players/",
          };
    }

    async getPlayerData(pID){
        var _playerData = {};

        _playerData = await Config.callAPI(this.apis.getPlayerData + pID);
    
        return _playerData;
    }
}

const _player = new Player();

export default _player;