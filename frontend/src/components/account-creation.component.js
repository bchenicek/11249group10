import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class AccountCreation extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            birth_date: new Date(),
            showPassword: false,
            invalidForm: false
        }
    }

    componentDidMount() {
        document.title = "Create Account"
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            this.setState({
                showPassword: true
            })
        } else {
            this.setState({
                showPassword: false,
                invalidForm: false
            })
        }
        
        this.setState({
            password: e.target.value
        });
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeBirthDate(date) {
        this.setState({
            birth_date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.password.length < 8) {
            this.setState({
                invalidForm: true
            })
        } else {
            const user = {
                username: this.state.username,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                birth_date: this.state.birth_date
            }
    
            axios.post('http://localhost:5000/users/create', user)
                .then(res => console.log(res.data))
    
            this.setState({
                username: '',
                password: '',
                first_name: '',
                last_name: '',
                email: '',
                birth_date: new Date(),
            })
        }
    }
    
    render() {
        return (
        <div>
            <h3>Create GreenGator Account</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <label>Password:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    { this.state.showPassword ? <p className="text-danger">Password must be 8 characters or longer</p> : null }
                </div>
                <div className="form-group">
                    <label>First Name:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangeFirstName}
                        />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}
                        />
                </div>
                <div className="form-group">
                    <label>Email:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </div>
                <div className="form-group">
                    <label>Date:&nbsp;</label>
                    <label className="text-danger">*</label>
                    <div>
                        <DatePicker
                            required
                            selected={this.state.birth_date}
                            onChange={this.onChangeBirthDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Account" className="btn btn-primary" />
                </div>
                { this.state.invalidForm ? <p className="text-danger">Account does not meet requirements</p> : null }
            </form>
        </div>
        )
    }
}