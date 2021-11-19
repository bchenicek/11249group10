import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { sessionService } from 'redux-react-session';

const LoginForm = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userDoesNotExist, setUserDoesNotExist] = useState(false);

    const history = useHistory();

    useEffect(() => {
        document.title = "Login"
    })

    const onChangeUsername = e => {
        setUsername(e.target.value)

        if (userDoesNotExist) {
            setUserDoesNotExist(false);
        }
    }

    const onChangePassword = e => {
        setPassword(e.target.value)

        if (userDoesNotExist) {
            setUserDoesNotExist(false);
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }

        axios.post('http://localhost:5000/users/login', user, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            const {data} = res;

            if (data.status === "login_successful") {
                const userData = data.account_data;
                const token = userData._id;

                sessionService.saveSession(token)
                    .then(() => {
                        sessionService.saveUser(userData)
                            .then(() => {
                                history.push('/dashboard');
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                console.log("Failed Login.");

                setUserDoesNotExist(true);
            }
        })
        .catch(err => console.log(err));
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
                            { userDoesNotExist ?
                                <p className="text-danger">There is no user with the given credentials.</p> :
                                null
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null)(LoginForm);