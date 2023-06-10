import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = element =>{
      this.cbRef = element
    }
  }

  componentDidMount() {
    
    if(this.cbRef){
      this.cbRef.focus()
    }
    else{
      this.inputRef.current.focus();
      console.log(this.inputRef);
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setcbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default RefDemo;
