import React from "react";

const Hello = () => {


    //     return (
    //         <div id: 'hello' , className: 'jsxClass'>
    //             <h1>Hello My Buddy</h1>
    //         </div>
    //     )

    // ! by using JSX synatax
    // * return React.createElement(' <string>' , <optional properties> , ' < children of the elements > ')

    // return React.createElement('div', null, <h5>JSX Syntax</h5>)*
    return React.createElement('div', { id: 'hello', className: 'jsxClass' }, React.createElement('h3', null, 'JSX Stntax by react.createElement'))
}



export default Hello