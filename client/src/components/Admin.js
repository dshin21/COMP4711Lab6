import React, { Component } from "react";
import Questions from "./Questions";
class Topic extends Component {
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
    fetch("http://localhost:5000/admin/read")
      .then(response => response.json())
      .then(
        response =>
          // this.setState(
          //   (state, props) => {
          //     return { questions: JSON.parse(JSON.stringify(response.data)) };
          //   },
          {
            // console.log(JSON.parse(JSON.stringify(response.data)));
            // console.log(this.questions);
            let temp = [];
            for (let obj of response.data) {
              temp.push(obj);
              // console.log(obj);
            }
            this.setState({ questions: temp });
          }
        // }
        // )
      )
      .catch(err => console.log(err));
  };

  render = () => {
    return (
      <div>
        <Questions
          questions={this.state.questions}
          // getQuestions={() => this.getQuestions()}
        />
      </div>
    );
  };
}

export default Topic;
