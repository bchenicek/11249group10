import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux';
import { loginUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const LoginForm = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    useEffect(() => {
        document.title = "Login"
    })

    const onChangeUsername = e => {
        setUsername(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }
        
        loginUser(user, history);
    }
    
    return (
        <div>
            <h3>Login to your GreenGator Account</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={username}
                        onChange={onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password"
                        required
                        className="form-control"
                        value={password}
                        onChange={onChangePassword}
                        />
                </div>

                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
}

export default connect(null, {loginUser})(LoginForm);