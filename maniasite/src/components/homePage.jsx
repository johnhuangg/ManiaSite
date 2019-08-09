import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Help from "./helpPage";
import Leaderboard from "./leaderboardPage";
import { Hash } from "crypto";
import Play from "./playPage";
import Game from "./gamePage";
class Home extends Component {
  //state = {  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="col-md-12 text-center">
            <h1>MANIA COPYYYY</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <NavLink to="/play">
                  <button className="btn btn-success">Play</button>
                </NavLink>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <NavLink to="/leaderboard">
                  <button className="btn btn-success">Leaderboards</button>
                </NavLink>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <NavLink to="/help">
                  <button className="btn btn-success">Help</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="content">
            <Route path="/play" component={Play} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/help" component={Help} />
            <Route path="/game" component={Game} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
