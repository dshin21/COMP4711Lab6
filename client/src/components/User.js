import React, { Component } from "react";
import Questions from "./Questions";
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      questions: []
    };
  }

  componentDidMount = () => {
    this.getQuestions();
  };

  getQuestions = _ => {
    // fetch("https://comp4711lab6.herokuapp.com/admin/read")
    fetch("https://comp4711lab6.herokuapp.com/admin/read")
      .then(response => response.json())
      .then(response => {
        let temp = [];
        for (let obj of response.data) {
          temp.push(obj);
        }
        this.setState({ questions: temp });
      })
      .catch(err => console.log(err));
  };

  render = () => {
    return (
      <div>
        <Questions isUser={true} questions={this.state.questions} />
      </div>
    );
  };
}

export default User;
