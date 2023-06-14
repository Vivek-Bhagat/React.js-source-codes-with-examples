import React, { Component } from "react";
// import React, { Component } from 'react'
// import logo from './logo.svg';
import "./App.css";
// import PortalDemo from "./components/PortalDemo";
// import InputParent from "./components/InputParent";
// import RefDemo from "./components/RefDemo";
// import PureCompp from "./components/PureCompp";
// import ParentCompp from "./components/ParentCompp";

// import Table from "./components/Table";
// import Fragment from "./components/Fragment";
// import TestForm from "./components/TestForm";
// import LifeCycle from "./components/LifeCycle";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Goodbye from './components/Goodbye';
// import Hello from './components/Hello';

// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Like from "./components/Like";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
//import EventHandler from "./components/EventHandler";
// import ParentComponent from "./components/parentComponent";
// import UserGreeting from "./components/UserGreeting";
// import ListNames from "./components/ListNames";
import Hero from "./components/Hero"
import ErrorBoundry from "./components/ErrorBoundry";

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

        {/* <Message /> */}

        {/* <Counter /> */}
        {/* <Like /> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventHandler /> */}
        {/* < ParentComponent /> */}
        {/* < UserGreeting /> */}
        {/* < ListNames /> */}
        {/* < Stylesheet primary={true} /> */}
        {/* < Inline /> */}
        {/* < TestForm /> */}
        {/* < LifeCycle /> */}
        {/* < Fragment /> */}
        {/* < Table /> */}
        {/* < ParentCompp/> */}
        {/* < RefDemo /> */}
        {/* < InputParent /> */}
        {/* < PortalDemo /> */}

        <ErrorBoundry>
          <Hero heroName="Batman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName="Superman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName="Jocker" />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
