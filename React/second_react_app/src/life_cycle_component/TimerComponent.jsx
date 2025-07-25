import React, { Component } from "react";

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
    console.log("Constructor Called....");
  }

  componentDidMount() {
    console.log("TimerComponent mounted...");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Component will unmount...Clearing interval");
    clearInterval(this.interval);
  }

  render() {
    console.log("render() method called...");
    return (
      <div>
        <h2>Timer:</h2>
        <h3>Timer: {this.state.seconds} seconds</h3>
      </div>
    );
  }
}

export default TimerComponent;
