import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import LoginForm from './components/login-form.component';
import AccountCreation from './components/account-creation.component';
import HomePage from './components/home-page.component';
import Dashboard from './components/dashboard.component';
import FootPrint from './components/footprint-calc.component';
import Challenges from './components/challenges.component';

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
        <AuthRoute path="/footprint-calculator">
          <FootPrint />
        </AuthRoute>
        <AuthRoute path="/challenges">
          <Challenges />
        </AuthRoute>
      </div>
    </Router>
  );
}

export default connect(null)(App);
