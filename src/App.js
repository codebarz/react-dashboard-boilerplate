import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

//Context
import { UserContext } from './Context';

import './App.css';

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
