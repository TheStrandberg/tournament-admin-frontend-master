import React from 'react'
import {NavLink} from "react-router-dom";
import './App.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></h1>
            <h1><NavLink to="/filter-games/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Filter on Games</NavLink></h1>
            <h1><NavLink to="/filter-names" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Filter on Tournament Names</NavLink></h1>
            <h1><NavLink to="/filter-venues" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Filter on Tournament Venues</NavLink></h1>
        </div>
    )
}

export default Navbar
