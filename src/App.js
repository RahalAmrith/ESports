import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import Particles from "react-particles-js";

// views
import NawBar from "./view/common/navbar.js";
import Home from "./view/home/home";

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
        <NawBar />

        <Router>
          <Switch>
            <Route
              path="/"
              exact
              strict
              // component={Landing}
              render={props => <Home {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
