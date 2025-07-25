import React, { Component } from "react";

class LifecycleSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    console.log("Constructor Called....");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps() called....");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() called...");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate() called...");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate() called...");
  }

  componentDidMount() {
    console.log("componentDidMount() method called...");
  }

  render() {
    console.log("render() method called...");
    return (
      <div>
        <h1>Updating Phase</h1>
        <h2>Value: {this.state.value}</h2>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleSecond;
