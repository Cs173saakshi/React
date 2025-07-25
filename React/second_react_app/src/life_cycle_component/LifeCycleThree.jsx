import React, { Component } from "react";
import TimerComponent from "./TimerComponent";

class LifeCycleThree extends Component {
  constructor() {
    super();
    this.state = {
      showTimer: true,
    };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleTimer}>Toggle Timer</button>
        {this.state.showTimer && <TimerComponent />}
      </div>
    );
  }
}

export default LifeCycleThree;
