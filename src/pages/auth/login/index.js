import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'


function index (props) {
    return (
        <div>
         <h1>{props.title}</h1>
         <br/>
         <Link to="/">Dashboard</Link>
         <br/>
         <br/>
         <Link to="/login/register">Register</Link>
        </div>
        
    );
}

export default index
