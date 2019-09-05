import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";
import Home from "./homePage";
class Game extends Component {
  state = {
    count: 0,
    time: 5,
    seconds: 5,
    bpm: 0,
    username: "",
    started: false
  };
  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
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
      this.setState({ bpm: this.state.count * 3 });
    }
  }
  onChangeUsername(e) {
    console.log("yeet");
    this.setState({ username: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      score: this.state.bpm
    };

    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));
    this.setState = {
      username: ""
    };
    //window.location = "/leaderboard";
  }
  afterGameRender() {
    if (this.state.seconds === 0) {
      return (
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="badge badge-primary">
                {"BPM: " + this.state.bpm}
              </span>
            </div>
          </div>

          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-4 mx-auto">
                <div className="input-group">
                  <input
                    id="userinput"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter your username..."
                    onChange={this.onChangeUsername}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="form-group">
                  <input
                    id="addbtn"
                    type="submit"
                    value="Submit Score"
                    className="btn btn-primary mb1 bg-red"
                  />
                </div>
              </div>
            </div>
          </form>
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
        <div className="container">
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
            <div className="col-md-4">
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
