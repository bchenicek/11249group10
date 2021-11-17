import React, { useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions/userActions';
import { useHistory } from 'react-router-dom';


const Dashboard = ({ props, user }) => {
    const history = useHistory();
    
    useEffect(() =>{
        document.title = "Account Dashboard";
    })

    const onSubmit = e => {
        logoutUser(history);
    }

<<<<<<< Updated upstream
    const tasks = ["Ride a bike or walk instead of using a car for one trip today", "Try to take a shower that is less than 20 minutese", "Recycle at least 5 things today", "Eat plant based for 24 hours", "Try to produce zero food waste today",  "Make sure that you're keeping off lights you aren't using, and try using natural light", "Unplug all electronics that you are not currently using to save power"];
    const today = new Date();

    alert("Today's challenge is: " + tasks[today.getDay()]);
    
    return (
    
        <div>
            <h1 className="primary">Welcome, {user.first_name} </h1>
            <h2 className="secondary">
                Here is your user dashboard! 
            </h2>

            
            <div className="userTable">
            <table>
            <tr> 
            <th width="450px"> Houshold Information </th>
            <th> Amount </th>
            </tr>
            <tr>
            <td> House Size </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Household Income ($)</td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Household Square Footage </td>
            <td> 0 </td>
            </tr>
            </table>
            <table>
            <tr>
            <th width="450px"> Carbon Footprint Information </th>
            <th> Amount </th>
            </tr>
            <tr>
            <td> Vehicle MPG </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Average Annual Driving Miles </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Average Annual Air Miles </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Average Annual Public Transit Miles </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Average Annual Air Miles </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Monthly Electric Bill ($) </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Monthly Water Bill ($) </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Natural Gas Usage (gal) </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Other Fuel Usage (gal) </td>
            <td> 0 </td>
            </tr>
            </table>
    
=======
    if (footprints.length == 0) {
        return (
            <div>
                <h1 className="primary">Welcome, {user.first_name} </h1>
                <h2 className="secondary">
                Here is your user dashboard!
                </h2>
                <div className="userTable">
                <table>
                <tr> 
                <th width="450px"> Houshold Information </th>
                <th> Amount </th>
                </tr>
                <tr>
                <td> House Size </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Household Income ($)</td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Household Square Footage </td>
                <td> 0 </td>
                </tr>
                </table>

                <table>
                <tr>
                <th width="450px"> Carbon Footprint Information </th>
                <th> Amount </th>
                </tr>
                <tr>
                <td> Vehicle MPG </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Average Annual Driving Miles </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Average Annual Air Miles </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Average Annual Public Transit Miles </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Monthly Electric Bill ($) </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Monthly Water Bill ($) </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Natural Gas Usage (gal) </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Other Fuel Usage (gal) </td>
                <td> 0 </td>
                </tr>
                </table>
        
                <table>
                <tr> 
                <th width="450px"> Average Daily Food Consumption </th>
                <th> Amount (cal) </th>
                </tr>
                <tr>
                <td> Animal Protein </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Dairy </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Grains </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Fruits and Vegetables </td>
                <td> 0 </td>
                </tr>
                <tr>
                <td> Other </td>
                <td> 0 </td>
                </tr>
                </table>
                </div>
                {/* <GroupList groups={groups} /> */}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                            <input type="submit" value="Log Out" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    else {
        return (
        <div>
            <h1 className="primary">Welcome, {user.first_name} </h1>
            <h2 className="secondary">
            Here is your user dashboard!
            </h2>
            <div className="userTable">
            <table>
            <tr> 
            <th width="450px"> Houshold Information </th>
            <th> Amount </th>
            </tr>
            <tr>
            <td> House Size </td>
            <td> {footprints[footprints.length-1].household_size} </td>
            </tr>
            <tr>
            <td> Household Income ($)</td>
            <td> {footprints[footprints.length-1].household_income} </td>
            </tr>
            <tr>
            <td> Household Square Footage </td>
            <td> {footprints[footprints.length-1].living_space_area} </td>
            </tr>
            </table>
            <table>
            <tr>
            <th width="450px"> Carbon Footprint Information </th>
            <th> Amount </th>
            </tr>
            <tr>
            <td> Vehicle MPG </td>
            <td> {footprints[footprints.length-1].vehicle_mpg} </td>
            </tr>
            <tr>
            <td> Average Annual Driving Miles </td>
            <td> {footprints[footprints.length-1].vehicle_miles} </td>
            </tr>
            <tr>
            <td> Average Annual Air Miles </td>
            <td> {footprints[footprints.length-1].air_miles} </td>
            </tr>
            <tr>
            <td> Average Annual Public Transit Miles </td>
            <td> {footprints[footprints.length-1].public_transit_miles}</td>
            </tr>
            <tr>
            <td> Monthly Electric Bill ($) </td>
            <td> {footprints[footprints.length-1].electric_bill} </td>
            </tr>
            <tr>
            <td> Monthly Water Bill ($) </td>
            <td> {footprints[footprints.length-1].water_bill} </td>
            </tr>
            <tr>
            <td> Natural Gas Usage (gal) </td>
            <td> {footprints[footprints.length-1].natural_gas} </td>
            </tr>
            <tr>
            <td> Other Fuel Usage (gal) </td>
            <td> {footprints[footprints.length-1].other_fuels} </td>
            </tr>
            </table>
    
>>>>>>> Stashed changes
            <table>
            <tr> 
            <th width="450px"> Average Daily Food Consumption </th>
            <th> Amount (cal) </th>
            </tr>
            <tr>
            <td> Animal Protein </td>
<<<<<<< Updated upstream
            <td> 0 </td>
            </tr>
            <tr>
            <td> Dairy </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Grains </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Fruits and Vegetables </td>
            <td> 0 </td>
            </tr>
            <tr>
            <td> Other </td>
            <td> 0 </td>
            </tr>
            </table>
            </div>
=======
            <td> {footprints[footprints.length-1].animal_protein_cal} </td>
            </tr>
            <tr>
            <td> Dairy </td>
            <td> {footprints[footprints.length-1].dairy_cal} </td>
            </tr>
            <tr>
            <td> Grains </td>
            <td> {footprints[footprints.length-1].grains_cal} </td>
            </tr>
            <tr>
            <td> Fruits and Vegetables </td>
            <td> {footprints[footprints.length-1].fruit_veg_cal} </td>
            </tr>
            <tr>
            <td> Other </td>
            <td> {footprints[footprints.length-1].snacks_cal} </td>
            </tr>
            </table>
            </div>
            <div>
                <h3>Your Groups</h3>
                <GroupList groups={groups} />
            </div>
>>>>>>> Stashed changes
            <form onSubmit={onSubmit}>
                <div className="form-group">
                        <input type="submit" value="Log Out" className="btn btn-primary" />
                </div>
            </form>
        </div>
<<<<<<< Updated upstream

      
    )
=======
        )
    }
>>>>>>> Stashed changes
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData, {logoutUser})(Dashboard);