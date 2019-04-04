import React, { Component } from 'react';
import update from 'immutability-helper';
import EnterWeightValue from '../EnterWeightValues';
import Results from '../Results';
import {Link} from "react-router-dom";

class Calculate extends Component {
    constructor() {
        super();
        this.oldWeeks = {};
        this.state = {
            oneRepMax: 0,
            showResults: false,
            weeks: [
                {
                    weekNumber: 1,
                    sets: "3",
                    reps: [5, 5, 5],
                    percentages: [.65, .75, .85],
                    weights: [],
                },
                {
                    weekNumber: 2,
                    sets: "3",
                    reps: [3, 3, 3],
                    percentages: [.70, .80, .90],
                    weights: [],
                },
                {
                    weekNumber: 3,
                    sets: "3",
                    reps: [5, 3, 1],
                    percentages: [.75, .85, .95],
                    weights: [],
                },
                {
                    weekNumber: 4,
                    sets: "3",
                    reps: [5, 5, 5],
                    percentages: [.40, .50, .60],
                    weights: [],
                },
            ]
        }
    }

    /* Used to calculate One Rep Max
    * @param weight - takes in user preferred weight
    * */
    calculateORM = (weight) => {
        this.clearWeights();
        const newWeeks = [...this.state.weeks];
        let k = 0;
        // Add new weight values for each week
        this.state.weeks.map((week) => {
            // Create new array
            let newArray = [];
            newArray.push(weight * week.percentages[0]);
            newArray.push(weight * week.percentages[1]);
            newArray.push(weight * week.percentages[2]);

            // Push new array for each week
            newWeeks[k].weights = update(week.weights, {$push: newArray});
            this.setState({weeks: newWeeks});
            k++;
        });
        this.setState({showResults: true});
    };//end calculateORM

    /* Function to clear the weights from their respective weeks*/
    clearWeights = () => {
        const newWeeks = [...this.state.weeks];
        let k = 0;
        this.state.weeks.map((week) => {
            newWeeks[k].weights = update(week.weights, {$set: []});
            this.setState({weeks: newWeeks});
            k++;
        });
    };//end clearWeights

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
    }//end render
}//end Calculate.class

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '15pt'
};

export default Calculate;
