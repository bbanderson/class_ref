import React from "react";
import InputValidation from "./InputValidation";
import { RefType1 } from "./InputRef";
import ScrollBox from "./ScrollBox";

export default class App extends React.Component {
  render() {
    return (
      <>
        <InputValidation />
        <RefType1 />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}
