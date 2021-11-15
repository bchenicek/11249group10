import React, { useState, useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const IncomingNotificationList = props => {
    if (props.i_notifications.length > 0) {
        return (     
            props.i_notifications.map(i_notification => {       
                return (
                    <IncomingNotification i_notification={i_notification} acceptNotification={props.acceptNotification} deleteNotification={props.deleteNotification} />
                )
            })
        )
    } else {
        return (
            <p>You have no incoming notifications.</p>
        )
    }
}
  
const IncomingNotification = props => {
    return (
        <div>
            <b>{ props.i_notification.type }</b> from&nbsp;
            <Link to={"/user/" + props.i_notification.requestor_id}>{props.i_notification.requestor_name}</Link>
            { props.i_notification.type === "Group Join Request" ?
                <Link to={"/group/" + props.i_notification.group_id}>{props.i_notification.group_name}</Link> :
                null
            } &nbsp;&nbsp;
            { props.i_notification.type === "Group Join Request" ?
                <input type="button" onClick={() => { props.acceptNotification(props.i_notification._id, props.i_notification.requestor_id, props.i_notification.group_id, props.i_notification.type)}} value="Accept" className="btn btn-primary" /> :
                null
            }
            { props.i_notification.type === "Friend Request" ?
                <input type="button" onClick={() => { props.acceptNotification(props.i_notification._id, props.i_notification.recipient, props.i_notification.requestor_id, props.i_notification.type)}} value="Accept" className="btn btn-primary" /> :
                null
            } &nbsp;
            <input type="button" onClick={() => { props.deleteNotification(props.i_notification._id)}} value="Reject" className="btn btn-primary" />
        </div>
    )
}

const OutgoingNotificationList = props => {
    if (props.o_notifications.length > 0) {
        return (     
            props.o_notifications.map(o_notification => {       
                return (
                    <OutgoingNotification o_notification={o_notification} deleteNotification={props.deleteNotification} />
                )
            })
        )
    } else {
        return (
            <p>You have no outgoing notifications.</p>
        )
    }
}
  
const OutgoingNotification = props => {
    return (
        <tr>
            <b>{ props.o_notification.type }</b> to&nbsp;
            { props.o_notification.type === "Group Join Request" ?
                <Link to={"/group/" + props.o_notification.group_id}>{props.o_notification.group_name}</Link> :
                null
            }
            { props.o_notification.type === "Friend Request" ?
                <Link to={"/user/" + props.o_notification.recipient}>{props.o_notification.recipient_name}</Link> :
                null
            } &nbsp;&nbsp;
            <input type="button" onClick={() => { props.deleteNotification(props.o_notification._id)}} value="Delete" className="btn btn-primary" />
        </tr>
    )
}

const NotificationPage = ({ props, user }) => {
    const history = useHistory();

    const [incomingNotifcations, setIncomingNotifcations] = useState([]);
    const [outgoingNotifcations, setOutgoingNotifcations] = useState([]);

    useEffect(() => {
        document.title = "Notifications";

        axios.get('http://localhost:5000/requests/received/' + user._id)
            .then(i_notifications => {
                setIncomingNotifcations(i_notifications.data);

                axios.get('http://localhost:5000/requests/sent/' + user._id)
                    .then(o_notifications => {
                        setOutgoingNotifcations(o_notifications.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
            console.log(incomingNotifcations)
    }, []);

    const acceptNotification = (id, id_2, id_3, type) => {
        if (type === "Group Join Request") {
            const joinGroup = {
                new_member: id_2,
                group_id: id_3
            };
    
            axios.post('http://localhost:5000/requests/group/accept', joinGroup)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        } else if (type === "Friend Request") {
            const acceptFriend = {
                recipient: id_2,
                requestor_id: id_3
            }

            axios.post('http://localhost:5000/requests/friend/accept', acceptFriend)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }

        axios.delete('http://localhost:5000/requests/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        setIncomingNotifcations(incomingNotifcations.filter(notif => notif._id !== id))
    }

    const deleteNotification = (id) => {
        axios.delete('http://localhost:5000/requests/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        setIncomingNotifcations(incomingNotifcations.filter(notif => notif._id !== id));
        setOutgoingNotifcations(outgoingNotifcations.filter(notif => notif._id !== id));
    }

    return (
        <div>
            <h2>Notifications</h2>
            <h4>Incoming</h4>
            <IncomingNotificationList i_notifications={incomingNotifcations} acceptNotification={acceptNotification} deleteNotification={deleteNotification}/>
            <h4>Outgoing</h4>
            <OutgoingNotificationList o_notifications={outgoingNotifcations} deleteNotification={deleteNotification}/>
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(NotificationPage);