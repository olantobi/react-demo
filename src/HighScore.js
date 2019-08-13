import React, { Component } from 'react';

class HighScore extends Component {

    render() {
        return (
            (this.props.overTen) ? <h3>
                Wow, you just beat the high score of 10!
                <button onClick={this.props.onReset}>Reset</button>
            </h3> : null
        );

    }
}

export default HighScore;
