import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
import Help from "./helpPage";
import Game from "./gamePage";
class Leaderboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Leaderboard Page</h1>
        <NavLink to="/home">
          <button className="btn-danger">{"<-Back"}</button>
        </NavLink>
        <div className="Content">
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
