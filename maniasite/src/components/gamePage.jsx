import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
class Game extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>THIS IS GAME PAGE</h1>
        <NavLink to="/home">
          <button className="btn-danger">{"<-Back"}</button>
        </NavLink>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Game;
