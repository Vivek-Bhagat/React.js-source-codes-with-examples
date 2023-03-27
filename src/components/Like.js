import React, { Component } from "react";

class Like extends Component {
    constructor() {
        super();
        this.state = {
            message: "new post here",
        };
    }

    changeMessage() {
        this.setState({
            message: 'My like is increased',
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Like</button>
            </div>
        );
    }
}

export default Like;
