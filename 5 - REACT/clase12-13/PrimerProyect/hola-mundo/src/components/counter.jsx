import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    handleClick = () => this.setState({
        clickCount: this.state.clickCount + 1
    })
    render() {
        return (
            <div>
                {this.state.clickCount}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}
export default Counter;