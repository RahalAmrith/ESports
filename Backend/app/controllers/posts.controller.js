const rp = require("request-promise");

const { Pool } = require("pg");

var db = new Pool({
  // host: "18.220.184.55",
  // host: "127.0.0.1",
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

class Post {
  list(req, res) {
    console.log("listing posts");
    db.query("SELECT * FROM blog order by rid desc")
      .then(result => {
        res.status(200).send(result.rows);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPost(req, res) {
    if (req.body.rid) {
      db.query(`SELECT * FROM blog WHERE rid=$1`, [req.body.rid])
        .then(result => {
          res.status(200).send(result.rows);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  addPost(req, res) {
    var _title = req.body.title || "";
    var _img = req.body.img || "";
    var _description = req.body.description || "";
    var _content = req.body.content || "";
    db.query(
      'insert into blog("title" ,"img", "description" ,"content", "date") values($1, $2, $3, $4, current_date )',
      [_title, _img, _description, _content]
    )
      .then(results => {
        console.log("post added");

        res.status(200).send(results);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      });
  }
}

module.exports = new Post();
