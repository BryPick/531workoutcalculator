import React, { Component } from 'react';

class Week extends Component {
    render() {
        return (
            <div className="workout-week">
                <p className="week-res-txt">Week 3:</p>
                <p>Sets: 3</p>
                <p>Reps: 5, 3, 1</p>
                <p>Percentages: 75%, 85%, 95%</p>
                <p>Weights: 100, 200, 300</p>
            </div>
        );
    }
}

export default Week;
