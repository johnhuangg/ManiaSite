import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Help from "./helpPage";
import Leaderboard from "./leaderboardPage";
import { Hash } from "crypto";
import Play from "./playPage";
import Game from "./gamePage";
class Home extends Component {
  //state = {  }
  render() {
    return (
      <HashRouter>
        <div>
          <h1>title page</h1>
          <NavLink to="/play">
            <button class="btn-success">Play</button>
          </NavLink>
          <NavLink to="/leaderboard">
            <button class="btn-success">Leaderboards</button>
          </NavLink>
          <NavLink to="/help">
            <button class="btn-success">Help</button>
          </NavLink>

          {/* <ul className="header">
              <li><a href="/">Home</a></li>
              <li><a href="/stuff">Stuff</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul> */}
          <div className="content">
            <Route path="/play" component={Play} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/help" component={Help} />
            <Route path="/game" component={Game} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Home;
