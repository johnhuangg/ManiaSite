import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
import Help from "./helpPage";
import Game from "./gamePage";
import axios from "axios";
class Leaderboard extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("http://locahhost:5000/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map
        });
      }
    });
  }
  render() {
    return (
      <div>
        <div className="container">
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
        </div>
        <div className="Content">
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
  showUsers() {
    if (this.state.users.data.length > 0) {
    } else {
      return;
    }
  }
}

export default Leaderboard;
