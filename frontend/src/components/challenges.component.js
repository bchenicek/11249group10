import './challStylesheet.css'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Challenges = ({ props, user }) => {
  
    
  
    useEffect(() =>{
        document.title = "Challenge Page";
    })

    const today = new Date();
    var yesterdayMS = today.getTime() - 1000*60*60*24*1;
    today.setTime(yesterdayMS);

    const t1 = new Date();
     yesterdayMS = today.getTime() - 1000*60*60*24*1;
      t1.setTime(yesterdayMS);

      const t2 = new Date();
      yesterdayMS = today.getTime() - 1000*60*60*24*2;
       t2.setTime(yesterdayMS);

       const t3 = new Date();
      yesterdayMS = today.getTime() - 1000*60*60*24*3;
       t3.setTime(yesterdayMS);

       const t4 = new Date();
      yesterdayMS = today.getTime() - 1000*60*60*24*4;
       t4.setTime(yesterdayMS);

       const t5 = new Date();
      yesterdayMS = today.getTime() - 1000*60*60*24*5;
       t5.setTime(yesterdayMS);

       const t6 = new Date();
      yesterdayMS = today.getTime() - 1000*60*60*24*6;
       t6.setTime(yesterdayMS);

       const t7 = new Date();
      yesterdayMS = today.getTime() - 1000*60*60*24*7;
       t7.setTime(yesterdayMS);


const tasks = ["Ride a bike or walk instead of using a car for one trip today", "Try to take a shower that is less than 20 minutese", "Recycle at least 5 things today", "Eat plant based for 24 hours", "Try to produce zero food waste today",  "Make sure that you're keeping off lights you aren't using, and try using natural light", "Unplug all electronics that you are not currently using to save power"];

    

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
        <td>{tasks[today.getDay()]}</td>
        <td>
          {today.getMonth()+1}/
          {today.getDate()}/
          {today.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t1.getDay()]}</td>
        <td>
          {t1.getMonth()+1}/
          {t1.getDate()}/
          {t1.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t2.getDay()]}</td>
        <td>
          {t2.getMonth()+1}/
          {t2.getDate()}/
          {t2.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t3.getDay()]}</td>
        <td>
          {t3.getMonth()+1}/
          {t3.getDate()}/
          {t3.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t4.getDay()]}</td>
        <td>
          {t4.getMonth()+1}/
          {t4.getDate()}/
          {t4.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t5.getDay()]}</td>
        <td>
          {t5.getMonth()+1}/
          {t5.getDate()}/
          {t5.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t6.getDay()]}</td>
        <td>
          {t6.getMonth()+1}/
          {t6.getDate()}/
          {t6.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
      <tr>
        <td>{tasks[t7.getDay()]}</td>
        <td>
          {t7.getMonth()+1}/
          {t7.getDate()}/
          {t7.getFullYear()}
         
        </td>
        <td><label class="container" value = "checked">
  <input type="checkbox" ></input>
  <span class="checkmark"></span>
           </label></td>
      </tr>
    </table>
     
    </div>
     

    )
    
}





export default connect()(Challenges);
