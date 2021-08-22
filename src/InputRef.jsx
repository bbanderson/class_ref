import React from "react";
import "./InputValidation.css";

export class RefType1 extends React.Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };
  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    return (
      <>
        <h4>콜백 ref</h4>
        <input
          ref={(ref) => (this.input = ref)}
          className={
            this.state.clicked && (this.state.validated ? "success" : "failure")
          }
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>검증</button>
      </>
    );
  }
}

export class RefType2 extends React.Component {
  inputRef = React.createRef();
  render() {
    return (
      <>
        <h4>React.createRef</h4>
        <input ref={this.inputRef} />
      </>
    );
  }
}
