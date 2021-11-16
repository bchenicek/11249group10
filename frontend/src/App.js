import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import LoginForm from './components/login-form.component';
import AccountCreation from './components/account-creation.component';
import HomePage from './components/home-page.component';
import Dashboard from './components/dashboard.component';
import FootPrint from './components/footprint-calc.component';
import FootPrintRes from './components/footprint-results.component'
import Challenges from './components/challenges.component';
import GroupSearch from './components/group-search.component';
import GroupCreation from './components/group-creation.component';
import GroupView from './components/group-view.component';
import UserView from './components/user-view.component';
import NotificationPage from './components/notifications.component';

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
        <AuthRoute path="/footprint-results">
          <FootPrintRes />
        </AuthRoute>
        <AuthRoute path="/challenges">
          <Challenges />
        </AuthRoute>
        <AuthRoute path="/event-search">
          <GroupSearch />
        </AuthRoute>
        <AuthRoute path="/create-event">
          <GroupCreation />
        </AuthRoute>
        <AuthRoute path="/group/:id">
          <GroupView />
        </AuthRoute>
        <AuthRoute path="/user/:id">
          <UserView />
        </AuthRoute>
        <AuthRoute path="/notifications">
          <NotificationPage />
        </AuthRoute>
      </div>
    </Router>
  );
}

export default connect(null)(App);
