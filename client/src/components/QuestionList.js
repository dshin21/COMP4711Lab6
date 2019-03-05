import TextField from "./material-ui/components/TextField";
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import RadioButton from "./material-ui/components/RadioButton";
class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questions
    };
  }

  render = () => {
    return this.state.questions.map(obj => {
      return (
        <Grid item xs={6}>
          <Paper
            className={this.state.paper}
            alignitems="center"
            justify="center"
            style={{ padding: 20 }}
          >
            <TextField questions={obj} />
            <RadioButton />
          </Paper>
        </Grid>
      );
    });
  };
}

export default QuestionList;
