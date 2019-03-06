import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./material-ui/styles/style_Grid";
import TextField from "./material-ui/components/TextField";
import RadioButton from "./material-ui/components/RadioButton";
import Paper from "@material-ui/core/Paper";
import BottomNav from "./material-ui/components/BottomNav";

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

  insertQuestions = (question, answers, answer_key) => {
    // fetch(
    //   `https://comp4711assignment.herokuapp.com/players/add?name=${name}&score=${score}`
    // )
    fetch(
      `http://localhost:5000/admin/insert?question=${question}&answers=${answers}&answer_key${answer_key}`
    )
      .then(response => response.json())
      .catch(err => console.log(err));
  };

  questionChanged = (idx, newVal) => {
    let temp = this.state.questions;
    temp[idx].question = newVal;
    console.log(temp);
    this.setState({ questions: temp });
  };

  answersChanged = (idx, arr_idx, newVal) => {
    console.log(idx, arr_idx, newVal);
    let temp = this.state.questions;
    // console.log(temp);
    let tempAns = temp[idx].answers.split(",");
    tempAns[arr_idx] = newVal;
    tempAns = tempAns.join(",");
    temp[idx].answers = tempAns;

    console.log(temp);
    // this.setState({ questions: temp });
  };

  answer_keyChanged = (idx, newVal) => {
    console.log("acC");
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
                  value={e.question}
                  questionIndex={i}
                  questionChanged={this.questionChanged}
                  isQuestion={true}
                />
                <RadioButton
                  answers={this.parseAnswers(e.answers)}
                  answer_key={e.answer_key}
                  questionIndex={i}
                  answersChanged={this.answersChanged}
                  answer_keyChanged={this.answer_keyChanged}
                  isAnswers={false}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
        <BottomNav insertQuestions={this.insertQuestions} />
      </div>
    );
  };
}

export default withStyles(styles)(Questions);
