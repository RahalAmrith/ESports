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

class Players {
  add(req, res) {
    var _id = req.body.id || "";
    var _name = req.body.name || "";
    var _fname = req.body.fname || "";
    var _country = req.body.country || "";
    var _totalearning = req.body.totalearning || "";
    var _game = req.body.game || "";
    var _gametotal = req.body.gametotal || "";

    db.query(
      'insert into players(pid, "player_name", "fullname", "country", total_earning, game, game_earning ) values($1, $2, $3, $4, $5, $6,$7);',
      [_id, _name, _fname, _country, _totalearning, _game, _gametotal]
    )
      .then(results => {
        console.log("Player added");

        res.status(200).send(results);
      })
      .catch(err => {
        db.query(
          'UPDATE public.players set "player_name"=$1, "fullname"=$2, "country"=$3, total_earning=$4, game=$5,game_earning=$6 WHERE pid=$7;',
          [_name, _fname, _country, _totalearning, _game, _gametotal, _id]
        )
          .then(results => {
            console.log("Player Updated");

            res.status(200).send(results);
          })
          .catch(err => {
            console.log(err);
            res.status(400).send(err)
            
          });
      });
  }

  list(req, res) {
    var _count = req.body.count || 500;

    db.query(
      'select * FROM players ORDER BY total_earning desc limit $1;',
      [_count]
    )
      .then(results => {
        res.status(200).send(results.rows);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err)
        
      });
  }
}

module.exports = new Players();
