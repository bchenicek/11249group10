import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import LoginForm from './components/login-form.component';
import AccountCreation from './components/account-creation.component';
import HomePage from './components/home-page.component';
<<<<<<< Updated upstream
=======
import Dashboard from './components/dashboard.component';
import FootPrint from './components/footprint-calc.component';

import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import { connect } from 'react-redux';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
<<<<<<< Updated upstream
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/create-account" component={AccountCreation} />
=======
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
        <AuthRoute path="/footprint">
          <FootPrint />
        </AuthRoute>
>>>>>>> Stashed changes
      </div>
    </Router>
  );
}

export default App;
