import React, { useEffect, useState } from 'react';
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
        <div class = "fpc">
            <div class="section">
                <div class="container">
                    <div>
                        <h3><font size="+2"><center>Login to GreenGator Account</center></font></h3>
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
                            <button type="button" class="submit-btn" onClick={onSubmit}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {loginUser})(LoginForm);