import React, { Component } from "react";
import LifeCycleA from "./LifeCycleA";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "guest",
    };
    console.log("LifeCycle Constructer");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle Did mount");
  }

  shouldComponentUpdate(){
    console.log("LifeCycle component should update")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(" LifeCylcle getsnapshotBefore Update")
    return null;
  }

  componentDidUpdate(){
    console.log("Lifecycle component getUpdate")
  }

  changeState = ()=>{
    this.setState({
      name:'User'
    })
  }
  render() {
    console.log("LifeCycle render");
    return (
      <div>
        LifeCycle
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleA />
      </div>
    );
  }
}

export default LifeCycle;
