import React, { Component } from 'react';
import Week from './Week';

class Results extends Component {
    render() {
        return (
            <div id="results">
                <div id="inner-div">
                    <h1 id="result-title">Results:</h1>
                    <Week/>
                </div>
            </div>
        );
    }
}

export default Results;
