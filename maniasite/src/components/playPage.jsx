import React, { Component } from "react";
import { Route, Switch, NavLink, HashRouter } from "react-router-dom";
import Home from "./homePage";
import Game from "./gamePage";
class Play extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Play Page</h1>
          <NavLink to="/home">
            <button class="btn-success">Back</button>
          </NavLink>
          <NavLink to="/game">
            <button class="btn-success">Easy"</button>
          </NavLink>
          <NavLink to="/game">
            <button class="btn-success">Medium</button>
          </NavLink>
          <NavLink to="/game">
            <button class="btn-success">Hard</button>
          </NavLink>
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/game" component={Game} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Play;
