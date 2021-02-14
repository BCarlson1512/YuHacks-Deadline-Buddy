import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({open, setOpen}) {
    
    return (
        <div>
            <div className={open ? "viewport-nav" : "viewport-open"} style={{fontFamily: 'Syncopate, sans-serif' , fontSize: '4vh' , letterSpacing:'0.25vw'}} onClick={() => setOpen(!open)}>
                <Link to="/">My Tasks</Link>
                <Link to="/tasks/monthly">Monthly Overview</Link>
                <Link to="/create">Create Tasks</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Create an account</Link>
            </div>
        </div>
    )
}