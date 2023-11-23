// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <LoginPage setLoggedIn={setLoggedIn} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
