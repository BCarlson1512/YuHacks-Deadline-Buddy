import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../css/login-styles.css'


export default function LoginScreen(props) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <h1>User Login</h1>
            <form className="login-form">
                <div>
                    <TextField id="standard-basic" label="Email" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Password" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit"> Sign In </Button>
                </div>
                <div className="login-redirect">
                    <p>Need an account?</p>
                    <Link to="/register">Create account</Link>
                </div>
            </form>
        </div>
    )
}
