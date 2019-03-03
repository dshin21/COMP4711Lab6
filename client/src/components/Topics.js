import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Topic from "./Topic.js";

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match
    };
  }
  render = () => {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.state.match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${this.state.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.state.match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${this.state.match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={this.state.match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  };
}

export default Topics;
