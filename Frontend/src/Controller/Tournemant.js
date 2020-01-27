import Config from "./config.js";

class Tournemant {
  constructor() {
    this.apis = {
      getRecentTournemants: "/tournaments"
    };
  }

  async getRecentTournemants() {
    var _tournemantData = {};

    _tournemantData = await Config.callAPI(this.apis.getRecentTournemants, {
      per_page: 100
    });

    return _tournemantData;
  }
}

const _tournemant = new Tournemant();

export default _tournemant;
