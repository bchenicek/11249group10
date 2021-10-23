import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const AccountCreation = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birth_date, setBirthDate] = useState(new Date());

    useEffect(() => {
        document.title = "Create Account"
    })

    const onChangeUsername = e => {
        setUsername(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const onChangeFirstName = e => {
        setFirstName(e.target.value)
    }

    const onChangeLastName = e => {
        setLastName(e.target.value)
    }

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangeBirthDate = e => {
        setBirthDate(e)
    }

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email,
            birth_date: birth_date
        }

        axios.post('http://localhost:5000/users/create', user)
            .then(res => console.log(res.data))

        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setBirthDate(new Date());
    }
    
    return (
        <div>
            <h3>Create GreenGator Account</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={username}
                        onChange={onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <label>Password:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={password}
                        onChange={onChangePassword}
                        />
                </div>
                <div className="form-group">
                    <label>First Name:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={first_name}
                        onChange={onChangeFirstName}
                        />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text"
                        className="form-control"
                        value={last_name}
                        onChange={onChangeLastName}
                        />
                </div>
                <div className="form-group">
                    <label>Email:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={email}
                        onChange={onChangeEmail}
                        />
                </div>
                <div className="form-group">
                    <label>Date:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <div>
                        <DatePicker
                            required
                            selected={birth_date}
                            onChange={onChangeBirthDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Account" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )        
}

export default AccountCreation;