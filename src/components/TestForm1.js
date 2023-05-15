import React, { Component } from "react";

class TestForm1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
    };
  }

  usernameHandler = event => {
    this.setState({
      username: event.target.value,
    });
  };

  commentsHandler = (event) => {
    this.setState({
        comments: event.target.value
    })
  }
  render() {
    return (
      <form>
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
          ></textarea>
        </div>
      </form>
    );
  }
}

export default TestForm1;
