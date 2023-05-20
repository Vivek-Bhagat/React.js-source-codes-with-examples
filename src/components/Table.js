import React, { Component } from "react";
import Colum from "./Colum";

class Table extends Component {
  render() {
    return (
      // * by using fragment we can avoid the warning error in the console
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <Colum />
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
