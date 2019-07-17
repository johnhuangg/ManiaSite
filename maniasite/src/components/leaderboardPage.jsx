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
        <div className="text-center">
          <h1>Leaderboard Page</h1>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <NavLink to="/home">
              <button className="btn btn-danger">{"<-Back"}</button>
            </NavLink>
          </div>
        </div>
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
