import React, { Component } from "react";

class TestForm1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "Angular",
    };
  }

  usernameHandler = event => {
    this.setState({
      username: event.target.value,
    });
  };

  commentsHandler = event => {
    this.setState({
      comments: event.target.value,
    });
  };

  topicHandler = event => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault(); //here it saves the previous date to being default
  };
  render() // const{username, comments, topic} = this.state
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameHandler}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.commentsHandler}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.topicHandler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TestForm1;
