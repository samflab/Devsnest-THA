import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      count2: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  increment1() {
    this.setState({
      count1: this.state.count1 + 1,
    });
  }
  increment2() {
    this.setState({
      count2: this.state.count2 + 1,
    });
  }

  render() {
    return (
      <div>
        <p>All the buttons have their own state</p>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          {this.state.count}
        </button>
        <button
          onClick={() => {
            this.increment1();
          }}
        >
          {this.state.count1}
        </button>

        <button
          onClick={() => {
            this.increment2();
          }}
        >{this.state.count2}</button>
      </div>
    );
  }
}

export default Counter;
