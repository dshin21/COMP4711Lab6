import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Button";
import Button from "@material-ui/core/Button";

class mButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props,
      BtnName: this.props.BtnName,
      color: this.props.color,
      isDelete: this.props.isDelete,
      value: this.props.value
    };
  }

  handleClick = () => {
    if (this.state.isDelete) this.props.deleteQuestion(this.state.value);
    else this.props.updateQuestions();
  };

  render() {
    return (
      <Button
        variant="contained"
        className={this.state.classes.button}
        style={{ marginTop: 20, marginRight: 20 }}
        onClick={() => this.handleClick()}
        color={this.state.color}
      >
        {this.state.BtnName}
      </Button>
    );
  }
}

export default withStyles(styles)(mButton);
