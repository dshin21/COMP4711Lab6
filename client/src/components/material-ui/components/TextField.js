import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import styles from "../styles/style_Question";

class mTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      classes: this.props,
      question: this.props.question
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question !== nextProps.question) {
      this.setState({ question: nextProps.question });
      console.log(nextProps.question);
    }
  }

  render = () => {
    return (
        <TextField
          style={{ width: "100%" }}
          className={this.state.classes.margin}
          InputLabelProps={{
            classes: {
              root: this.state.cssLabel,
              focused: this.state.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: this.state.cssOutlinedInput,
              focused: this.state.cssFocused,
              notchedOutline: this.state.notchedOutline
            }
          }}
          label={"Question"}
          variant="outlined"
          id="custom-css-outlined-input"
          value={this.state.question}
        />
    );
  };
}

export default withStyles(styles)(mTextField);
