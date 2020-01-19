const rp = require("request-promise");

exports.search = function(req, res) {
  var apiuri = "";
  var params = "";
  apiuri = req.body.apiuri;
  params = req.body.params;
  var token_val = "nMlBSCdE-IbpXHu9b_PjUUF4p_nMwE7D8mfWHutL5FQAkgTv4W8";

  console.log(" ");
  console.log("call : " + apiuri);
  console.log("Params : " + params);
  console.log(" ");

  var url = "https://api.pandascore.co" + apiuri + "?token=" + token_val;
  if (params !== undefined && params !== "" && params !== null) {
    url += "&" + params;
  }

  if (apiuri != "") {
    rp(url)
      .then(function(html) {
        //success!
        console.log("Data fetched successfully");
        console.log(JSON.parse(html).length + " data fetched");
        console.log(" ");
        console.log("================================================");

        res.status(200).send(html);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
