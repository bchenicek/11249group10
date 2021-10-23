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
            Guiding you towards a more eco-friendly lifestyle
            </h2>
            <hr className="hrTag" size="5"></hr>
            <h3 className="description">
            By answering some questions about your daily routine, GreenGator can help you understand how to become more environmentally conscious in many aspects of your life  
            </h3> 
            <a href="/create-account">
            <button className="startButton"> Get Started</button>
            </a>
        </div>
    )
}

export default HomePage;