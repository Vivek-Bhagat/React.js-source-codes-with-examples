import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "guest",
    };
    console.log("LifeCycleA Constructer");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA Did mount");
  }
  render() {
    console.log("LifeCycle render");
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;
