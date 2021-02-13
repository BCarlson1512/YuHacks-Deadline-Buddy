import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <h1>Registration</h1>
            <form className="login-form">
                <div>
                    <TextField id="standard-basic" label="Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit"> Register </Button>
                </div>
                <div className="login-redirect">
                    <p>Have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}
