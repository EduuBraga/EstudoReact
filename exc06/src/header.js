import './App.css'
import Menu from './menu.js'
import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <header className="header">
                <h1>{this.props.logo}</h1>
                <Menu links={this.props.links}></Menu>
            </header>
        )
    }
}

export default Header