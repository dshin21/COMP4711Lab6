import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Question";
import PropTypes from "prop-types";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "./TextField";

class mRadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props.classes,
      answers: this.props.answers,
      answer_key: this.props.answer_key,
      questionIndex: this.props.questionIndex
    };
  }

  handleChange = event => {
    this.setState({ answer_key: event.target.value }, () => {
      this.props.answer_keyChanged(
        this.state.questionIndex,
        this.state.answer_key
      );
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.answers !== nextProps.answers) {
      this.setState({ answers: nextProps.answers });
    }

    if (this.props.answer_key !== nextProps.answer_key) {
      this.setState({ answer_key: nextProps.answer_key });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Q"
            name="Q"
            className={classes.group}
            value={this.state.answer_key}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="a"
              control={<Radio />}
              label={
                <TextField
                  questionIndex={this.state.questionIndex}
                  answersChanged={this.props.answersChanged}
                  value={this.state.answers[0]}
                  answers_idx={0}
                />
              }
            />
            <FormControlLabel
              value="b"
              control={<Radio />}
              label={
                <TextField
                  questionIndex={this.state.questionIndex}
                  answersChanged={this.props.answersChanged}
                  value={this.state.answers[1]}
                  answers_idx={1}
                />
              }
            />
            <FormControlLabel
              value="c"
              control={<Radio />}
              label={
                <TextField
                  questionIndex={this.state.questionIndex}
                  answersChanged={this.props.answersChanged}
                  value={this.state.answers[2]}
                  answers_idx={2}
                />
              }
            />
            <FormControlLabel
              value="d"
              control={<Radio />}
              label={
                <TextField
                  questionIndex={this.state.questionIndex}
                  answersChanged={this.props.answersChanged}
                  value={this.state.answers[3]}
                  answers_idx={3}
                />
              }
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

mRadioButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(mRadioButton);
