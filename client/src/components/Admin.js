import React, { Component } from "react";
import Questions from "./Questions";
class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match
    };
  }

  render = () => {
    return (
      <div>
        <Questions />
      </div>
    );
  };
}

export default Topic;
