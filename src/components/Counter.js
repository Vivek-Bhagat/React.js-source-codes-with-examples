import React, { Component } from 'react'


class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // ! here we incremented the value +1
        // this.setState({
        //     count: this.state.count + 1
        // }, () =>
        //     console.log('Callback value', this.state.count)
        // )

        // !we dont use this type of syntax for increment bcz it doesn't increment the real value in page.
        // eslint-disable-next-line react/no-direct-mutation-state
        // this.state.count = this.state.count + 1


        //* we use these synatx for increment of five or any nummber using previous state
        this.setState((prevState, props) => ({
            count: prevState.count + 5
        }))

        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter