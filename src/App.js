import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Calculate from './components/pages/Calculate';
import Results from './components/Results';
import Footer from './components/Footer';
import Barbell from './resources/svgs/barbell.svg';
import './App.css';

class App extends Component {
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
            <Router>
                <Route exact path="/" render={props => (
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
                            {this.state.shown && <p>Start</p>}
                        </div>
                        <Footer/>
                    </div>
                )}/>
                <Route path="/calculate" component={Calculate}/>
                <Route path="/results" component={Results}/>
            </Router>
        );
    }//end render
}//end App.class

export default App;
