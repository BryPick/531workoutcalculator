import React, { Component } from 'react';

class Week extends Component {
    render() {
        const {weekNumber, sets, reps, percentages, weights} = this.props.week;
        return (
            <tr>
                <td className="week-res-txt">Week {weekNumber}</td>
                <td>{sets}</td>
                <td>{reps.map((rep) => {
                    return rep+", ";
                })}</td>
                <td>{percentages.map((percentage) => {
                    return (percentage*100)+"%, ";
                })}</td>
                <td>{weights.map((weight) => {
                    return weight+", ";
                })}</td>
            </tr>
        );
    }//end render
}//end Week.class

export default Week;
