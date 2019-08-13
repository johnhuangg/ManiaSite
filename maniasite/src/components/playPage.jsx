import React, { Component } from "react";
import { Route, Switch, NavLink, Router } from "react-router-dom";
import Home from "./homePage";
import Game from "./gamePage";
class Play extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Play Page</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <NavLink to="/game">
                <button class="btn btn-success">Easy"</button>
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <NavLink to="/game">
                <button class="btn btn-success">Medium</button>
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <NavLink to="/game">
                <button class="btn btn-success">Hard</button>
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-left">
              <NavLink to="/home">
                <button class="btn btn-danger">Back</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/game" component={Game} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Play;
