import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form action="">
                <div className='form-control'>
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" name="" id="" value="Login" />
            </form>
            <p className='extended'><small>New to Ema-john? </small><Link className='link' to="/signup"> Create New Account</Link></p>
            <div className='or-hr'>
                <div className='hr'></div>
                <p><small>or</small></p>
                <div className='hr'></div>
            </div>
        </div>
    );
};

export default Login;