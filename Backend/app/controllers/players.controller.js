const rp = require("request-promise");

const { Pool } = require("pg");

var db = new Pool({
  // host: "18.220.184.55",
  host: "127.0.0.1",
  user: "esports",
  database: "esports",
  password: "esports@jontyslgaming"
});

db.connect((err, res) => {
  if (err) {
    console.log("failed to connect Database !");
  } else {
    console.log("Database connection success!");
  }
});


class Players{

    add(req, res){
        var _id = req.body.id || "";
        var _name = req.body.name || "";
        var _fname = req.body.fname || "";
        var _country = req.body.country || "";
        var _totalearning = req.body.totalearning || "";
        var _game = req.body.game || "";
        var _gametotal = req.body.gametotal || "";


        db.query('')
    }
}