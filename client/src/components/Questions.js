import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./material-ui/styles/style_Grid";
import TextField from "./material-ui/components/TextField";
import RadioButton from "./material-ui/components/RadioButton";
import Paper from "@material-ui/core/Paper";
// import Button from './material-ui/components/Button';
import BottomNav from "./material-ui/components/BottomNav";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      classes: this.props.classes,
      questions: this.props.questions,
      questionCounter: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions !== nextProps.questions) {
      this.setState({ questions: nextProps.questions }, () => {
        this.state.questions.map((e, i) => {
          // console.log(e.question);
        });
      });
      console.log(nextProps.questions);
    }
  }

  parseAnswers = answerString => {
    return answerString.split(",");
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
          {this.state.questions.map((e, i) => (
            <Grid item xs={7} key={"mykey" + i} style={{ marginBottom: 20 }}>
              <Paper
                className={this.state.paper}
                alignitems="center"
                justify="center"
                style={{ padding: 20 }}
              >
                <TextField
                  question={e.question}
                  questionCounter={this.state.questionCounter}
                />
                <RadioButton
                  answers={this.parseAnswers(e.answers)}
                  answer_key={e.answer_key}
                  questionCounter={this.state.questionCounter}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
        <BottomNav />
      </div>
    );
  };
}

export default withStyles(styles)(Questions);
