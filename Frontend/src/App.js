import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import Particles from "react-particles-js";

// views
import NawBar from "./view/common/navbar.js";
import Home from "./view/home/home";
import Footer from "./view/common/footer.js";
import PUBG from "./view/Games/PUBG/PUBG.js";
import LOL from "./view/Games/LOL/LOL.js";
import DOTA2 from "./view/Games/DOTA2/DOTA2.js";
import Overwatch from "./view/Games/Overwatch/Overwatch.js";
import Team from "./view/Team/Team.js";
import _LOL from "./Controller/LOL";

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
              path="/team/:id"
              exact
              strict
              // component={Landing}
              render={props => <Team {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
