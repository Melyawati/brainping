import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../dashboard/index';


function index () {
    return (
      <Router>
        <div className="App">
         <h1>hello Melya</h1>
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

      );
}

export default index
