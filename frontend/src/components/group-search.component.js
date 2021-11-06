import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GroupSearch = props => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Event Search"
    })

    const toSearch = e => {
        e.preventDefault();

        history.push('/create-event');
    }
    
    return (
        <div>
            <input type="button" onClick={toSearch} value="Create an Event" className="btn btn-primary" />
            <h3>Find Events to work with other users!</h3>
            <p>GROUPS WILL BE MAPPED HERE</p>
        </div>
        )
}

export default connect(null)(GroupSearch);