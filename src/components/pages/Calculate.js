import React, { Component } from 'react';
import EnterWeightValue from '../EnterWeightValues';
import Results from '../Results';
import {Link} from "react-router-dom";

class Calculate extends Component {
    constructor() {
        super();
        this.state = {
            oneRepMax: 0,
            showResults: true
        }
    }

    calculateORM = () => {

    };

    render() {
        return (
            <div id="calc-body">
                <EnterWeightValue/>
                {this.state.showResults && <Results/>}
                <div id="back-home">
                    <Link style={linkStyle} to="/">Back Home</Link>
                </div>
            </div>
        );
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '15pt'
};

export default Calculate;
