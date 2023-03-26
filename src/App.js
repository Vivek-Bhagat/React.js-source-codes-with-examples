import React, { Component } from "react";
// import React, { Component } from 'react'
// import logo from './logo.svg';
import "./App.css";
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Goodbye from './components/Goodbye';
// import Hello from './components/Hello';

import Message from "./components/Message";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet /> */}
        {/* <Welcome name="Bruce Banner" heroName="Hulk" />
        <Welcome name="Tony Stark" heroName="Iron Man" />
        <Welcome name="Thor" heroName="God Of Thunder" />

        <Goodbye />
        <Hello />

        <Greet Greet name="Bruce Banner" heroName="Hulk" >
          <p>This is childeren props</p></Greet>

        <Greet Greet name="Tony Stark" heroName="Iron Man" >
          <button>Action</button></Greet>
        < Greet name="Thor" heroName="God Of Thunder" /> */}

        <Message />
      </div>
    );
  }
}

export default App;
