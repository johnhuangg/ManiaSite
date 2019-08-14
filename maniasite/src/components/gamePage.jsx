import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
class Game extends Component {
  state = {
    z: 0,
    x: 0
  };
  componentDidMount() {
    document.addEventListener("keyPress", this.onKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keyPress", this.onKeyPressed);
  }
  handleIncrementZ() {
    console.log("added to Z");
    //z++;
  }
  handleIncrementX() {
    console.log("added to X");
    //z++;
  }
  handleButtonPressZ = event => {
    if (event.keyCode === 90) {
      this.handleIncrementZ();
      console.log("added to X");
    }
  };
  handleButtonPressX = event => {
    console.log(event.keyCode);
    if (event.keyCode === 88) {
      this.handleIncrementX();
    }
  };
  handleButtonPress() {
    console.log("worked");
  }
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>THIS IS GAME PAGE</h1>
        </div>
        <div className="row" onKeyPress={this.handleButtonPressX} tabIndex="0">
          <div className="col-md-12 text-center">
            <button onClick={this.handleButtonPressX} className="btn btn-info">
              Z
            </button>
            <button
              onKeyPress={this.handleButtonPress}
              className="btn btn-info"
            >
              X
            </button>
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
