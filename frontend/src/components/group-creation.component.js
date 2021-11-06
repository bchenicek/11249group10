import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux';
import { createGroup } from './../auth/actions/groupActions.js';
import { useHistory } from 'react-router-dom';

const GroupCreation = ({ props, user }) => {
    const [group_name, setGroupName] = useState("");
    const [group_type, setGroupType] = useState("Carpool");
    const [is_private, setPrivate] = useState(false);
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [_state, set_State] = useState("");

    const history = useHistory();

    useEffect(() => {
        document.title = "Create Event"
    })

    const onChangeGroupName = e => {
        setGroupName(e.target.value)
    }

    const onChangeGroupType = e => {
        setGroupType(e.target.value)
    }

    const onChangePrivate = e => {
        setPrivate(e.target.value)
    }

    const onChangeDescription = e => {
        setDescription(e.target.value)
    }

    const onChangeCity = e => {
        setCity(e.target.value)
    }

    const onChange_State = e => {
        set_State(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();

        const group = {
            group_name: group_name,
            group_type: group_type,
            is_private: is_private,
            description: description,
            city: city,
            state: _state,
            owner: user._id,
            members: [user._id]
        }

        createGroup(group)
        console.log(group);
        history.push('/event-search');
    }

    const backToSearch = e => {
        e.preventDefault();
        
        history.push('/event-search');
    }
    
    return (
        <div>
            <input type="button" onClick={backToSearch} value="Back to Search" className="btn btn-primary" />
            <h3>Create an Event</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Group Name:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={group_name}
                        onChange={onChangeGroupName}
                        />
                </div>
                <div className="form-group">
                    <label>Group Type:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <select 
                        required
                        className="form-control"
                        value={group_type}
                        onChange={onChangeGroupType}>
                        <option key="Carpool" value="Carpool">Carpool</option>
                        <option key="Food" value="Food">Food</option>
                        <option key="Other" value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Privacy Status:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <select 
                        required
                        className="form-control"
                        onChange={onChangePrivate}>
                        <option value={false}>Public</option>
                        <option value={true}>Private</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={onChangeDescription}
                        />
                </div>
                <div className="form-group">
                    <label>City:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={city}
                        onChange={onChangeCity}
                        />
                </div>
                <div className="form-group">
                    <label>State:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={_state}
                        onChange={onChange_State}
                        />
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Event" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )        
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData, {createGroup})(GroupCreation);