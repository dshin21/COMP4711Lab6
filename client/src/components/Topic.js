import React, { Component } from "react";

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
        <h3>{this.state.match.params.topicId}</h3>
      </div>
    );
  };
}

export default Topic;
