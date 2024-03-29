import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Button";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Button from "./Button";

class mBottomNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props,
      question: this.props.question,
      isUser: this.props.isUser
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        {this.state.isUser ? (
          <Button
            color="secondary"
            determineScore={this.props.determineScore}
            BtnName={"Submit"}
            isUser={this.state.isUser}
          />
        ) : (
          <div>
            <Button
              color="secondary"
              insertQuestions={this.props.insertQuestions}
              BtnName={"Add"}
              isAdd={true}
            />
            <Button 
              color="primary"
              updateQuestions={this.props.updateQuestions}
              BtnName={"Save"}
              isSave={true}
            />
          </div>
        )}
      </BottomNavigation>
    );
  }
}

mBottomNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(mBottomNav);
