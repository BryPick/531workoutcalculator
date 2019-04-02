import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>© {(new Date().getFullYear())} Bryan Pickering </footer>
        );
    }
}

export default Footer;
