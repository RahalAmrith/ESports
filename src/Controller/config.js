class Env {
  constructor() {
    this.authToken = "nMlBSCdE-IbpXHu9b_PjUUF4p_nMwE7D8mfWHutL5FQAkgTv4W8";
    this.ApiCallParams = {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + this.authToken
      }
    };
    this.pandascoreHost = "https://api.pandascore.co";
  }

  getCSSImage(img) {
    return `url(${img})`;
  }
}

const _env = new Env();

export default _env;
