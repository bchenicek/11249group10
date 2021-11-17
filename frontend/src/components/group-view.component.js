import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import axios from 'axios';

const MemberList = props => {
    if (props.members.length > 0) {
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
    const [user_id, setUserId] = useState("");

    useEffect(() => {
        getMemberData();
        console.log(props.member);
    }, [])

    const getMemberData = () => {
        axios.get('http://localhost:5000/users/'+props.member)
            .then(member => {
                setUsername(member.data.username);
                setUserId(member.data._id.toString());
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <div>
            <Link to={"/user/" + user_id}>{ username }</Link>
        </div>
    )
}

const MessageBoard = props => {
    if (props.messages.length > 0) {
        return (     
            props.messages.map(message => {       
                return (
                    <Message message={message} />
                )
            })
        )
    } else {
        return (
            <p>There are currrently no announcements for this event.</p>
        )
    }
}

const Message = props => {    
    return (
        <div>
            <b>{ props.message[0] }</b> - { props.message[1] }
        </div>
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
    const [messages, setMessages] = useState([]);

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    
    const [owner_username, setOwnerUsername] = useState("");
    const [isInGroup, setIsInGroup] = useState(false);
    const [hasRequestedGroup, setHasRequestedGroup] = useState(false);
    
    useEffect(() => {
        getGroupData();
    }, [])

    const getGroupData = () => {
        axios.get('http://localhost:5000/groups/'+id)
            .then(group => {               
                const matchRequest = {
                    group_id: id,
                    requestor_id: user._id
                };
                
                document.title = group.data.group_name;

                setGroupName(group.data.group_name);
                setGroupType(group.data.group_type);
                setPrivate(group.data.is_private);
                setDescription(group.data.description);
                setCity(group.data.city);
                set_State(group.data.state);
                setZip(group.data.zip_code);
                setOwner(group.data.owner);
                setMembers(group.data.members);
                setMessages(group.data.messages);

                setIsInGroup((group.data.members).includes(user._id));

                axios.get('http://localhost:5000/users/'+group.data.owner)
                    .then(owner => {
                        setOwnerUsername(owner.data.username);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                axios.post('http://localhost:5000/requests/match-group', matchRequest)
                    .then(requests => {
                        if (requests.data.length > 0) {
                            setHasRequestedGroup(true);
                        }
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
        
        history.goBack();
    }

    const requestJoin = e => {
        e.preventDefault();
        
        setHasRequestedGroup(true);

        const requestData = {
            requestor_id: user._id,
            requestor_name: user.username,
            recipient: owner,
            group_id: id,
            group_name, group_name,
            message: ""
        };

        axios.post('http://localhost:5000/requests/group', requestData)
            .then(res => {
                console.log(res.data)
                alert('Your request has been sent!');
            })
            .catch(err => console.log(err));
    }

    const joinGroup = e => {
        setIsInGroup(true);
        setMembers([...members, user._id]);
        
        const userData = {
            group_id: id,
            new_member: user._id
        };

        axios.put('http://localhost:5000/groups/join', userData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    const leaveGroup = e => {
        setIsInGroup(false);
        setMembers(members.filter(member => member !== user._id));
        
        const userData = {
            group_id: id,
            new_member: user._id
        };

        axios.put('http://localhost:5000/groups/leave', userData)
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
        }
    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: lat, lng: lon }}>
            <Marker position={{ lat: lat, lng: lon }}/>
        </GoogleMap>
    ));

    const onSubmit = e => {
        e.preventDefault();

        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        setMessages([...messages, [subject, message]]);

        const group_message = {
            group_id: id,
            subject: subject,
            message: message
        };

        axios.post('http://localhost:5000/groups/send-message', group_message)
            .then(res => {
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <input type="button" onClick={backToSearch} value="Back" className="btn btn-primary" />
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
                    <h5>Description</h5>
                    <p>{ description }</p>
                    <h5>Members</h5>
                    <MemberList members={members} />
                    <br />
                </div>
            }
            { !isInGroup ? 
                is_private ? 
                    hasRequestedGroup ?
                        <p className="text-secondary">Awaiting request approval.</p> :
                        <input type="button" onClick={requestJoin} value="Request to Join" className="btn btn-primary" /> :
                <input type="button" onClick={joinGroup} value="Join Group" className="btn btn-primary" /> :
                <div>
                    <h5>Announcements</h5>
                    <MessageBoard messages={messages} />
                    { user._id !== owner ?
                        <input type="button" onClick={leaveGroup} value="Leave Group" className="btn btn-primary" /> :
                        <br />
                    }
                    
                </div>
            }
            
            { user._id === owner ? 
                <div>
                    <h5>Post Announcement to Group</h5>
                    <form onSubmit={onSubmit}>
                    <label>Subject: </label>
                    <input type="text"
                        required
                        id="subject"
                        className="form-control"
                        />
                    <label>Message: </label>
                    <textarea
                        required 
                        id="message"
                        className="form-control"
                        /> 
                    <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary" />
                    </div>
                    </form>
                    <br />
                    <input type="button" onClick={deleteGroup} value="Delete Group" className="btn btn-primary" />
                </div> :
                null
            }
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(GroupView);