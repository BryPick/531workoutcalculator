import React, { Component } from 'react';
import Week from './Week';

class Results extends Component {
    render() {
        return (
            <div id="results">
                <div id="inner-div">
                    <h1 id="result-title">Results:</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Week #</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Percentages</th>
                                <th>Weights (lbs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.weeks.map((week) => {
                                return (
                                    <Week key={week.weekNumber} week={week}/>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }//end render
}//end Results.class

export default Results;
