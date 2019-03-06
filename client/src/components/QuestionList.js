import React, { Component } from "react";

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questions,
      hasReceived: false
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
  }

  render = () => {
    return <div />;
  };
}

export default QuestionList;
