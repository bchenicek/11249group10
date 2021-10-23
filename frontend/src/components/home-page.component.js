import React, { useEffect } from 'react';
import './Stylesheet.css'

const HomePage = props => {
    useEffect(() =>{
        document.title = "GreenGator";
    })

    return (
        <div>
            <h1 className="primary">Welcome</h1>
            <h2 className="secondary">
                GreenGator was created to help guide people towards becoming more environmentally conscious in every aspect of their lives. By tracking various elements of users' daily lives, GreenGator can measure users' carbon footprint to allow them to visualize the environmental impact of their daily routine, and show them how to improve.
            </h2>
        </div>
    )
}

export default HomePage;