import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
class Game extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>THIS IS GAME PAGE</h1>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn btn-info">Z</button>
            <button className="btn btn-info">X</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <NavLink to="/home">
              <button className="btn btn-danger">{"<-Back"}</button>
            </NavLink>
          </div>
        </div>

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
