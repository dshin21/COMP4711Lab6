import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Button";
import Button from "@material-ui/core/Button";

class mButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props
    };
  }


  render() {
    return (
      <Button
        variant="contained"
        className={this.state.classes.button}
        style={{ marginTop: 20 }}
      >
        Save
      </Button>
    );
  }
}

export default withStyles(styles)(mButton);
