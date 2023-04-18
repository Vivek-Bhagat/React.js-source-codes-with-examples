import React from "react";
import { Component } from "react";

class classClick extends Component {

     clickHandler(){
        console.log("clicked")
    }

    
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>clicked</button>
            </div>
        )
    }
}


export default classClick;