import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };

  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrease}> Increase Button </button>
        <button onClick={this.handleDecrease}> Decrease Button </button>
      </div>
    );
  }
}

export default Counter;
