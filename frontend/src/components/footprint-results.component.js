import React, { useState, useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const FootPrintRes = ({ user }) => {
    
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

    const footprintAverages = [
                        [17, 32, 32, 41, 45],
                        [23, 34, 34, 40, 42],
                        [28, 39, 40, 44, 48],
                        [31, 42, 46, 49, 53],
                        [34, 46, 51, 54, 58],
                        [39, 50, 55, 60, 62],
                        [43, 54, 59, 65, 67],
                        [47, 60, 65, 71, 74],
                        [52, 65, 71, 77, 81],
                        [57, 72, 79, 85, 89],
                    ];

    if (footprints.length == 0) {
        return (
            <div>
                <center><h3>Something went wrong. Please try again.</h3></center>
            </div>
        )
    }
    else {
        const pvt_miles_year = (Math.round((footprints[footprints.length-1].vehicle_miles + Number.EPSILON) * 100) / 100).toLocaleString();
        const pvt_co2_year = (Math.round((footprints[footprints.length-1].vehicle_CO2 + Number.EPSILON) * 100) / 100).toLocaleString();

        const pt_miles_year = (Math.round((footprints[footprints.length-1].public_transit_miles + Number.EPSILON) * 100) / 100).toLocaleString();
        const pt_co2_year = (Math.round((footprints[footprints.length-1].pTransit_CO2 + Number.EPSILON) * 100) / 100).toLocaleString();

        const air_miles_year = (Math.round((footprints[footprints.length-1].air_miles + Number.EPSILON) * 100) / 100).toLocaleString();
        const air_co2_year = (Math.round((footprints[footprints.length-1].airTravel_CO2 + Number.EPSILON) * 100) / 100).toLocaleString();

        const electric_dollars_month = (Math.round((footprints[footprints.length-1].electric_bill + Number.EPSILON) * 100) / 100).toLocaleString();
        const electric_kWh_year = (Math.round((footprints[footprints.length-1].electric_bill*12/0.1331 + Number.EPSILON) * 100) / 100).toLocaleString();
        const electric_co2_month = (Math.round((footprints[footprints.length-1].electric_CO2*12 + Number.EPSILON) * 100) / 100).toLocaleString();

        const water_dollars_month = (Math.round((footprints[footprints.length-1].water_bill + Number.EPSILON) * 100) / 100).toLocaleString();
        const water_gallons_year = (Math.round((footprints[footprints.length-1].water_bill*12/0.0015 + Number.EPSILON) * 100) / 100).toLocaleString();
        const water_co2_year = (Math.round((footprints[footprints.length-1].water_CO2*12 + Number.EPSILON) * 100) / 100).toLocaleString();

        const natgas_therms_year = (Math.round((footprints[footprints.length-1].natural_gas + Number.EPSILON) * 100) / 100).toLocaleString();
        const natgas_co2_year = (Math.round((footprints[footprints.length-1].natGas_CO2 + Number.EPSILON) * 100) / 100).toLocaleString()

        const oFuel_gallons_year = (Math.round((footprints[footprints.length-1].other_fuels + Number.EPSILON) * 100) / 100).toLocaleString();
        const oFuel_co2_year = (Math.round((footprints[footprints.length-1].oFuel_CO2 + Number.EPSILON) * 100) / 100).toLocaleString();

        const protein_cals_day = (Math.round((footprints[footprints.length-1].animal_protein_cal*footprints[footprints.length-1].household_size + Number.EPSILON) * 100) / 100).toLocaleString();
        const protein_cals_year = (Math.round((footprints[footprints.length-1].animal_protein_cal*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();
        const protein_co2_year = (Math.round((footprints[footprints.length-1].animalProtein_CO2*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();
        
        const grains_cals_day = (Math.round((footprints[footprints.length-1].grains_cal*footprints[footprints.length-1].household_size + Number.EPSILON) * 100) / 100).toLocaleString();
        const grains_cals_year = (Math.round((footprints[footprints.length-1].grains_cal*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();
        const grains_co2_year = (Math.round((footprints[footprints.length-1].grains_CO2*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();

        const dairy_cals_day = (Math.round((footprints[footprints.length-1].dairy_cal*footprints[footprints.length-1].household_size + Number.EPSILON) * 100) / 100).toLocaleString();
        const dairy_cals_year = (Math.round((footprints[footprints.length-1].dairy_cal*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();
        const dairy_co2_year = (Math.round((footprints[footprints.length-1].dairy_CO2*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();

        const frvg_cals_day = (Math.round((footprints[footprints.length-1].fruit_veg_cal*footprints[footprints.length-1].household_size + Number.EPSILON) * 100) / 100).toLocaleString();
        const frvg_cals_year = (Math.round((footprints[footprints.length-1].fruit_veg_cal*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();
        const frvg_co2_year = (Math.round((footprints[footprints.length-1].FruitVeg_CO2*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();

        const snacks_cals_day = (Math.round((footprints[footprints.length-1].snacks_cal*footprints[footprints.length-1].household_size + Number.EPSILON) * 100) / 100).toLocaleString();
        const snacks_cals_year = (Math.round((footprints[footprints.length-1].snacks_cal*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();
        const snacks_co2_year = (Math.round((footprints[footprints.length-1].snacks_CO2*footprints[footprints.length-1].household_size*365 + Number.EPSILON) * 100) / 100).toLocaleString();

        const goods_dollars_month = (Math.round((footprints[footprints.length-1].shopping_goods + Number.EPSILON) * 100) / 100).toLocaleString();
        const goods_dollars_year = (Math.round((footprints[footprints.length-1].shopping_goods*12 + Number.EPSILON) * 100) / 100).toLocaleString();
        const goods_co2_year = (Math.round((footprints[footprints.length-1].goods_CO2*12 + Number.EPSILON) * 100) / 100).toLocaleString();

        const services_dollars_month = (Math.round((footprints[footprints.length-1].shopping_services + Number.EPSILON) * 100) / 100).toLocaleString();
        const services_dollars_year = (Math.round((footprints[footprints.length-1].shopping_services*12 + Number.EPSILON) * 100) / 100).toLocaleString();
        const services_co2_year = (Math.round((footprints[footprints.length-1].services_CO2*12 + Number.EPSILON) * 100) / 100).toLocaleString();

        const total_tons_co2_year =  (Math.round((
                                                    (
                                                    footprints[footprints.length-1].vehicle_CO2 +
                                                    footprints[footprints.length-1].pTransit_CO2 +
                                                    footprints[footprints.length-1].airTravel_CO2 + 
                                                    footprints[footprints.length-1].electric_CO2*12 +
                                                    footprints[footprints.length-1].water_CO2*12 + 
                                                    footprints[footprints.length-1].natGas_CO2 + 
                                                    footprints[footprints.length-1].oFuel_CO2 + 
                                                    footprints[footprints.length-1].animalProtein_CO2*footprints[footprints.length-1].household_size*365 + 
                                                    footprints[footprints.length-1].grains_CO2*footprints[footprints.length-1].household_size*365 +
                                                    footprints[footprints.length-1].dairy_CO2*footprints[footprints.length-1].household_size*365 +
                                                    footprints[footprints.length-1].FruitVeg_CO2*footprints[footprints.length-1].household_size*365 +
                                                    footprints[footprints.length-1].snacks_CO2*footprints[footprints.length-1].household_size*365 +
                                                    footprints[footprints.length-1].goods_CO2*12 + 
                                                    footprints[footprints.length-1].services_CO2*12
                                                    )/907.185 
                                                + Number.EPSILON) * 100) / 100).toLocaleString(); 

        const householdSize = Math.ceil(footprints[footprints.length-1].household_size);
        const householdIncome = Math.ceil(footprints[footprints.length-1].household_income);
        
        var index1 = 0;
        var index2 = 0;

        if(householdIncome < 10000)
            index1 = 0;
        else if(householdIncome < 20000)
            index1 = 1;                                               
        else if(householdIncome < 30000)
            index1 = 2;
        else if(householdIncome < 40000)
            index1 = 3;
        else if(householdIncome < 50000)
            index1 = 4;
        else if(householdIncome < 60000)
            index1 = 5;
        else if(householdIncome < 80000)
            index1 = 6;
        else if(householdIncome < 100000)
            index1 = 7;
        else if(householdIncome < 120000)
            index1 = 8;
        else
            index1 = 9;
        
        if(householdSize < 5)
            index2 = householdSize-1;
        else
            index2 = 4;                                        

        const footprintAverage = footprintAverages[index1][index2];

        var greater = false;

        if(total_tons_co2_year > footprintAverage)
            greater = true;


        const travelAverage = Math.ceil(0.22*footprintAverage);
        const homeAverage = Math.ceil(0.27*footprintAverage);
        const foodAverage = Math.ceil(0.24*footprintAverage);
        const goodsAverage = Math.ceil(0.13*footprintAverage);
        const servicesAverage = Math.ceil(0.07*footprintAverage);

        return (
            <div>
            <center><font size="+2"><b>Carbon Footprint Results</b></font></center>
            <div class = "fpr">
                <div className="userTable">
                    <table>
                    <tr>
                        <th width="300px"> <center>Carbon Emission Source</center> </th>
                        <th width="250px"> <center>Reported Value</center> </th>
                        <th width="250px"> <center>Estimated Consumption</center> </th>
                        <th width="250px"> <center>CO2 Emission</center> </th>
                    </tr>
                    <tr>
                        <td> &nbsp; Personal Vehicle Travel </td>
                        <td> &nbsp; {pvt_miles_year} miles/yr </td>
                        <td> &nbsp; {pvt_miles_year} miles/yr</td>
                        <td> &nbsp; {pvt_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Public Transit Travel </td>
                        <td> &nbsp; {pt_miles_year} miles/yr</td>
                        <td> &nbsp; {pt_miles_year} miles/yr</td>
                        <td> &nbsp; {pt_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Air Travel </td>
                        <td> &nbsp; {air_miles_year} miles/yr</td>
                        <td> &nbsp; {air_miles_year} miles/yr</td>
                        <td> &nbsp; {air_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Electric Power Usage </td>
                        <td> &nbsp; {electric_dollars_month} $/month</td>
                        <td> &nbsp; {electric_kWh_year} kWh/yr</td>
                        <td> &nbsp; {electric_co2_month} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Water Usage </td>
                        <td> &nbsp; {water_dollars_month} $/month</td>
                        <td> &nbsp; {water_gallons_year} gal/yr</td>
                        <td> &nbsp; {water_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Natural Gas Usage </td>
                        <td> &nbsp; {natgas_therms_year} therms/yr</td>
                        <td> &nbsp; {natgas_therms_year} therms/yr</td>
                        <td> &nbsp; {natgas_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Additional Fuel Usage </td>
                        <td> &nbsp; {oFuel_gallons_year} gal/yr</td>
                        <td> &nbsp; {oFuel_gallons_year} gal/yr</td>
                        <td> &nbsp; {oFuel_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Animal Protein Consumption </td>
                        <td> &nbsp; {protein_cals_day} cal/day</td>
                        <td> &nbsp; {protein_cals_year} cal/yr</td>
                        <td> &nbsp; {protein_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Grains Consumption </td>
                        <td> &nbsp; {grains_cals_day} cal/day</td>
                        <td> &nbsp; {grains_cals_year} cal/yr</td>
                        <td> &nbsp; {grains_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Dairy Consumption </td>
                        <td> &nbsp; {dairy_cals_day} cal/day</td>
                        <td> &nbsp; {dairy_cals_year} cal/yr</td>
                        <td> &nbsp; {dairy_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Fruits and Vegetables Consumption </td>
                        <td> &nbsp; {frvg_cals_day} cal/day</td>
                        <td> &nbsp; {frvg_cals_year} cal/yr</td>
                        <td> &nbsp; {frvg_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Additional Snacks Consumption </td>
                        <td> &nbsp; {snacks_cals_day} cal/day</td>
                        <td> &nbsp; {snacks_cals_year} cal/yr</td>
                        <td> &nbsp; {snacks_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Goods Consumption </td>
                        <td> &nbsp; {goods_dollars_month} $/month</td>
                        <td> &nbsp; {goods_dollars_year} $/yr</td>
                        <td> &nbsp; {goods_co2_year} kg CO2/yr</td>
                    </tr>
                    <tr>
                        <td> &nbsp; Services Utilization </td>
                        <td> &nbsp; {services_dollars_month} $/month</td>
                        <td> &nbsp; {services_dollars_year} $/yr</td>
                        <td> &nbsp; {services_co2_year} kg CO2/yr</td>
                    </tr>
                    </table>
                </div>
            </div>
            <div> &nbsp; </div>
            <font size="+2"> 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                Total Footprint = {total_tons_co2_year} tons CO2/year 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                Similar Household Footprint = {footprintAverage} tons CO2/year
            </font>
        </div>
        )
    }
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(FootPrintRes);