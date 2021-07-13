import Login from './pages/login/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Dashboard from './pages/dashboard/index';
import React from 'react'

function App () {
    return (
        <Router>
        <div className="App">
        <div>
            <Login />
        </div>
           <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          </Switch>
        </div>



      </Router>
        
    )
}

export default App
