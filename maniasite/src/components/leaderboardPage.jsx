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
    console.log("got data");
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data
          });
        }
      })
      .catch(error => {
        console.log(error);
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
            <div className="col-md-12 mx-auto">{this.showUsers()}</div>
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
    if (this.state.users.length > 0) {
      let usersCopy = this.state.users;
      console.log("went here");
      usersCopy.sort((a, b) => b.score - a.score);
      usersCopy = usersCopy.slice(0, 3);
      console.log(usersCopy.length);

      return (
        <ol className="mx-auto">
          {usersCopy.map(user => (
            <li key={user.username}>
              {user.username}: {user.score} BPM
            </li>
          ))}
        </ol>
      );
    } else {
      return (
        <div>
          <p>No scores yet</p>
        </div>
      );
    }
  }
}

export default Leaderboard;
