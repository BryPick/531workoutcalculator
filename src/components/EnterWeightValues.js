import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class EnterWeightValues extends Component {
    constructor() {
        super();
        this.weightInput = React.createRef();
        this.enterWeight = this.enterWeight.bind(this);
        this.state = {
            popupMsg: '',
            popupMsgShown: false
        }
    }

    /* Takes weight from input field, calls validateWeight
    * */
    enterWeight = (event) => {
        event.preventDefault();
        const weight = this.weightInput.current.value;
        this.validateWeight(weight);
    };//end enterWeight

    /* Validates the user preferred weight
     * @return calls the calculate function if the weight value validates
     * */
    validateWeight = (weight) => {
        if(weight && !isNaN(weight)) {
            if(weight > 0) {
                this.props.calculate(weight);
            }else {
                this.setState({popupMsg: "Weight needs to be greater than 0"});
                this.setState({popupMsgShown: true});
            }
        }else {
            this.setState({popupMsg: "Please enter a number!"});
            this.setState({popupMsgShown: true});
        }
    };//end validateWeight

    render() {
        return (
            <React.Fragment>
                <h1 className="heading">Enter One Rep Max</h1>
                <input id="one-rep-max" ref={this.weightInput}/>
                <div id="popup-msg">
                    {this.state.popupMsgShown && <p>{this.state.popupMsg}</p>}
                </div>
                <button id="submit-weight" onClick={this.enterWeight}>Submit</button>
            </React.Fragment>
        );
    }//end render
}//end EnterWeightValues.class

export default EnterWeightValues;
