import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./material-ui/styles/style_Grid";
import QuestionList from "./QuestionList";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      classes: this.props.classes,
      questions: this.props.questions
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions !== nextProps.questions) {
      this.setState({ questions: nextProps.questions });
    }
  }

  render = () => {
    return (
      <div>
        <Grid
          container
          className={this.state.classes.root}
          alignItems="center"
          justify="center"
        >
          <QuestionList questions={this.state.questions} />
        </Grid>
        <br />
      </div>
    );
  };
}

export default withStyles(styles)(Questions);
