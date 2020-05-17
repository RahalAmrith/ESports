const rp = require("request-promise");

const { Pool } = require("pg");

var db = new Pool({
  // host: "18.220.184.55",
  host: "127.0.0.1",
  user: "esports",
  database: "esports",
  password: "esports@jontyslgaming",
});

db.connect((err, res) => {
  if (err) {
    console.log("failed to connect Database !");
  } else {
    console.log("Database connection success!");
  }
});


class Contact{
    add(req, res) {
        var _name = req.body.name || "";
        var _email = req.body.email || "";
        var _subject = req.body.subject || "";
        var _msg = req.body.msg || "";
        db.query(
          'insert into contacts("name" ,"email", "subject" ,"msg", "date") values($1, $2, $3, $4, current_date )',
          [_name, _email, _subject, _msg]
        )
          .then(results => {
            console.log("Contact added");
    
            res.status(200).send(results);
          })
          .catch(err => {
            console.log(err);
            res.status(400).send(err);
          });
      }
}

module.exports = new Contact();