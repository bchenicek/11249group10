import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
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
    const [owner, setOwner] = useState("");
    const [members, setMembers] = useState([]);
    
    useEffect(() => {
        getGroupData();

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
                set_State(group.data._state);
                setOwner(group.data.owner);
                setMembers(group.data.members);
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
        
        alert('requested join');
    }

    const joinGroup = e => {
        const joinGroup = {
            group_id: id,
            new_member: user._id
        };

        axios.put('http://localhost:5000/groups/join', joinGroup)
            .then(console.log("Join"))
    }

    return (
        <div>
            <input type="button" onClick={backToSearch} value="Back to Search" className="btn btn-primary" />
            <h2>{ group_name }</h2>
            <h5 className="text-secondary">{ group_type }</h5>
            <h4>Members</h4>
            <MemberList members={members} />
            { is_private ? 
                <input type="button" onClick={requestJoin} value="Request to Join" className="btn btn-primary" /> :
                <input type="button" onClick={joinGroup} value="Join Group" className="btn btn-primary" />
            }
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(GroupView);