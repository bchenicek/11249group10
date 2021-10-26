import React, { useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const FootPrint = ({ props, user }) => {
    const history = useHistory();
    
    useEffect(() =>{
        document.title = "Carbon Footprint Calculator";
    })

    const onSubmit = e => {
        //upload to database
    }

    return (
        <div>
            <h1 className="primary">Calculate Carbon Footprint</h1>
            <h2 className="secondary">
                [CALCULATOR GOES HERE]
            </h2>
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(FootPrint);