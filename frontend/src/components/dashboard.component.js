import React, { useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Dashboard = ({ props, user }) => {
    const history = useHistory();
    
    useEffect(() =>{
        document.title = "Account Dashboard";
    })

    const onSubmit = e => {
        logoutUser(history);
    }

    const gotoCalc = e => {
        history.push("/footprint")
    }

    return (
        <div>
            <h1 className="primary">Welcome, {user.first_name}</h1>
            <h2 className="secondary">
                Here is your user dashboard!
            </h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="submit" value="Log Out" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData, {logoutUser})(Dashboard);