import React, { Component } from 'react';
import update from 'immutability-helper';
import EnterWeightValue from '../EnterWeightValues';
import Results from '../Results';
import {Link} from "react-router-dom";

class Calculate extends Component {
    constructor() {
        super();
        this.state = {
            oneRepMax: 0,
            showResults: false,
            weeks: [
                {
                    weekNumber: 1,
                    sets: "3",
                    reps: "5",
                    percentages: [.65, .75, .85],
                    weights: [],
                },
                {
                    weekNumber: 2,
                    sets: "3",
                    reps: "5",
                    percentages: [.70, .80, .90],
                    weights: [],
                },
                {
                    weekNumber: 3,
                    sets: "3",
                    reps: "5",
                    percentages: [.75, .85, .95],
                    weights: [],
                },
                {
                    weekNumber: 4,
                    sets: "3",
                    reps: "5",
                    percentages: [.40, .50, .60],
                    weights: [],
                },
            ]
        }
    }

    calculateORM = (weight) => {
        this.state.weeks.map((week) => {
            let newArray = [];
            newArray.push(weight * week.percentages[0]);
            newArray.push(weight * week.percentages[1]);
            newArray.push(weight * week.percentages[2]);
            const newWeights = update(week.weights, {$push: newArray});
            this.setState({week: week.weights.concat(newWeights)});
        });
        console.log(this.state.weeks);
    };

    render() {
        return (
            <div id="calc-body">
                <EnterWeightValue calculate={this.calculateORM}/>
                {this.state.showResults && <Results weeks={this.state.weeks}/>}
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
