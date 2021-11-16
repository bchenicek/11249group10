import React, { useState, useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const FootPrintRes = ({ props, user }) => {
    
    const history = useHistory();
    const [footprints, setFootprints] = useState([]);
    const userID = user._id;
    useEffect(() =>{
        document.title = "Footprint Results";
        const axiosFootprints = async () => {
            const response = await axios.get('http://localhost:5000/footprints/' + userID);
            console.log(response.data); 
            setFootprints(response.data);
            return response;
        };
        axiosFootprints()
    }, [user._id]);

    if (footprints.length == 0) {
        return (
            <div>
            </div>
        )
    }
    else {
        return (
        <div>
            <h2 className="primary"><font size="+2">Carbon Footprint Results</font></h2>
            <div className="userTable">

            <table>
            <tr>
                <th width="250px"> Carbon Footprint Information </th>
                <th width="150px"> Reported Value </th>
                <th> CO2 Emission </th>
            </tr>
            <tr>
                <td> Personal Vehicle Travel </td>
                <td> {(Math.round((footprints[footprints.length-1].vehicle_miles + Number.EPSILON) * 100) / 100).toLocaleString()} miles/yr</td>
                <td> {(Math.round((footprints[footprints.length-1].vehicle_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            <tr>
                <td> Public Transit Travel </td>
                <td> {(Math.round((footprints[footprints.length-1].public_transit_miles + Number.EPSILON) * 100) / 100).toLocaleString()} miles/yr</td>
                <td> {(Math.round((footprints[footprints.length-1].pTransit_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            <tr>
                <td> Air Travel </td>
                <td> {(Math.round((footprints[footprints.length-1].air_miles + Number.EPSILON) * 100) / 100).toLocaleString()} miles/yr</td>
                <td> {(Math.round((footprints[footprints.length-1].airTravel_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            <tr>
                <td> Electric Power Usage </td>
                <td> {(Math.round((footprints[footprints.length-1].electric_bill/0.1331 + Number.EPSILON) * 100) / 100).toLocaleString()} kWh/yr</td>
                <td> {(Math.round((footprints[footprints.length-1].electric_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            <tr>
                <td> Water Usage </td>
                <td> {(Math.round((footprints[footprints.length-1].water_bill/0.0015 + Number.EPSILON) * 100) / 100).toLocaleString()} gallon/yr</td>
                <td> {(Math.round((footprints[footprints.length-1].water_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            <tr>
                <td>  Natural Gas Usage </td>
                <td> {(Math.round((footprints[footprints.length-1].natural_gas + Number.EPSILON) * 100) / 100).toLocaleString()} therms/yr</td>
                <td> {(Math.round((footprints[footprints.length-1].natGas_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            <tr>
                <td> Additional Fuel Usage </td>
                <td> {(Math.round((footprints[footprints.length-1].other_fuels + Number.EPSILON) * 100) / 100).toLocaleString()} gallons/year</td>
                <td> {(Math.round((footprints[footprints.length-1].oFuel_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()} kg CO2/yr</td>
            </tr>
            </table>
            </div>
        </div>
        )
    }
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(FootPrintRes);