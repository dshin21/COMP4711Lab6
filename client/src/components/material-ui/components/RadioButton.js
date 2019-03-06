import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Question";
import PropTypes from "prop-types";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

class mRadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props.classes,
      answers: this.props.answers,
      answer_key: this.props.answer_key,
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.answers !== nextProps.answers) {
      this.setState({ answers: nextProps.answers });
      console.log(nextProps.answers);
    }

    if (this.props.answer_key !== nextProps.answer_key) {
      this.setState({ answer_key: nextProps.answer_key });
      console.log(nextProps.answer_key);
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
              label={this.state.answers[0]}
            />
            <FormControlLabel
              value="b"
              control={<Radio />}
              label={this.state.answers[1]}
            />
            <FormControlLabel
              value="c"
              control={<Radio />}
              label={this.state.answers[2]}
            />
            <FormControlLabel
              value="d"
              control={<Radio />}
              label={this.state.answers[3]}
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
