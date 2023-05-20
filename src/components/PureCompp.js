import React, { PureComponent } from "react";

class PureCompp extends PureComponent {
  render() {
    console.log("Pure component render");

    return (
      <>
        <p>Pure Component {this.props.name}</p>

      </>
    );
  }
}

export default PureCompp;
