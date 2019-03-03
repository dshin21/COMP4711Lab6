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
      classes: this.props.classes
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl
          component="fieldset"
          className={classes.formControl}
        >
          <RadioGroup
            aria-label="Q1"
            name="Q1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="a" control={<Radio />} label="a) //from db" />
            <FormControlLabel value="b" control={<Radio />} label="b) //from db" />
            <FormControlLabel value="c" control={<Radio />} label="c) //from db" />
            <FormControlLabel value="d" control={<Radio />} label="d) //from db" />
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
