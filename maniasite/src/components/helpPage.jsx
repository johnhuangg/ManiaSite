import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
class Help extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Help Page</h1>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <NavLink to="/home">
                <button className="btn btn-danger">{"<-Back"}</button>
              </NavLink>
            </div>
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

export default Help;
