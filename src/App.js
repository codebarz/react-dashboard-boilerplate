import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Router>
    </>
  );
}

export default App;
