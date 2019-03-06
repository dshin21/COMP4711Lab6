import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TextField from "./material-ui/components/TextField";
import RadioButton from "./material-ui/components/RadioButton";
class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questions,
      hasReceived: false,
      shop: [
        { id: 35, name: "jumper", color: "red", price: 20 },
        { id: 42, name: "shirt", color: "blue", price: 15 },
        { id: 56, name: "pants", color: "green", price: 25 },
        { id: 71, name: "socks", color: "black", price: 5 },
        { id: 72, name: "socks", color: "white", price: 5 }
      ]
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions !== nextProps.questions) {
      this.setState({ questions: nextProps.questions }, () => {
        this.setState({ questions: nextProps.questions }, () => {
          console.log(nextProps.questions);
        });
      });
    }
  

  render = () => {
    // if (this.state.hasReceived) {
    return (
      // <ol>
      //   {reptiles.map(reptile => (
      //     <li>{reptile}</li>
      //   ))}
      // </ol>
      <Grid
        container
        className={this.state.classes.root}
        alignItems="center"
        justify="center"
      >
        {this.state.questions.map(e => (
          <Grid item xs={6}>
            <Paper
              className={this.state.paper}
              alignitems="center"
              justify="center"
              style={{ padding: 20 }}
            >
              <TextField />
              <RadioButton />
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
    // } else {
    // return (
    // <Grid item xs={6}>
    //   <Paper
    //     className={this.state.paper}
    //     alignitems="center"
    //     justify="center"
    //     style={{ padding: 20 }}
    //   >
    //     <TextField />
    //     <RadioButton />
    //   </Paper>
    // </Grid>
    // <div />;
    // );
    // }
  };
}

export default QuestionList;
