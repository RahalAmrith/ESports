const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routers
const sports_router = require('./app/routes/sports.router'); 
const posts_router = require('./app/routes/posts.router');
const players_router = require('./app/routes/players.router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello"));


app.use("/api/sports", sports_router);
app.use("/api/posts", posts_router);
app.use("/api/players", players_router);


const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`server is running on port ${port}`));

