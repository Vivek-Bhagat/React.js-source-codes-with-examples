import React, { Component } from 'react'
import './myStyle.css' 


 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrementValue = () =>{
        this.setState(prevState =>{
            return { count: prevState.count + 1 };
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <button  onMouseOver={this.incrementValue}>Hover {count}    times</button>
      </div>
    )
  }
}

export default HoverCounter