import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import Particles from "react-particles-js";

// views
import NawBar from "./view/common/navbar.js";
import Home from "./view/home/home";
import Footer from "./view/common/footer.js";
// games
import PUBG from "./view/Games/PUBG/PUBG.js";
import LOL from "./view/Games/LOL/LOL.js";
import DOTA2 from "./view/Games/DOTA2/DOTA2.js";
import CSGO from "./view/Games/CSGO/CSGO.js";
import Overwatch from "./view/Games/Overwatch/Overwatch.js";

// common
import Team from "./view/Team/Team.js";
import Player from "./view/Player/Player.js";
import BlogPost from "./view/Blog/BlogPost.js";

import Earnings from './view/Earnnings/Earnnings.js'

// admin components
import Admin from "./view/Admin/Admin.js";
import AdminBlog from "./view/Admin/Blog/Admin.Blog.js";
import UpdatePlayers from "./view/Admin/Players/UpdatePlayers.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    // particlesJS.load('particles-js');
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NawBar />
          <Switch>
            <Route
              path="/"
              exact
              strict
              // component={Landing}
              render={props => <Home {...props} />}
            />
            <Route
              path="/games/pubg"
              exact
              strict
              // component={Landing}
              render={props => <PUBG {...props} />}
            />
            <Route
              path="/games/lol"
              exact
              strict
              // component={Landing}
              render={props => <LOL {...props} />}
            />
            <Route
              path="/games/dota2"
              exact
              strict
              // component={Landing}
              render={props => <DOTA2 {...props} />}
            />
            <Route
              path="/games/overwatch"
              exact
              strict
              // component={Landing}
              render={props => <Overwatch {...props} />}
            />
            <Route
              path="/games/csgo"
              exact
              strict
              // component={Landing}
              render={props => <CSGO {...props} />}
            />
            <Route
              path="/earnings"
              exact
              strict
              // component={Landing}
              render={props => <Earnings {...props} />}
            />
            <Route
              path="/team/:id"
              exact
              strict
              // component={Landing}
              render={props => <Team {...props} />}
            />
            <Route
              path="/player/:id"
              exact
              strict
              // component={Landing}
              render={props => <Player {...props} />}
            />
            <Route
              path="/blog/post/:id"
              exact
              strict
              // component={Landing}
              render={props => <BlogPost {...props} />}
            />
            <Route
              path="/admin"
              strict
              exact
              // component={Landing}
              render={props => <Admin {...props} />}
            />
            <Route
              path="/admin/Blog"
              exact
              strict
              // component={Landing}
              render={props => <AdminBlog {...props} />}
            />
            <Route
              path="/players/update"
              exact
              strict
              // component={Landing}
              render={props => <UpdatePlayers {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
