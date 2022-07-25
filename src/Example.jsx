import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      num: this.state.num + 1
    });
  }
  decrement() {
    this.setState({
      num: this.state.num - 1
    });
  }
  reset() {
    this.setState({
      num: 0
    });
  }

  render() {
    const flag = this.state.num >= 0 ? false : true;
    const style =
      this.state.num >= 0
        ? { backgroundColor: "green" }
        : { backgroundColor: "red" };
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.decrement} disabled={flag} style={style}>
          Decrement
        </button>
        <p>hello {this.state.num}</p>
      </div>
    );
  }
}
export default Example;
