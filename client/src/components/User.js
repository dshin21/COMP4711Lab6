import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match
    };
  }

  render = () => {
    return <div />;
  };
}

export default User;
