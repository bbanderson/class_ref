import React from "react";

export default class ScrollBox extends React.Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    this.style = {
      border: "1px solid black",
      height: "100px",
      width: "100px",
      overflow: "auto"
    };

    this.innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(tomato, royalblue)"
    };
    return (
      <div style={this.style} ref={(ref) => (this.box = ref)}>
        <div style={this.innerStyle} />
      </div>
    );
  }
}
