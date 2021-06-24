import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nullish coalescing operator
      // Оператор нулевого слияния (??)
      // если this.props.initialCount не null/undefined? то он
      // иначе 0
      count: this.props.initialCount ?? 0,
    };
    this.inc = this.inc.bind(this);
  }

  dec = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // этот метод необходимо байндить
  inc() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.dec}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}
