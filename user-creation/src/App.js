import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import LoginForm from './components/login-form.component';
import AccountCreation from './components/account-creation.component';
import HomePage from './components/home-page.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/create-account" component={AccountCreation} />
      </div>
    </Router>
  );
}

export default App;
