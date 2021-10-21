import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#53be78", color:"black"}}>
                <Link to="/" className="navbar-brand" style={{color:"black"}}>GreenGator</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/login" className="nav-link" style={{color:"black"}}>Login</Link> 
                    </li>
                    <li className="navbar-item">
                    <Link to="/create-account" className="nav-link" style={{color:"black"}}>Create Account</Link> 
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}