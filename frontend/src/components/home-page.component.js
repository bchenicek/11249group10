import React, { Component } from 'react';
import axios from 'axios';

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
                <h3>Home Page</h3>
            </div>
        )
    }
}