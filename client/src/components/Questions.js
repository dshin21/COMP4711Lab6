import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./material-ui/styles/style_Grid";
import TextField from "./material-ui/components/TextField";
import RadioButton from "./material-ui/components/RadioButton";
import Paper from "@material-ui/core/Paper";
import BottomNav from "./material-ui/components/BottomNav";
import Button from "./material-ui/components/Button";
import SnackBar from "./material-ui/components/SnackBar";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      classes: this.props.classes,
      questions: this.props.questions,
      isUpdate: false,
      snackDeleted: false,
      snackSaved: false,
      isUser: this.props.isUser,
      userAnswer: [],
      userScore: 0,
      quizFinished: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions !== nextProps.questions) {
      this.setState({ questions: nextProps.questions });
      console.log(nextProps.questions);
    }
  }

  parseAnswers = answerString => {
    return answerString.split(",");
  };

  insertQuestions = () => {
    let temp = {
      question: "",
      answers: "",
      answer_key: ""
    };
    let tempState = this.state.questions;
    tempState.push(temp);
    console.log(tempState);
    this.setState({ question: tempState });
  };

  updateQuestions = () => {
    fetch(`https://comp4711lab6.herokuapp.com/admin/truncate`)
      .then(response => response.json())
      .catch(err => console.log(err));

    this.state.questions.map(e => {
      fetch(
        `https://comp4711lab6.herokuapp.com/admin/insert?question=${e.question}&answers=${
          e.answers
        }&answer_key=${e.answer_key}`
      )
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log(e.answers);
    });
    this.setState({ snackSaved: true, state: this.state });
  };

  deleteQuestion = (question, idx) => {
    fetch(`https://comp4711lab6.herokuapp.com/admin/delete?question=${question}`)
      .then(response => response.json())
      .catch(err => console.log(err));
    let temp = this.state.questions;
    temp.splice(idx, 1);
    console.log(temp);
    this.setState({ snackDeleted: true, question: temp });
  };

  questionChanged = (idx, newVal) => {
    let temp = this.state.questions;
    temp[idx].question = newVal;
    this.setState({ questions: temp });
  };

  answersChanged = (idx, arr_idx, newVal) => {
    let temp = this.state.questions;
    let tempAns = temp[idx].answers.split(",");
    tempAns[arr_idx] = newVal;
    tempAns = tempAns.join(",");
    temp[idx].answers = tempAns;
    this.setState({ questions: temp });
  };

  answer_keyChanged = (idx, newVal) => {
    let temp = this.state.questions;
    temp[idx].answer_key = newVal;
    this.setState({ questions: temp });
  };

  determineScore = () => {
    let tempScore = 0;
    for (let i = 0; i < this.state.questions.length; i++) {
      console.log(this.state.questions[i].answer_key);
      console.log(this.state.userAnswer);
      if (this.state.questions[i].answer_key == this.state.userAnswer[i]) {
        tempScore++;
      }
    }
    this.setState({ userScore: tempScore, quizFinished: true }, () => {
      console.log(this.state.userScore);
    });
  };

  getUserAnswer = (userAns, idx) => {
    let temp = this.state.userAnswer;
    temp[idx] = userAns;
    this.setState({ userAnswer: temp });
  };

  render = () => {
    return (
      <div>
        {this.state.isUser && this.state.quizFinished ? (
          <SnackBar
            isUser={this.state.isUser}
            open={true}
            val={`Your Score is: ${this.state.userScore /
              (this.state.questions.length + 1)}`}
          />
        ) : (
          ""
        )}
        {this.state.snackDeleted ? (
          <SnackBar open={true} val={"Deleted Successfully!"} />
        ) : (
          ""
        )}
        {this.state.snackSaved ? (
          <SnackBar open={true} val={"Saved Successfully!"} />
        ) : (
          ""
        )}
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
                  isUser={this.state.isUser}
                />
                <RadioButton
                  answers={this.parseAnswers(e.answers)}
                  answer_key={e.answer_key}
                  questionIndex={i}
                  answersChanged={this.answersChanged}
                  answer_keyChanged={this.answer_keyChanged}
                  getUserAnswer={this.getUserAnswer}
                  isAnswers={false}
                  isUser={this.state.isUser}
                />
                {this.state.isUser ? (
                  ""
                ) : (
                  <Button
                    BtnName="Delete"
                    value={e.question}
                    idx={i}
                    deleteQuestion={this.deleteQuestion}
                    isDelete={true}
                  />
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <BottomNav
          insertQuestions={this.insertQuestions}
          updateQuestions={this.updateQuestions}
          determineScore={this.determineScore}
          isUser={this.state.isUser}
        />
      </div>
    );
  };
}

export default withStyles(styles)(Questions);
