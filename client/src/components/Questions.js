import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./material-ui/styles/style_Grid";

import TextField from "./material-ui/components/TextField";
import RadioButton from "./material-ui/components/RadioButton";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      classes: this.props.classes,
      questions: []
    };
  }

  getQuestions = _ => {
    fetch("https://comp4711lab6.herokuapp.com/admin/read")
      .then(response => response.json())
      .then(response =>
        this.setState({ questions: [response.data] }, () => {
          console.log(this.state.questions);
        })
      ).catch(err => console.log(err));
  };

  render = () => {
    return (
      <div>
        <Grid
          container
          className={this.state.classes.root}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={6}>
            <Paper
              className={this.state.paper}
              alignitems="center"
              justify="center"
              style={{ padding: 20 }}
            >
              <TextField
                questions={this.state.questions}
                getQuestions={() => this.getQuestions()}
              />
              <RadioButton />
            </Paper>
          </Grid>
        </Grid>
        <br />
      </div>
    );
  };
}

export default withStyles(styles)(Questions);
