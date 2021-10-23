import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import LoginForm from './components/login-form.component';
import AccountCreation from './components/account-creation.component';
import HomePage from './components/home-page.component';
import Dashboard from './components/dashboard.component';

import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import { connect } from 'react-redux';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <BasicRoute path="/login">
          <LoginForm />
        </BasicRoute>
        <BasicRoute path="/create-account">
          <AccountCreation />
        </BasicRoute>
        <AuthRoute path="/dashboard">
          <Dashboard />
        </AuthRoute>
      </div>
    </Router>
  );
}

export default App;
