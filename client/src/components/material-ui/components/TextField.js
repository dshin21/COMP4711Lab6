import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Question";

import { TextField } from "@material-ui/core";

class mTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      classes: this.props,
      questions: []
    };
  }

  render = () => {
    return (
      <div>
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
          label={this.state.questions}
          variant="outlined"
          id="custom-css-outlined-input"
        />
      </div>
    );
  };
}

export default withStyles(styles)(mTextField);
