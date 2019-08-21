import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./homePage";
class Game extends Component {
  state = {
    count: 0,
    time: 5,
    seconds: 5,
    started: false
  };
  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed);
  }
  handleIncrement = () => {
    console.log("added to Z");
    if (this.state.seconds > 0) {
      this.setState({ count: this.state.count + 1 });
    }
    if (!this.state.started) {
      this.setState({ started: true }, () => {
        console.log(this.state.started);
      });
      //console.log(this.state.started);
      this.startTimer();
      console.log("started method" + this.state.started);
    }
    //z++;
  };

  handleButtonPress = event => {
    console.log(event.keyCode + "working");
    if (event.keyCode === 88 || event.keyCode === 90) {
      this.handleIncrement();
    }
  };
  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }
  countDown() {
    this.setState({
      seconds: this.state.seconds - 1
    });
    if (this.state.seconds == 0) {
      clearInterval(this.timer);
    }
  }

  afterGameRender() {
    if (this.state.seconds === 0) {
      return (
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="badge badge-primary">
                {"BPM: " + this.state.count * 3}
              </span>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4 mx-auto">
              <div class="input-group">
                <input
                  id="userinput"
                  type="text"
                  class="form-control"
                  placeholder="Enter your username..."
                  autofocus
                />
                <span class="input-group-append">
                  <button
                    id="addbtn"
                    type="button"
                    class="btn btn-primary mb1 bg-red"
                  >
                    Add
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div
        onKeyDown={this.handleButtonPress}
        tabIndex="0"
        style={{ outline: 0 }}
      >
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
          <div className="col-md-12 text-center">
            <span className="badge badge-primary">
              {" "}
              {"Score: " + this.formatCount()}{" "}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="badge badge-primary">
              {" "}
              {"Time: " + this.formatSeconds()}{" "}
            </span>
          </div>
        </div>
        <div>{this.afterGameRender()}</div>
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
  formatCount() {
    const { count } = this.state;
    return count;
  }
  formatSeconds() {
    const { seconds } = this.state;
    return seconds;
  }
}

export default Game;
