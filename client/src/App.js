import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Admin from "./components/Admin.js";
import User from "./components/User.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
          <hr />
          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}
export default App;
