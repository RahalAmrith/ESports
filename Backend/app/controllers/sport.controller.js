const rp = require("request-promise");

exports.search = function(req, res) {
  var apiuri = "";
  apiuri = req.body.apiuri;
  var token_val = "nMlBSCdE-IbpXHu9b_PjUUF4p_nMwE7D8mfWHutL5FQAkgTv4W8";

  const url = "https://api.pandascore.co" + apiuri + "?token=" + token_val;
  if (apiuri != "") {
    rp(url)
      .then(function(html) {
        //success!
        console.log(apiuri + " fetched successfully");
        console.log(html.length + " data fetched");

        res.status(200).send(html);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
