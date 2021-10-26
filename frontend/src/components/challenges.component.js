import './Stylesheet.css'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Challenges = ({ props, user }) => {
  
    
    useEffect(() =>{
        document.title = "challenges";
    })


    return (
        <div className="Header">
      <h1>Challenges </h1>
     <table>
       <tr>
         <th>Task</th>
         <th>Date Assigned</th>
         <th>Completed?</th>
      </tr>
      <tr>
        <td>Eat plant based for 24 hours</td>
        <td>Friday October 22, 2021</td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>Ride a bike or walk instead of using a car for one trip today</td>
        <td>Thursday October 21, 2021</td>
        <td><label class="container">
  <input type="checkbox" value="checked"></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>Try to take a shower that is less than 20 minutes</td>
        <td>Wednesday October 20, 2021</td>
        <td><label class="container">
  <input type="checkbox" value="checked"></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>Recyle at least 5 things today</td>
        <td>Tuesday October 20, 2021</td>
        <td><label class="container">
  <input type="checkbox" value="checked"></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
    </table>
     
    </div>
    )
}


export default connect()(Challenges);
