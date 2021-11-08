import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

  

const GroupSearch = props => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Event Search"
    })

    const toSearch = e => {
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
        <input type="button" onClick={toSearch} value="Create an Event" className="btn btn-primary" />
        <h3>Find Events to work with other users!</h3>
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX-ZB6QvQPxv2uk-2xpbm1lUdhp4OfdAc&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        </div> 
    )
}

export default connect(null)(GroupSearch);