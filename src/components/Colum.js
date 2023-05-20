import React from "react";

function Colum() {
    const items =[]
  return (
    // * by using fragment we can avoid the warning error in the console.
    <React.Fragment>
        {
            items.map( items =>(
                <React.Fragment key={items.id}>
                    <h1>Title</h1>
                    <p>{items.map}</p>
                    </React.Fragment>
            ))
        }
        
      <td>User</td>
      <td>Guest</td>
    </React.Fragment>
  );
}

export default Colum;
