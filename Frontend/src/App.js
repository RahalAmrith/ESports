import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import Particles from "react-particles-js";

// views
import NawBar from "./view/common/navbar.js";
import Home from "./view/home/home";
import Footer from "./view/common/footer.js";
import PUBG from "./view/Games/PUBG/PUBG.js";

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
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
