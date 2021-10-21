import React, { Component } from 'react';
import axios from 'axios';
import './Stylesheet.css'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "GreenGator"
    }

    render() {
        return (
            <div>
                <h1 className="primary">Welcome</h1>
                <h2 className="secondary">
                GreenGator was created to help guide people towards becoming more environmentally conscious in every aspect of their lives. By tracking various elements of users' daily lives, GreenGator can measure users' carbon footprint to allow them to visualize the environmental impact of their daily routine, and show them how to improve.
                </h2>
            </div>
        )
    }
}