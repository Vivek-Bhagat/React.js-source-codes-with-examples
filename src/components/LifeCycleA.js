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

  shouldComponentUpdate() {
    console.log("LifeCycleA component should update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" LifeCylcleA getsnapshotBefore Update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA component getUpdate");
  }
  render() {
    console.log("LifeCycleA render");
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;
