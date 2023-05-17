import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'

 class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'guest'
      }
      console.log("LifeCycle Constructer")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("LifeCycle Did mount")
    }
  render() {
    console.log("LifeCycle render")
    return (
      <div>
        LifeCycleA
        <LifeCycleA />
      </div>
    );
  }
}

export default LifeCycle