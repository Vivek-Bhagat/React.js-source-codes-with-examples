import React, { Component } from 'react';
// import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Goodbye from './components/Goodbye';
class App extends Component {
  render() {

    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Goodbye />
      </div>
    );
  }
}

export default App;
