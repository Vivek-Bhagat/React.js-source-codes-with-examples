import React from "react";

function Colum() {
  return (
    // * by using fragment we can avoid the warning error in the console.
    <React.Fragment>
      <td>User</td>
      <td>Guest</td>
    </React.Fragment>
  );
}

export default Colum;
