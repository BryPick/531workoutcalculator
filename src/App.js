import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Calculate from './components/pages/Calculate';
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/calculate" component={Calculate}/>
            </Router>
        );
    }//end render
}//end App.class

export default App;
