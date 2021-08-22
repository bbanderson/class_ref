import React from "react";
import "./InputValidation.css";

export default class InputValidation extends React.Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  handleClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
  };
  render() {
    return (
      <div>
        <h4>단순 state</h4>
        <input
          className={
            this.state.clicked && (this.state.validated ? "success" : "failure")
          }
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>검증</button>
      </div>
    );
  }
}
