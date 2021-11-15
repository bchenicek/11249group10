import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import axios from 'axios';

const MemberList = props => {
    if (props.members) {
        return (     
            props.members.map(member => {       
                return (
                    <Member member={member} />
                )
            })
        )
    } else {
        return (
            <p>There are no members to display.</p>
        )
    }
}

const Member = props => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        getMemberData();
        console.log(props.member);
    }, [])

    const getMemberData = () => {
        axios.get('http://localhost:5000/users/'+props.member)
            .then(member => {
                setUsername(member.data.username);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <tr>
            <td>{ username }</td>
        </tr>
    )
}

const GroupView = ({ props, user }) => {
    const history = useHistory();
    const { id } = useParams();

    const [group_name, setGroupName] = useState("");
    const [group_type, setGroupType] = useState("");
    const [is_private, setPrivate] = useState(null);
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [_state, set_State] = useState("");
    const [zip, setZip] = useState("");
    const [owner, setOwner] = useState("");
    const [members, setMembers] = useState([]);

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    
    const [owner_username, setOwnerUsername] = useState("");
    const [isInGroup, setIsInGroup] = useState(false);
    
    let mapData = null;
    useEffect(() => {
        getGroupData();

        console.log(mapData);

        document.title = group_name;
    }, [])

    const getGroupData = () => {
        axios.get('http://localhost:5000/groups/'+id)
            .then(group => {
                setGroupName(group.data.group_name);
                setGroupType(group.data.group_type);
                setPrivate(group.data.is_private);
                setDescription(group.data.description);
                setCity(group.data.city);
                set_State(group.data.state);
                setZip(group.data.zip_code);
                setOwner(group.data.owner);
                setMembers(group.data.members);

                setIsInGroup((group.data.members).includes(user._id));

                axios.get('http://localhost:5000/users/'+group.data.owner)
                    .then(owner => {
                        setOwnerUsername(owner.data.username);
                        console.log(owner)
                    })
                    .catch(error => {
                        console.log(error);
                    })

                axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=' + group.data.zip_code + '&appid=48ac371d9d3725d2e70f694104e17585')
                    .then(res => {
                        setLat(res.data.lat);
                        setLon(res.data.lon);
                    });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const backToSearch = e => {
        e.preventDefault();
        
        history.push('/event-search');
    }

    const requestJoin = e => {
        e.preventDefault();
        
        const requestData = {
            requestor: user._id,
            recipient: owner,
            group_id: id
        };

        axios.post('http://localhost:5000/requests/group', requestData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        alert('Your request has been sent!');
    }

    const joinGroup = e => {
        const userData = {
            group_id: id,
            new_member: user._id
        };

        axios.put('http://localhost:5000/groups/join', userData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    const deleteGroup = e => {
        const confirmDelete = window.confirm("Please confirm that you would like to delete: " + group_name);
        
        if (confirmDelete) {
            axios.delete('http://localhost:5000/groups/'+id)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
            
            history.push('/event-search');
        } else {
            alert("Didn't delete.");
        }
    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: lat, lng: lon }}>
            <Marker position={{ lat: lat, lng: lon }}/>
        </GoogleMap>
    ));

    return (
        <div>
            <input type="button" onClick={backToSearch} value="Back to Search" className="btn btn-primary" />
            <h2>{ group_name }</h2>
            <h5 className="text-secondary">{ group_type } organized by { owner_username }</h5>
            
            { is_private && !isInGroup ?
                <p>Request group access to see details.</p> :
                <div>
                    <h5 className="text-secondary">{ city }, { _state } { zip }</h5>
                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX-ZB6QvQPxv2uk-2xpbm1lUdhp4OfdAc&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '400px' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                    <p>{ description }</p>
                    <h5>Members</h5>
                    <MemberList members={members} />
                </div>
            }
            { !isInGroup ? 
                is_private ? 
                <input type="button" onClick={requestJoin} value="Request to Join" className="btn btn-primary" /> :
                <input type="button" onClick={joinGroup} value="Join Group" className="btn btn-primary" /> :
                null
            }
            { user._id === owner ? 
                <input type="button" onClick={deleteGroup} value="Delete Group" className="btn btn-primary" /> :
                null
            }
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(GroupView);