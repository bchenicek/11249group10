import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import axios from 'axios';  

const GroupList = props => {
  if (props.groups) {
    return (     
      props.groups.map(group => {       
        return (
          <Group group={group} />
        )
      })
    )
  } else {
    return (
      <p>There are no groups to display.</p>
    )
  }
}

const Group = props => {
  return (
    <tr>
      <td>{ props.group.group_name }</td>
      <td>
        <Link to={"/group/" + props.group._id}>View Group</Link>
      </td>
    </tr>
  )
}

const GroupSearch = props => {
  const [groups, setGroups] = useState([]);  

  const history = useHistory();

  useEffect(() => {
      document.title = "Event Search";

      getGroups();
  }, [])

  const getGroups = () => {
      axios.get('http://localhost:5000/groups/')
          .then(group_list => {
            setGroups(group_list.data);
          })
          .catch(error => {
            console.log(error);
          })
  }

  const toCreate = e => {
      e.preventDefault();

      history.push('/create-event');
  }

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
        />
      </GoogleMap>
  ));

  return (
      <div style={{height: '100vh', width: '100%'}}>
      <input type="button" onClick={toCreate} value="Create an Event" className="btn btn-primary" />
      <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX-ZB6QvQPxv2uk-2xpbm1lUdhp4OfdAc&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
      <h3>Find Events to work with other users!</h3>
      <GroupList groups={groups} />
      </div> 
  )
}

export default connect(null)(GroupSearch);