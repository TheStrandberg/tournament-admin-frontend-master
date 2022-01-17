import React from 'react'
import {Link} from "react-router-dom";
import './App.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1><Link to="/">Home</Link></h1>
            <h1><Link to="/filter-games">Filter on Games</Link></h1>
            <h1><Link to="/filter-names">Filter on Tournament Names</Link></h1>
            <h1><Link to="/filter-venues">Filter on Tournament Venues</Link></h1>
        </div>
    )
}

export default Navbar
