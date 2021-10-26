import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Navbar = ({ props, authenticated }) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#53be78", color:"black"}}>
            <Link to="/" className="navbar-brand" style={{color:"black"}}>GreenGator</Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                { !authenticated ? 
                    <li className="navbar-item">
                    <Link to="/login" className="nav-link" style={{color:"black"}}>Login</Link> 
                    </li>
                : null } 
                { !authenticated ? 
                    <li className="navbar-item">
                    <Link to="/create-account" className="nav-link" style={{color:"black"}}>Create Account</Link> 
                    </li>
                : null } 
                { authenticated ? 
                    <li className="navbar-item">
                    <Link to="/dashboard" className="nav-link" style={{color:"black"}}>User Dashboard</Link> 
                    </li>
                : null }  
                { authenticated ? 
                    <li className="navbar-item">
                    <Link to="/footprint-calculator" className="nav-link" style={{color:"black"}}>Carbon Footprint Calculator</Link> 
                    </li>
                : null } 
            </ul>
            </div>
        </nav>
    )
}

const isUserAuthenticated = ({session}) => ({
    authenticated: session.authenticated
})

export default connect(isUserAuthenticated)(Navbar);