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
      value: this.props.value,
      isQuestion: this.props.isQuestion,
      questionIndex: this.props.questionIndex,
      answers_idx: this.props.answers_idx
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value }, () => {
      if (this.state.isQuestion) {
        this.props.questionChanged(this.state.questionIndex, this.state.value);
      } else {
        this.props.answersChanged(
          this.state.questionIndex,
          this.state.answers_idx,
          this.state.value
        );
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
      // console.log(nextProps.value);
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
        label={this.state.isQuestion ? "Question" : ""}
        variant="outlined"
        id="custom-css-outlined-input"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  };
}

export default withStyles(styles)(mTextField);
