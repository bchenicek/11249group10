import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const UserView = ({ props, user }) => {
    const history = useHistory();
    const { id } = useParams();

    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const [friends, setFriends] = useState([]);

    const [incomingRequest, setIncomingRequest] = useState(false);
    const [hasRequestedUser, setHasRequestedUser] = useState(false);
    const [friendsWithUser, setFriendsWithUser] = useState(false);
    const [invite_group, setInviteGroup] = useState("");

    const [group_names, setGroupNames] = useState(new Map());
    
    useEffect(() => {
        if (user._id === id) {
            history.push('/dashboard');
        }
        
        getUserData();
        console.log(group_names);
    }, [])

    const getUserData = () => {
        setFriends(user.friends);
        
        axios.get('http://localhost:5000/users/'+id)
            .then(currUser => {
                const friendRequest = {
                    requestor_id: user._id,
                    type: "Friend Request",
                    recipient: id
                }

                const friendRequest_rev = {
                    requestor_id: id,
                    type: "Friend Request",
                    recipient: user._id
                }

                document.title = currUser.data.username;
                
                setUsername(currUser.data.username);
                setFirstName(currUser.data.first_name);
                setLastName(currUser.data.last_name);

                const is_friends = friends.includes(id);
console.log(friends);
                setFriendsWithUser(is_friends);
                setInviteGroup(user.groups[0]);
console.log(user);
                user.groups.map(currGroup => {                    
                    console.log(currGroup)
                    axios.get('http://localhost:5000/groups/'+currGroup)
                        .then(res => {
                            setGroupNames(group_names.set(currGroup, res.data.group_name))
                        })
                }) 

                axios.post('http://localhost:5000/requests/match-friend', friendRequest)
                    .then(requests => {
                        if (requests.data.length > 0) {
                            setHasRequestedUser(true);
                        }

                        axios.post('http://localhost:5000/requests/match-friend', friendRequest_rev)
                            .then(requests_2 => {
                                if (requests_2.data.length > 0) {
                                    setIncomingRequest(true);
                                }
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const sendFriendRequest = e => {
        e.preventDefault();
        
        setHasRequestedUser(true);

        const friendRequest = {
            requestor_id: user._id,
            requestor_name: user.username,
            recipient: id,
            recipient_name: username
        }

        axios.post('http://localhost:5000/requests/friend', friendRequest)
            .then(res => {
                console.log(res);
                alert("You have sent a friend request to " + username + "!");
            })
    }

    const sendGroupInvite = e => {
        e.preventDefault();
        
        setHasRequestedUser(true);

        const groupInvite = {
            requestor_id: user._id,
            requestor_name: user.username,
            recipient: id,
            recipient_name: username,
            group_id: invite_group,
            group_name: group_names.get(invite_group)
        }

        axios.post('http://localhost:5000/requests/group-invite', groupInvite)
            .then(res => {
                console.log(res);
                alert("You have invited " + username + " to " + group_names.get(invite_group) + "!");
            })
    }

    const acceptFriendRequest = e => {
        e.preventDefault();
        
        const acceptFriend = {
            recipient: user._id,
            requestor_id: id
        }

        const findRequestId = {
            requestor_id: id,
            type: "Friend Request",
            recipient: user._id
        }

        axios.post('http://localhost:5000/requests/match-friend', findRequestId)
            .then(requests => {
                setFriendsWithUser(true);
                
                axios.delete('http://localhost:5000/requests/'+requests.data[0]._id)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
            })

        axios.post('http://localhost:5000/requests/friend/accept', acceptFriend)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    const goBackPage = e => {
        e.preventDefault();
        
        history.goBack();
    }

    const onChangeInviteGroup = e => {
        setInviteGroup(e.target.value);
    }

    return (
        <div>
            <input type="button" onClick={goBackPage} value="Back" className="btn btn-primary" />
            <h2>{ username }</h2>
            <h5 className="text-secondary">{ first_name } { last_name }</h5>
            { !friendsWithUser ?
                hasRequestedUser ?
                    <p className="text-secondary">Friend Request Pending.</p> :
                    incomingRequest ?
                        <input type="button" onClick={acceptFriendRequest} value="Accept Request" className="btn btn-primary" /> :
                        <input type="button" onClick={sendFriendRequest} value="Send Friend Request" className="btn btn-primary" /> :
                <div>
                    <p className="text-secondary">You are friends with this user.</p>
                    <select 
                        required
                        className="form-control"
                        onChange={onChangeInviteGroup}>
                        { 
                            user.groups.map(currGroup => {       
                                return (
                                    <option value={currGroup}>{group_names.get(currGroup)}</option>
                                )
                            }) 
                        }
                    </select>
                    <input type="button" onClick={sendGroupInvite} value="Invite to Group" className="btn btn-primary" />
                </div>
            }
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(UserView);