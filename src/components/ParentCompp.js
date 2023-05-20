import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureCompp from "./PureCompp";

export class ParentCompp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "User",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        Parent Component.
        <RegularComp name={this.state.name}></RegularComp>
        <PureCompp name={this.state.name}></PureCompp>
      </div>
    );
  }
}

export default ParentCompp;
