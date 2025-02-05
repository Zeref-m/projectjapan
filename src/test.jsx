import React from "react";


export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.value = 0;
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: 0
        }
    }

    handleClick(){
        let value = this.state.value + 1;
        this.setState({value})
    }

    render() {
        return (
            <div>
                <h1>Clicked {this.state.value} times!</h1>
                <button onClick={() => this.handleClick()}>Click</button>
            </div>
        )
    }
}