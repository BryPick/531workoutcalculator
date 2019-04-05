import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Barbell from "../resources/svgs/barbell.svg";
import {CSSTransitionGroup} from "react-transition-group";
import Footer from "./Footer";

class Home extends Component {
    constructor() {
        super();
        this.changeShown = this.changeShown.bind(this);
        this.state = {
            shown: false,
        };
    }

    /* Function to show the 'Start' message*/
    changeShown = ()  => {
        this.setState(this.displayStart);
    };//end changeShown

    /* Function to change state of the 'Start' message*/
    displayStart = (state) => {
        return {
            shown: !state.shown
        };
    };//end displayStart

    render() {
        return (
            <div id="home">
                <h1 id="title">5 3 1 Calculator</h1>
                <Link to="/calculate">
                    <img
                        onMouseEnter={this.changeShown}
                        onMouseLeave={this.changeShown}
                        id="barbell"
                        src={Barbell}
                        alt="Barbell icon"
                        style={{cursor: 'pointer'}}/>
                </Link>
                <div id="start-txt">
                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={650}
                        transitionLeaveTimeout={5}>
                        {this.state.shown && <p>Start</p>}
                    </CSSTransitionGroup>
                </div>
                <Footer/>
            </div>
        );
    }//end render

}//end Home.class

export default Home;
