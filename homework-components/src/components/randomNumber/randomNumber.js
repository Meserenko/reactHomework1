import React from "react";

class RandomNumber extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={(event => this.props.func(Math.random()))}>Push</button>
            </div>
        )
    }
}

export default RandomNumber;